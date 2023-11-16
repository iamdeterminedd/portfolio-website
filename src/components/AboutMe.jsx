import React from 'react';
import Skills from '../components/Skills';

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
        <div className="skills-container-img">
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
