import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import PageHeaderContent from "../../components/pageHeaderContent";
import { MdOutlineContactPhone } from "react-icons/md";
import { Animate } from "react-simple-animate";
import "./styles.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n4ch7u1",
        "template_6410oas",
        form.current,
        "p2m_dLhVVqi6U-zfq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const showToastMessage = () => {
    toast.success("Successfully send !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={
          <MdOutlineContactPhone
            size={40}
            color="var( --yellow-theme-main-color)"
          />
        }
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="contact__content__form__controlswrapper">
                <div>
                  <input
                    required
                    name="user_name"
                    className="inputName"
                    type={"text"}
                  />
                  <label htmlFor="name" className="nameLabel">
                    Name
                  </label>
                </div>
                <div>
                  <input
                    required
                    name="user_email"
                    className="inputEmail"
                    type={"text"}
                  />
                  <label htmlFor="email" className="emailLabel">
                    Email
                  </label>
                </div>
                <div>
                  <textarea
                    required
                    name="message"
                    className="inputDescription"
                    type={"text"}
                    rows="5"
                  />
                  <label htmlFor="description" className="descriptionLabel">
                    Description
                  </label>
                </div>
              </div>
              <button type="submit" value="Send" onClick={showToastMessage}>
                Submit
              </button>
              <ToastContainer />
            </form>
          </div>
        </Animate>
      </div>
    </section>
  );
};
export default Contact;
