import projects from '../../assets/api/projects.json';
import { ProjectsListItem } from '../ProjectsListItem';
import './ProjectsList.scss';

export const ProjectsList: React.FC = () => {
  return (
    <article className="ProjectsList">
      <ul className="ProjectsList__list">
        {projects.map(project => (
          <li className="ProjectList__item" key={project.id}>
            <ProjectsListItem project={project} />
          </li>
        ))}
      </ul>
    </article>
  );
}