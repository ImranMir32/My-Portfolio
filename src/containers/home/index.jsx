import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import Resume from "../../assets/Md. Imran Mir.pdf";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Imran
          <br />
          Full Stack Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>

          <a href={Resume} download="Resume">
            <button>Download Resume</button>
          </a>
        </div>

        <div className="home__social">
          <div className="home__social__icon">
            <a
              href="https://www.linkedin.com/in/md-imran-mir-972997206/"
              target="_blank"
              rel="noreferrer"
            >
              {<FaLinkedin size={40} color="var( --yellow-theme-main-color)" />}
            </a>
          </div>
          <div className="home__social__icon">
            <a
              href="https://github.com/ImranMir32"
              target="_blank"
              rel="noreferrer"
            >
              {
                <FaGithubSquare
                  size={40}
                  color="var( --yellow-theme-main-color)"
                />
              }
            </a>
          </div>
          <div className="home__social__icon">
            <a
              href="https://codeforces.com/profile/Imran32"
              target="_blank"
              rel="noreferrer"
            >
              {
                <SiCodeforces
                  size={40}
                  color="var( --yellow-theme-main-color)"
                />
              }
            </a>
          </div>
          <a
            href="https://leetcode.com/Imran32/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="home__social__icon">
              {<SiLeetcode size={40} color="var( --yellow-theme-main-color)" />}
            </div>
          </a>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
