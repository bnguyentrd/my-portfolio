// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithubSquare,
  FaLink,
  FaPython,
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiDjango, 
  SiRedux,
  SiFastapi,
  SiPostgresql,
  SiDocker,
  SiRabbitmq,
  SiMongodb,
} from "react-icons/si";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "bnguyentrd";

// Blog link icon (imported above)
export const Blog = <FaLink />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Hello, my name is Bobby Nguyen and I am a full stack developer with a passion for creativity. I have a strong background in both front-end and back-end development, and I am committed to delivering top-quality solutions that are both user-friendly and visually appealing. My expertise in HTML, CSS, JavaScript, React, and various frameworks and libraries, combined with my love for design, allows me to bring a unique perspective to every project I work on. I am always seeking new challenges and opportunities to grow as a developer and bring innovative ideas to life.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <FaBootstrap className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <SiDjango className="display-4" />,
    name: "Django",
  },
  {
    id: 7,
    skill: <SiRedux className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
  {
    id: 10,
    skill: <SiFastapi className="display-4" />,
    name: "FastAPI",
  },
  {
    id: 11,
    skill: <FaPython className="display-4" />,
    name: "Python",
  },
  {
    id: 12,
    skill: <SiPostgresql className="display-4" />,
    name: "PostgreSQL",
  },
  {
    id: 13,
    skill: <SiDocker className="display-4" />,
    name: "Docker",
  },
  {
    id: 14,
    skill: <SiRabbitmq className="display-4" />,
    name: "RabbitMQ",
  },
  {
    id: 15,
    skill: <SiMongodb className="display-4" />,
    name: "Mongo DB",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/myyaewrp";
