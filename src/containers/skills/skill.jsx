import { Line } from "rc-progress";
import { useState, useEffect } from "react";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import "./style.scss";

export default function Skill() {
  const [skillName, setSkillName] = useState("");
  // const [skillPercent, setSkillPercent] = useState("");

  useEffect(() => {
    const getSkills = async () => {
      let response = await fetch("https://laravel.nsarker.com/api/skills");
      let data = await response.json();

      setSkillName(
        <div className="skillWrapper">
          {data.map((item, i) => (
            <div className="skillWrapper_innerContent" key={i}>
              <Animate
                play
                duration={1.5}
                delay={0.5}
                start={{
                  transform: "translateX(-500px)",
                }}
                end={{
                  transform: "translateX(0px)",
                }}
              >
                <h3 className="skillWrapper_innerContent_categoryText">
                  {item.name}
                </h3>
                <div className="skillPercent">
                  {/* {data.map((item, j) => ( */}
                    <AnimateKeyframes
                      play
                      duration={1}
                      keyframes={["opacity:1", "opacity:0"]}
                      iterationCount="1"
                    >
                      <div className="progresBarWrapper" key={i}>
                        <p>{item.percent}%</p>
                        <Line
                          percent={item.percent}
                          strokeWidth="5"
                          strokeColor="var(--yellow-theme-main-color)"
                          trailWidth={"20"}
                          strokeLinecap="square"
                        />
                      </div>
                    </AnimateKeyframes>
                  
                </div>

              
              </Animate>
            </div>
          ))}
        </div>
      );
    };
    getSkills(); //run the async function we just defined
  }, []); //empty square brackets are an empty dependency array

  return (
    <div>
      
      <div>{skillName}</div>
      
    </div>
  );
}
