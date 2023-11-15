import React from 'react';
import data from '../data/skills';

const AboutMe = () => {
  return (
    <section id="about" className="aboutme bg-black">
      <div>
        <h2 className="aboutme-heading text-xl text-center">About me</h2>
        <p className="aboutme-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt totam
          unde nemo commodi. Nihil ab hic, impedit placeat esse assumenda magnam
          maiores voluptas nostrum, exercitationem rem deserunt, aut dolorum
          numquam voluptates tempore accusantium tenetur facilis nam optio
          fugiat et. Qui vitae aut, similique eos, laboriosam voluptates dolorum
          facilis vero blanditiis hic enim? Praesentium similique ullam,
          explicabo beatae consectetur perferendis sint illum officiis illo?
          Impedit pariatur ratione magnam repudiandae eaque aliquid maiores,
          perspiciatis, adipisci eius ad ea aperiam autem, explicabo sit iusto
          ipsum. Nesciunt voluptatum magnam officia ex eveniet praesentium, a
          recusandae incidunt esse deleniti placeat quam quos explicabo quasi
          vero.
        </p>
      </div>
      <div className="container-skills">
        <h3 className="skills-heading text-l">Skills & Technologies</h3>
        <div className="skills-container-img">
          {data?.skills?.map((item, index) => (
            <div key={index} className="skill-group-img">
              <div>
                <img src={item.src} className="skill-img" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
