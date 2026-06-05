import PostcssConfig from "@/postcss.config";
import {
  Code2,
  Layers,
  GraduationCap,
  Briefcase,
  Frame,
} from "lucide-react";
import { SiPostman } from "react-icons/si";

function RenderIcon({
  icon,
  iconDark,
  name,
  iconClassName = "",
  imgClassName = "",
}) {
  // Jika icon berupa path gambar lokal
  if (typeof icon === "string") {
    if (iconDark) {
      return (
        <>
          <img
            src={icon}
            alt={name}
            className={`${imgClassName} dark:hidden`}
          />
          <img
            src={iconDark}
            alt={name}
            className={`${imgClassName} hidden dark:block`}
          />
        </>
      );
    }

    return <img src={icon} alt={name} className={imgClassName} />;
  }

  // Jika icon berupa component dari lucide-react
  const Icon = icon;
  return <Icon className={iconClassName} />;
}

export default function About() {
  const tools = [
    { name: "vscode", icon: "/assets/vscode.png" },
    { name: "claude", icon: "/assets/claude-logo.svg" },
    { name: "mongodb", icon: "/assets/mongodb.png" },
    { name: "mysql", icon: "/assets/mysql-icon.png" },
    { name: "postman", icon: "/assets/postman-icon.webp" },
    { name: "figma", icon: "/assets/figma.png" },
    { name: "git", icon: "/assets/git.png" },
  ];

  const data = [
    {
      name: "Languages",
      icon: Code2,
      description: "JavaScript, React Js, C++, Python, C#, Kotlin",
    },
    {
      name: "Frameworks",
      icon: "/assets/tblack.png",
      iconDark: "/assets/t.png",
      description: "Laravel, Vue Js, React Js, Next Js",
    },
    {
      name: "Education",
      icon: GraduationCap,
      description: "Informatika in SMK YPC Tasikmalaya",
    },
    {
      name: "Projects",
      icon: Briefcase,
      description: "Built more than 10 projects",
    },
  ];

  return (
    <div
      id="about"
      className="w-full px-6 sm:px-[8%] lg:px-[12%] py-16 scroll-mt-20"
    >
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] items-start gap-14 lg:gap-20 mt-16">
        {/* Image Section */}
        <div className="relative mx-auto w-full max-w-[390px]">
          <img
            src="/assets/hero.png"
            alt="Profile"
            className="w-full aspect-[4/5] rounded-3xl object-cover object-center"
          />

          <div className="bg-white w-20 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
            <Frame className="w-6 h-6 text-gray-700" />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full">
          <p className="mb-10 max-w-2xl text-center lg:text-left font-Ovo leading-8">
            I am an experienced Frontend Developer with over a decade of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto lg:mx-0">
            {data.map((item) => (
              <li
                key={item.name}
                className="min-h-[180px] h-full border border-gray-300 dark:border-white/30 rounded-2xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50 flex flex-col justify-start"
              >
                <div className="w-11 h-11 rounded-xl bg-gray-100 dark:bg-white/10 flex items-center justify-center mb-5">
                  <RenderIcon
                    icon={item.icon}
                    iconDark={item.iconDark}
                    name={item.name}
                    iconClassName="w-6 h-6 text-gray-700 dark:text-white"
                    imgClassName="w-6 h-6 object-contain"
                  />
                </div>

                <h3 className="mb-3 font-semibold text-gray-700 dark:text-white text-lg">
                  {item.name}
                </h3>

                <p className="text-gray-600 text-sm dark:text-white/80 leading-6">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

          <h4 className="mt-10 mb-6 text-gray-700 font-Ovo dark:text-white/80 text-center lg:text-left">
            Tools I use
          </h4>

          <ul className="flex items-center justify-center lg:justify-start gap-3 sm:gap-5">
            {tools.map((tool) => (
              <li
                key={tool.name}
                title={tool.name}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <RenderIcon
                  icon={tool.icon}
                  name={tool.name}
                  iconClassName="w-5 h-5 sm:w-7 sm:h-7 text-gray-700 dark:text-white"
                  imgClassName="w-5 h-5 sm:w-7 sm:h-7 object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}