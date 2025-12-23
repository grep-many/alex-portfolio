export const basePath = "/alex-portfolio";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: `${basePath}/b1.svg`,
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: `${basePath}/grid.svg`,
    spareImg: `${basePath}/b4.svg`,
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: `${basePath}/b5.svg`,
    spareImg: `${basePath}/grid.svg`,
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
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
    link: "https://github.com/alexhajdin?tab=repositories",
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
    link: "https://github.com/alexhajdin/zoom-clone",
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
    link: "https://github.com/alexhajdin/ai_saas_app",
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
    link: "https://github.com/alexhajdin/iphone",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with alex was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. alex's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, alex is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with alex was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. alex's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, alex is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with alex was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. alex's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, alex is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with alex was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. alex's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, alex is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with alex was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. alex's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, alex is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: `${basePath}/cloud.svg`,
    nameImg: `${basePath}/cloudName.svg`,
  },
  {
    id: 2,
    name: "appwrite",
    img: `${basePath}/app.svg`,
    nameImg: `${basePath}/appName.svg`,
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: `${basePath}/host.svg`,
    nameImg: `${basePath}/hostName.svg`,
  },
  {
    id: 4,
    name: "stream",
    img: `${basePath}/s.svg`,
    nameImg: `${basePath}/streamName.svg`,
  },
  {
    id: 5,
    name: "docker.",
    img: `${basePath}/dock.svg`,
    nameImg: `${basePath}/dockerName.svg`,
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: `${basePath}/exp1.svg`,
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: `${basePath}/exp2.svg`,
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: `${basePath}/exp3.svg`,
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: `${basePath}/exp4.svg`,
  },
];

export const socialMedia = [
  {
    id: 1,
    img: `${basePath}/git.svg`,
  },
  {
    id: 2,
    img: `${basePath}/twit.svg`,
  },
  {
    id: 3,
    img: `${basePath}/link.svg`,
  },
];
