import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import img from "../assets/images/contact-img.svg";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const errorToast = () => "Please fill in all fields";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Empty fields check
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields!", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    // Email validity check
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email!", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_ywprvph",
        "template_ls2e94b",
        {
          from_name: form.name,
          to_name: "Tommy",
          from_email: form.email,
          to_email: "timsnguyen@hotmail.com",
          message: form.message,
        },
        "s6jc0I844TxtaN1mY"
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Thank you. I will get back to you as soon as possible.",
            {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          toast.error("Something went wrong. Please try again.", {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };
  return (
    <>
      <div className="contact bg-[linear-gradient(90deg,#b004b0,#38097a);] w-full">
        <div className="wrapper flex justify-center  py-16 gap-52 lg:py-12">
          <div className="imgbox lg:hidden">
            <img className="w-[550px] h-full" src={img} alt="" />
          </div>
          <div className="content-box">
            <h1 id="contact" className="text-white font-bold text-4xl">Get In Touch</h1>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col"
            >
              <div className="flex gap-4 py-4">
                <input
                  className="bg-transparent h-14 rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white lg:w-[100%] "
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
                <input
                  className="bg-transparent h-14  rounded-2xl   border-[1px] border-white pl-4 text-white placeholder-white  lg:w-[100%]"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
              <textarea
                className="bg-transparent rounded-2xl border-[1px] border-white h-36 pl-4 text-white w-full placeholder-white pt-2"
                rows={40}
                cols={35}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
              ></textarea>
              <button onClick={errorToast} type="submit" className="bg-white border-black border-[1] mt-4 py-[16px] rounded-lg px-8 my-8 w-32 font-bold ">
              {loading ? "Sending..." : "Send"}
              </button>
              <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
