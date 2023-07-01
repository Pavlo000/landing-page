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
            Aaronn is a New York-based visual designer focusing on branding and visual identity. Her portfolio showcases her wide range of work, spanning books, posters and web design.
          </p>

          <a href="/about" className="About__button button">
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