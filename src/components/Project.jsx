import "../styles/Project.css";

function Project({ image, name }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={name} />
        <div className="project-overlay"></div>
      </div>
    </div>
  );
}

export default Project;
