import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./style.scss";
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact_content">
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
          <h3 className="contact_content_headerText">Let's Talk</h3>
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
          <form action="#" method="post" className="contact_content_form">
            <div className="contact_content_form_controlWrapper">
              <div>
               
                <input type={"text"} className="nameInput" name="name" required/>
                <label htmlFor="name" className="nameLabel">Name</label> 
              </div>
              <div>
            
                <input type={"email"} className="emailInput" name="email" required/>
                <label htmlFor="email" className="emailLabel">Email</label> 
              </div>
              <div>
                                         
              <textarea type={"text"} className="descriptionInput" name="description" rows={7} required/>
              <label htmlFor="description" className="descriptionLabel">Description</label>
              </div>

            </div>
            <button>Submit</button>

          </form>
        </Animate>
      </div>
    </section>
  );
};
export default Contact;
