import { ProjectsList } from '../ProjectsList';
import './Projects.scss';

export const Projects: React.FC = () => {
  return (
    <section className="Projects" id="projects">
      <h2 className="Projects__title">
        My Projects Highlight
      </h2>

      <a href="/projects" className="Projects__button button button--reverse">
        Explore more
      </a>

      <ProjectsList />
    </section>
  );
}