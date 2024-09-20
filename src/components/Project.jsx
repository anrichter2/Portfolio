import './Project.css'
import gitHubIcon from '../assets/images/github-mark.svg'

export default function Project({project}) {

    return (
        <div className='col-md-6 my-2 py-2'>
            <div className="image-container">
                <img className='project-image' src={project.imageURL} alt="exampleImage" />
                <div className='url-div container'>
                    <div className='row align-items-center'>
                        <a className='url-links col-6 my-2' href={project.gitHubURL}>
                            <p className="image-text my-2">{project.projectTitle}</p>
                        </a>
                        <a className='url-links col-6 my-2' href={project.deployedURL}>
                            <img className="url-link" src={gitHubIcon} alt='github image'/>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};