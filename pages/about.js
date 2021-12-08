//this about.js file is the about me page.

//import portfoliopic from static folder.
import Image from "/static/portfoliopic.jpg";
//import layout from components.
import Layout from "../components/Layout";

//display layout, with two coloumns of a portfoliopic and a about me paragraph (who I am, education, work history, passions) with styling.
const About = () => (
    <div>
    
    <Head async src="https://www.googletagmanager.com/gtag/js?id=G-5H189Y8QK5"></Head>
    <Head>window.dataLayer = window.dataLayer || []; 
          function gtag(){dataLayer.push(arguments);}
          gtag('js',new Date());
          gtag('config', 'G-5H189Y8QK5');
    </Head>

        <Layout />
        <div className="row">
        <div className="two columns main-col">
           <h1>About Me: </h1>
           <img src="/static/portfoliopic.jpg" alt="portfoliopic" />
           <article> I am a forward-thinking young woman living in the beautiful city of Cape Town, South Africa. I attended Norman Henshilwood 
            High School and matriculated in 2016 where I achieved a National Senior Certificate (Bachelor's Pass). Following that, I attended 
            the University of the Western Cape where I graduated in 2019 with a Bachelor's of Commerce Degree (Cum Laude) and was chosen as a 
            member of the Golden Key International Honor Society. However, I then branched in to the clothing industry where I completed a six 
            month internship in 2020 as a Garment Technologist. Briefly after this, the Covid-19 pandemic hit and I was not able to find 
            employment and felt lost. This is when I started thinking about the future and how I can advance with the times while still 
            fulfilling my passion of creating. The key word here was technology. I saw a growing demand for web developers and software 
            engineers and grew curious about this. This is when I started my six month full stack web development bootcamp course at HyperionDev 
            Software Institute. I am currently in my last month of completing this course and I am proud to say that I am able to  code and 
            create websites, applications and games, something with which I never thought I would be able to do and enjoy as much as I do. I am 
            excited and eager about future opportunities to build on my career. </article>
        </div>
        </div>

        <style jsx>{`
        h1 {
            font-family: 'DM Serif Display', serif;
            font-size: 4rem;
            text-align: center;
        }
        article {
            margin-right: 510px;
            margin-left: 20px;
            margin-top: 2rem;
            font-family: 'DM Serif Display', serif;
            font-size: 1.2rem;
        }
        img {
            padding: 1.5rem;
            float: right;
            width: 320px;
            height: 400px;
            margin-right:100px
        }
        div {
            margin: 0 auto;
        }
        `}
        </style>
    </div>
)

//export this code to make it available outside of this module.
export default About;
