import React from 'react';
import circle from '../assets/circle.png';

const Skills = () => {
  return (
    <section className="skills">
      <h3 className="skills-heading text-center text-l">
        Skills & Technologies
      </h3>
      <div className="skills-container-img">
        <ul>
          <li>
            <div className="skill-item">
              <img src={circle} className="skill-img" />
              <p className="skill-text">Skill 1</p>
            </div>
          </li>
          <li>
            <div className="skill-item">
              <img src={circle} className="skill-img" />
              <p className="skill-text">Skill 2</p>
            </div>
          </li>
          <li>
            <div className="skill-item">
              <img src={circle} className="skill-img" />
              <p className="skill-text">Skill 3</p>
            </div>
          </li>
          <li>
            <div className="skill-item">
              <img src={circle} className="skill-img" />
              <p className="skill-text">Skill 4</p>
            </div>
          </li>
          <li>
            <div className="skill-item">
              <img src={circle} className="skill-img" />
              <p className="skill-text">Skill 5</p>
            </div>
          </li>
          <li>
            <div className="skill-item">
              <img src={circle} className="skill-img" />
              <p className="skill-text">Skill 6</p>
            </div>
          </li>
          <li>
            <div className="skill-item">
              <img src={circle} className="skill-img" />
              <p className="skill-text">Skill 7</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
