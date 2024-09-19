import './About.css'

export default function About() {
    return (
        <div>
            <h2>
                About Me
            </h2>
            <img className="about-photo" src={"src/assets/images/my-photo-image.jpg"} alt="My Photo"/>
            <p>
                Hello and welcome to my virtual portfolio. My name is Aaron Richter and I am an aspiring software developer. Over the last
                few months I have been taking part in a part-time software developer bootcamp put on by the University of Minnesota. I have
                been trained in both the front-end as well as the back-end of software development. For the front-end I have a basic knowledge 
                of HTML, CSS, and JavaScript and have also learned about responsive design and css frameworks like bootstrap. For the back-end
                I have been taught about SQL and how to use database options like PostGres and MongoDB.
            </p>
            <p>
                If you would like to see examples of my work you can go to my portfolio page where I have several examples of projects I've worked
                on either by myself or in a group. If you would like to contact me you can go to the contact page and fill out a contact form.
                If you would like to see my resume you can go to the resume page where you will see a list of my proficiencies and find a downloadable
                copy of my resume. Lastly I have clickable links to my linkedIn profile, GitHub profile, and medium profile in the footer.
            </p>
        </div>
    );
};