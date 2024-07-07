import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";

import { FaLinkedin, FaGithub, FaInstagram,} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; 

export const HERO_CONTENT = `   I am a passionate Frontend Developer skilled in building web applications using HTML,CSS JavaScript,React JS Tailwind Css and Material Ui. With a strong foundation in web development technologies, I am eager to contribute my expertise to create innovative and efficient software products.`;

export const ABOUT_TEXT = `  I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including CSS JavaScript,React JS Tailwind Css and Material Ui. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies,`;

 export const SocialmediaLink = [
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/ankit-singh-983b51241/',
    icon: FaLinkedin ,
  },
  {
    name: 'Github',
    url: 'https://github.com/ankitsingh2122',
    icon: FaGithub,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/iamankittsingh/',
    icon: FaInstagram,
  },
  {
    name: 'X',
    url: 'https://x.com/iamankittsingh',
    icon: FaXTwitter,
  },
];
export const EDUCATIONS = [
  {
    year: "jan 2024 - june 2024",
    Academic: "Udemy,FreecodeCamp,Youtube",
    description: `Completed training in frontend technologies React Js,Tailwind CSS, BootStrap and SASS`,
  },
  {
    year: " june 2017 - August 2020",
    Academic: "Chandigarh College of Engineering and Technology",
    description: `Completed Politechnic in Computer science and engineering with 7 CGPA.`,
  },
  {
    year: "April 2007 - May 2017",
    Academic: "Govt Model High School Sector 29-A Chandigarh",
    description: `Completed My High School Studies With 7.2CGPA`,
  },
];

export const PROJECTS = [
  {
    title: "Youtube Clone",
    image: project1,
    description: `In this YouTube clone, you can Search content with keywords related to keyword the content displayed on the screen
    In the Navbar we set some KeyWords if we click on that keyword then the display shows keyword-related content. we can also play the video and show the channel page details videos
    we fetch the data from RapidAPI`,
    technologies: ["React JS", "Material UI", "Axios", "React-Router-Dom"],
    link: `https://youtube-clone-india.netlify.app/`,
  },
  {
    title: "ShopMax",
    image: project2,
    description: `ShopMax is an e-commerce web app with fake products fetched data from fakestore API
      We can add products to the cart, Increase or decrease the quantity with the price of the products in the cart
      Tech Stack: React router dom, Redux, React-hot-toast, fakestoreapi`,
    technologies: ["React JS", "React-Router-Dom", "Redux", "React-hot-toast"],
    link: `https://kaleidoscopic-gingersnap-553097.netlify.app/`,
  },
  {
    title: "Pixel Movies",
    image: project3,
    description: `Pixel Movies is a website that lists trending movies, series from TMDB
    Database api`,
    technologies: ["React", "Tailwind", "TMDB api", "React-Router-Dom"],
    link: `https://pixelmovies.netlify.app/`,
  },
];

export const CONTACT = {
  address: "Chandigarh India",
  phoneNo: "+917696955436 ",
  email: "ankitsingh02122@gmail.com",
};
