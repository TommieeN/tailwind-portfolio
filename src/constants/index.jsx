// Project Thumbnails
import journey from "../assets/images/projects/journey.png"
import bandsite from "../assets/images/projects/bandsite.png"
import brainflix from "../assets/images/projects/Brainflix.png"
import flags from "../assets/images/projects/flags.png"
import inStock from "../assets/images/projects/inStock.png"

// Tech Stack Icons
import css from "../assets/images/techIcons/css.svg"
import git from "../assets/images/techIcons/git.svg"
import html from "../assets/images/techIcons/html.svg"
import javascript from "../assets/images/techIcons/javascript.svg"
import mysql from "../assets/images/techIcons/mysql.svg"
import node from "../assets/images/techIcons/node.svg"
import react from "../assets/images/techIcons/react.svg"
import tailwind from "../assets/images/techIcons/tailwind.svg"
import sass from "../assets/images/techIcons/sass.svg"
import typescript from "../assets/images/techIcons/typescript.svg"

const techIcons = [
  {
    title: "React",
    img: react
  },
  {
    title: "TypeScript",
    img: typescript
  },
  {
    title: "Javascript",
    img: javascript
  },
  {
    title: "TailwindCSS",
    img: tailwind
  },
  {
    title: "mySQL",
    img: mysql
  },
  {
    title: "Node",
    img: node
  },
  {
    title: "Sass",
    img: sass
  },

  {
    title: "CSS",
    img: css
  },
  {
    title: "Git",
    img: git
  },
  {
    title: "Html",
    img: html
  },
]

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
      id: 5,
      title: "In-Stock",
      description: "A collaborative project utilizing agile methodologies to create a full stack application.",
      img: inStock,
      link: "https://github.com/TommieeN/instock-client",
    },
    {
      id: 4,
      title: "Flags",
      description: "A list of flags from around the world.",
      img: flags,
      link: "https://github.com/TommieeN/country-flags-api",
      deploy: "https://client-flags.onrender.com/"
    },
  ];

  export { projects, techIcons }