import linkedInIcon from '../assets/images/icons8-linkedin.svg'
import gitHubIcon from '../assets/images/github-mark.svg'
import mediumIcon from '../assets/images/icons8-medium.svg'

export default function Footer() {
    return (
        <footer>
            <div className="d-flex justify-content-center align-items-center my-3">
            <a href="https://www.linkedin.com/in/aaron-richter-b22b2383">
                <img src={linkedInIcon} alt="linkedIn Icon"/>
            </a>
            <a href="https://github.com/anrichter2">
                <img src={gitHubIcon} alt="GitHub Icon"/>
            </a>
            <a href="https://medium.com/@anrichter2">
                <img src={mediumIcon} alt="Medium Icon"/>
            </a>
            </div>
        </footer>
    )
};