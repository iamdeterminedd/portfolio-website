import React from 'react';
import project from '../assets/webproject.png';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="project-heading text-xl text-center">Projects</h2>
        <div className="project-container">
          <div className="project-img">
            <img src={project} className="project-img" />
          </div>
          <div className="project-details">
            <h3 className="project1-heading text-l">Project Title</h3>
            <p className="project-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates a, vero facilis sint quia eaque voluptas assumenda
              impedit labore, amet alias autem ea iusto porro quas delectus.
              Doloremque, aliquam consequatur. Vero sit dicta voluptatem debitis
              ut amet fugit, atque ex numquam, fuga suscipit ipsam tempora eum
              itaque, recusandae facere minus!
            </p>
            <div className="project-btn-container">
              <a className="btn btn-project btn-primary">Visit Site</a>
              <a className="btn btn-project-noborder btn-primary">
                Source Code
              </a>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project-img">
            <img src={project} className="project-img" />
          </div>
          <div className="project-details">
            <h3 className="project1-heading text-l">Project Title</h3>
            <p className="project-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates a, vero facilis sint quia eaque voluptas assumenda
              impedit labore, amet alias autem ea iusto porro quas delectus.
              Doloremque, aliquam consequatur. Vero sit dicta voluptatem debitis
              ut amet fugit, atque ex numquam, fuga suscipit ipsam tempora eum
              itaque, recusandae facere minus!
            </p>
            <div className="project-btn-container">
              <a className="btn btn-project btn-primary">Visit Site</a>
              <a className="btn btn-project-noborder btn-primary">
                Source Code
              </a>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project-img">
            <img src={project} className="project-img" />
          </div>
          <div className="project-details">
            <h3 className="project1-heading text-l">Project Title</h3>
            <p className="project-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates a, vero facilis sint quia eaque voluptas assumenda
              impedit labore, amet alias autem ea iusto porro quas delectus.
              Doloremque, aliquam consequatur. Vero sit dicta voluptatem debitis
              ut amet fugit, atque ex numquam, fuga suscipit ipsam tempora eum
              itaque, recusandae facere minus!
            </p>
            <div className="project-btn-container">
              <a className="btn btn-project btn-primary">Visit Site</a>
              <a className="btn btn-project-noborder btn-primary">
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
