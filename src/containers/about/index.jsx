import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiNodejs } from "react-icons/di";
import { FaReact, FaDatabase, FaPython } from "react-icons/fa";
import { SiCplusplus, SiMongodb } from "react-icons/si";
import { TbBrandGolang, TbBrandJavascript } from "react-icons/tb";

const personalDetails = [
  {
    label: "Name :",
    value: "Md. Imran Mir",
  },
  {
    label: "Email :",
    value: "imranmir6677@gmail.com",
  },
  {
    label: "Contact No :",
    value: "01866078547",
  },
];

const jobSummary =
  "As a Full Stack Developer with one year of experience, I specialize in using React.js, Node.js, and MongoDB to build powerful web applications. With React.js, I create user-friendly interfaces that adapt to different devices and enable seamless data display. Node.js helps me build fast and scalable APIs, while MongoDB allows for efficient data storage and retrieval.";

const jobSummary2 =
  "In addition I also have knowledge of C++, Python, Java, and Go lang. These languages provide me with the flexibility to handle various programming challenges and also allows me to create high-performance applications. With C++, I can develop high-performance applications, while Python allows me to prototype and automate tasks efficiently. In Java, I can create robust enterprise-level applications. Go lang, known for its concurrency and efficiency, helps me build scalable back-end services.";
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        // icon={<FcAbout size={40} color="var( --yellow-theme-main-color)" />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Full Stack Developer</h3>
            <p>
              {jobSummary} <br></br> {jobSummary2}
            </p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaReact size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiNodejs size={94} color="var( --yellow-theme-main-color)" />
              </div>

              <div>
                <FaPython size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <SiCplusplus
                  size={60}
                  color="var( --yellow-theme-main-color)"
                />
              </div>
              <div>
                <SiMongodb size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
              </div>

              <div>
                <TbBrandGolang
                  size={60}
                  color="var( --yellow-theme-main-color)"
                />
              </div>
              <div>
                <TbBrandJavascript
                  size={60}
                  color="var( --yellow-theme-main-color)"
                />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
