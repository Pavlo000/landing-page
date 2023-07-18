import cv from '../../assets/files/Pavlo-Moroz-CV.pdf';
import image from '../../assets/images/about-photo.jpg';
import './About.scss';

export const About: React.FC = () => {
  return (
    <section className="About" id="about">
      <article className="About__article">
        <div className="About__block">
          <h3 className="About__title">
            Let’s get know about me closer
          </h3>
          <p className="About__description body-medium">
            Welcome! I'm Pavlo Moroz, an enthusiastic and talented Software Developer dedicated to crafting outstanding user experiences. My passion lies in finding innovative solutions that precisely meet clients' and users' needs.
          </p>

          <a href={cv} className="About__button button" download>
            Discover More About Me
          </a>
        </div>
        <div className="About__block">
          <div className="About__wrapper">
            <img
              className="About__image"
              src={image}
              alt="About"
            />
          </div>
        </div>
      </article>
    </section>
  );
}