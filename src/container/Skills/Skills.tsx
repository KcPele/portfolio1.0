
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import "./Skills.scss";
import {  ExWorkI } from "../../models";
import { NavigationDots, SocialMedia } from "../../components";
import { skills, experiences } from "../../constants/data";
const Skills = () => {


  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className=" app__skills app__flex "
    >
      <div id="skills" className="app__container app__whitebg">
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <h2 className="head-text">Skills & Experiences</h2>

          <div className="app__skills-container">
            <motion.div className="app__skills-list">
              {skills.map((skill) => (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-item app__flex"
                  key={skill.name + skill.icon}
                >
                  <div
                    className="app__flex"
                    style={{ backgroundColor: skill.bgColor }}
                  >
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                  <p className="p-text">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
            <div className="app__skills-exp">
              {experiences.map((experience) => (
                <motion.div
                  className="app__skills-exp-item"
                  key={experience._createdAt}
                >
                  <div className="app__skills-exp-year">
                    <p className="bold-text">{experience.year}</p>
                  </div>
                  <motion.div className="app__skills-exp-works">
                    {experience.works.map((work: ExWorkI) => (
                      <div key={work._createdAt + Date.now()}>
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          className="app__skills-exp-work"
                          data-tip
                          data-for={work.name}
                        >
                          <h4 className="bold-text">{work.name}</h4>
                          <p className="p-text">{work.company}</p>
                        </motion.div>
                        <ReactTooltip
                          id={work.name}
                          effect="solid"
                          arrowColor="#fff"
                          className="skills-tooltip"
                        >
                          {work.desc}
                        </ReactTooltip>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="copyright">
            <p className="p-text">@2022 KCPELE</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active="skills" />
      </div>
    </motion.div>
  );
};

export default Skills;
