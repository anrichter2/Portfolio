import Project from "../components/Project";
import projects from "../utils/projectData.js"

export default function Portfolio() {

    return (
        <div>
            <h2>Portfolio</h2>
            <div className="container">
                <div className="row">
                {projects.map((project) => (
                    <Project key={project.id} project={project}/>
                ))}
                </div>
            </div>
        </div>
    );
};