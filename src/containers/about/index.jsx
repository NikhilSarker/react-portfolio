import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { FaHtml5, FaDatabase, FaPhp, FaReact, FaCss3Alt } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

const personalDetails = [
  {
    label: "Name: ",
    Value: "Nikhil Sarker",
  },
  {
    label: "Date of Birth: ",
    Value: "1987/12/30",
  },
  {
    label: "Address: ",
    Value: "Toronto, Canada",
  },
  {
    label: "Contact No.: ",
    Value: "+1 437 777 9055",
  },

  {
    label: "Email: ",
    Value: "nikhilsavar1987@gmail.com",
  },
];

const jobSummary =
  "Hello! My name is Nikhil sarker and I enjoy creating things that live on the internet. I have 2+ years experience, and I completed more than 10 projects. I also recently launched a web development course that cover everything you need to build web application.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about_content">
        <div className="about_content_personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Front End Developer{" "}
            </h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.Value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about_content_serviceWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about_content_serviceWrapper_innerContent">
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaPhp size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaHtml5 size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaCss3Alt size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiJavascript1
                  size={60}
                  color="var(--yellow-theme-main-color)"
                />
              </div>
              <div>
                <FaReact size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
