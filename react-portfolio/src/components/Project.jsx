import './Project.css'

export default function Project({project}) {

    // use .map to display all of the project info
    // will need an image from the project, url for deployed applicationa and github repository
    return (
        <div className='col-md-6 my-2 py-2'>
            <div className="image-container">
                <img className='project-image' src="https://placehold.co/600x400" alt="exampleImage" />
                <div className='url-div'>
                    {/* make it so that these a tags are in a flex row with col-6 */}
                    <a className='my-2' href={project.gitHubURL}>
                        <p className="image-text my-2">{project.projectTitle}</p>
                    </a>
                    <a className='my-2' href={project.deployedURL}>
                        <img className="url-link" src="https://placehold.co/125x75" />
                    </a>
                </div>
            </div>
        </div>
    );
};