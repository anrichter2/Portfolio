import Project from "../components/Project";

export default function Portfolio() {

    // Add data of projects for the project page tehn pass to project component
    // array of objects with title:, Github URL:, deployed URL:
    const projects = [{
        id: 1,
        projectTitle: 'Example',
        gitHubURL: 'https://github.com/anrichter2',
        deployedURL: 'https://www.google.com'
    },
    {
        id: 2,
        projectTitle: 'Example',
        gitHubURL: 'https://github.com/anrichter2',
        deployedURL: 'https://www.google.com'
    },
    {
        id: 3,
        projectTitle: 'Example',
        gitHubURL: 'https://github.com/anrichter2',
        deployedURL: 'https://www.google.com'
    },
    {
        id: 4,
        projectTitle: 'Example',
        gitHubURL: 'https://github.com/anrichter2',
        deployedURL: 'https://www.google.com'
    },
    {
        id: 5,
        projectTitle: 'Example',
        gitHubURL: 'https://github.com/anrichter2',
        deployedURL: 'https://www.google.com'
    },
    {
        id: 6,
        projectTitle: 'Example',
        gitHubURL: 'https://github.com/anrichter2',
        deployedURL: 'https://www.google.com'
    }];

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