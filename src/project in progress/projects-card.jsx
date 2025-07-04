
import './projects-card.scss';

const ProjectsCard = ({ title, description, picture, githubLink }) => {
  return (
    <div className="in-progress-card">
        <div className="description-card">
            <h3>{title}</h3>
            <p>{description}</p>
        <div className='github-link-container'>
            {githubLink && (
            <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-link"
            >
                voir le Github
            </a>
            )}
        </div>
        </div>
        {picture && (
        <div className="picture-card">
          <img src={picture} alt={title} />
        </div>
      )}
    </div>
  );
};


export default ProjectsCard;