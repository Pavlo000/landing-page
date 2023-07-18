import { ProjectsList } from '../ProjectsList';
import './Projects.scss';

export const Projects: React.FC = () => {
  return (
    <section className="Projects" id="projects">
      <h2 className="Projects__title">
        My Projects Highlight
      </h2>

      <ProjectsList />
    </section>
  );
}