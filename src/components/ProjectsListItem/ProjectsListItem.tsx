import './ProjectsListItem.scss';

type Props = {
  project: {
    id: number,
    image: string,
    title: string,
    description: string,
    technologies: string[],
  }
};

export const ProjectsListItem: React.FC<Props> = ({ project }) => {
  const { id, image, title, description, technologies } = project;


  return (
    <article className="ProjectsListItem">
      <img
        className="ProjectsListItem__image"
        src={image}
        alt={`project ${id}`}
      />
      <h4 className="ProjectsListItem__title">
        {title}
      </h4>

      <ul className="ProjectsListItem__list">
        <li className="ProjectsListItem__item">
          <p className="ProjectsListItem__key">
            Technologies:
          </p>
          <p className="ProjectsListItem__value">
            {technologies.join(', ')}
          </p>
        </li>

        <li className="ProjectsListItem__item">
          <p className="ProjectsListItem__key">
            Description:
          </p>
          <p className="ProjectsListItem__value">
            {description}
          </p>
        </li>
      </ul>
    </article>
  );
}