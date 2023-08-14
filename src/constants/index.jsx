import journey from "../assets/images/projects/journey.png"
import bandsite from "../assets/images/projects/bandsite.png"
import brainflix from "../assets/images/projects/Brainflix.png"
import flags from "../assets/images/projects/flags.png"
// import inStock from "../assets/images/projects/inStock.gif"

const projects = [
    {
      id: 1,
      title: "Journey",
      description: "2D platformer game built with react using canvas",
      img: journey,
      link: "https://github.com/TommieeN/Journey-React-Platformer-Game",
      deploy: "https://647fe614ec115515d29a0e71--golden-nasturtium-3edb6f.netlify.app/",
    },
    {
      id: 2,
      title: "Bandsite",
      description: "Fully responsive website for a fictional band that include show dates.",
      img: bandsite,
      link: "https://github.com/TommieeN/band-site",
      deploy: "https://my-band-site.netlify.app/",
    },
    {
      id: 3,
      title: "Brainflix",
      description: "Full stack streaming platform. Users can post comments and upload videos.",
      img: brainflix,
      link: "https://github.com/TommieeN/Brainflix",
      deploy: "https://brainflix.onrender.com/",
    },
    {
      id: 4,
      title: "Flags",
      description: "A list of flags from around the world.",
      img: flags,
      link: "https://github.com/TommieeN/country-flags-api",
      deploy: "https://client-flags.onrender.com/"
    },
    // {
    //   id: 5,
    //   title: "In-Stock",
    //   description: "A collaborative project utilizing agile methodologies to create a full stack application.",
    //   img: inStock,
    //   link: "https://github.com/TommieeN/instock-client",
    // },
  ];

  export { projects }