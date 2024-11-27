import "./Projects.css";
const Projects = () => {
  const Logo = [
    {
      name: "Vitec",
      img: "https://via.placeholder.com/120x60",
    },
    {
      name: "Vitec",
      img: "https://via.placeholder.com/120x60",
    },
    {
      name: "Vitec",
      img: "https://via.placeholder.com/120x60",
    },
    {
      name: "Vitec",
      img: "https://via.placeholder.com/120x60",
    },
    {
      name: "Vitec",
      img: "https://via.placeholder.com/120x60",
    },
    {
      name: "Vitec",
      img: "https://via.placeholder.com/120x60",
    },
    {
      name: "Vitec",
      img: "https://via.placeholder.com/120x60",
    },
    {
      name: "Vitec",
      img: "https://via.placeholder.com/120x60",
    },
  ];
  return(
     <div className="project-container">
        <h2 className="project-title">
            Over <span className="highlight">1000</span> Projects Successfully Completed
        </h2>
        <div className="projects-logos" {
            Logo.map((project, index) =>(
                <div className="logo-item" key = {index}>
                <img src="{Project.img} " alt="{project.name}" className="logo-image" />
            </div>
            ))
        }>
           
        </div>

  </div>);
};

export default Projects;
