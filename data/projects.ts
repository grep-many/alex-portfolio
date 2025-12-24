import { basePath, github } from "@/constants";

const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: `${basePath}/p1.svg`,
    iconLists: [
      `${basePath}/re.svg`,
      `${basePath}/tail.svg`,
      `${basePath}/ts.svg`,
      `${basePath}/three.svg`,
      `${basePath}/fm.svg`,
    ],
    link: `https://github.com/${github}?tab=repositories`,
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: `${basePath}/p2.svg`,
    iconLists: [
      `${basePath}/next.svg`,
      `${basePath}/tail.svg`,
      `${basePath}/ts.svg`,
      `${basePath}/stream.svg`,
      `${basePath}/c.svg`,
    ],
    link: `https://github.com/${github}/zoom-clone`,
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: `${basePath}/p3.svg`,
    iconLists: [
      `${basePath}/re.svg`,
      `${basePath}/tail.svg`,
      `${basePath}/ts.svg`,
      `${basePath}/three.svg`,
      `${basePath}/c.svg`,
    ],
    link: `https://github.com/${github}/ai_saas_app`,
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: `${basePath}/p4.svg`,
    iconLists: [
      `${basePath}/next.svg`,
      `${basePath}/tail.svg`,
      `${basePath}/ts.svg`,
      `${basePath}/three.svg`,
      `${basePath}/gsap.svg`,
    ],
    link: `https://github.com/${github}/iphone`,
  },
];

export default projects;
