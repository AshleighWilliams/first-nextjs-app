//this about.js file is the about me page.

//import layout from components.
import Layout from "../components/Layout";

//display layout, with two coloumns of a portfoliopic and a about me paragraph (who I am, education, work history, passions) with styling.
const About = () => (
    <div>
        <Layout />
        <div className="row">
            
        <div className="two columns main-col">
            <br/>
            <div className='one'>
                <h1>About Me and My Skills:</h1>
            </div>
            <ul>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>jQuery</li>
                <li>JWT Authentication</li>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Next.js</li>
                <li>UI Wireframes</li>
                <li>Git and GitHub</li>
            </ul>
           <article> I am a forward-thinking individual living in the beautiful city of Cape Town, South Africa. I attended Norman Henshilwood 
            High School and matriculated in 2016 where I achieved a National Senior Certificate (Bachelor's Pass). Following that, I attended 
            the University of the Western Cape where I graduated in 2019 with a Bachelor's of Commerce Degree (Cum Laude) and was chosen as a 
            member of the Golden Key International Honor Society. However, I then branched in to the clothing industry where I completed a six 
            month internship in 2020 as a Garment Technologist. Briefly after this, the Covid-19 pandemic hit. This is when I started thinking 
            about my future in these unprecedented times and how I can advance with the times while still fulfilling my passion of creating. The 
            key word here was technology. I grew curious about web development, software engineering and UI/UX design. This is when I started my 
            six month Full Stack Web Development bootcamp course at HyperionDev Software Institute. I am currently in my last month of completing 
            this course and I am proud to say that I am able to  code and create websites, applications and games, something with which I never 
            thought I would be able to do and enjoy as much as I do. I am excited and eager about future opportunities to build on my career. </article>
        </div>
        </div>

        <style jsx>{`
        article {
            margin-right: 510px;
            margin-left: 20px;
            margin-top: 2rem;
            font-family: 'DM Serif Display', serif;
            font-size: 1.2rem;
        }
        ul {
            padding: 1.5rem;
            float: right;
            font-family: 'DM Serif Display', serif;
            font-size: 1.2rem;
            margin-right:100px
        }
        div {
            margin: 0 auto;
        }
        h1 {
            font-family: 'DM Serif Display', serif;
            text-align: center;
            padding: 3rem 0 2rem 0;
            color: white;
        }
        .one {
            background-color: black;
        }
        `}
        </style>
    </div>
)

//export this code to make it available outside of this module.
export default About;
