//this project.js file includes projects I have completed.

//import layout from components.
import Layout from "../components/Layout";
//import link from next folder.
import Link from 'next/link';

import Head from 'next/head';

//display layout and my projects with links to it and styling of this page.
const Project = () => (
    <div>
    
    <Head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-5H189Y8QK5"></script>
    <script>
          window.dataLayer = window.dataLayer || []; 
          function gtag(){dataLayer.push(arguments)}
          gtag('js',new Date());

          gtag('config', 'G-5H189Y8QK5');
    </script>
    </Head>

        <Layout />
        <h1>My Projects:</h1>
        <div className="row">
            <div className="two columns main-col">
                <h4> An iTunes Search Api Created Using React.js and Express</h4>
                <Link href="https://itunessearchwithapi.herokuapp.com/">
                    <a> View Demo </a>
                </Link>
            <hr/>
            <div className="two columns main-col">
                <h4> A Memory Card Game Created Using React.js</h4>
                <Link href=" https://ancient-sands-62481.herokuapp.com">
                    <a> View Demo </a>
                </Link>        
            </div>
            </div>
        </div>
        <hr/>
        <h6>View more of my projects at: 
            <br/>
            <Link href="https://github.com/AshleighWilliams?tab=repositories"> 
            <a> GitHub </a>
             </Link>
        </h6>

        <style jsx> {`
        h1 {
            font-family: 'DM Serif Display', serif;
            font-size: 4rem;
            text-align: center;
            padding: 4rem 0 2rem 0;
        }
        h4 {
            font-family: 'DM Serif Display', serif;
            font-size: 1.6rem;
            text-align: center;
            caption-side: top;
            color: black;
        }
        div {
            margin: 0 auto;
        }
        h6 {
            font-family: 'DM Serif Display', serif;
            font-size: 1.5rem;
            text-align: center;
            margin-bottom: 2rem;
            color: black;
        }
        a {
            text-decoration: none;
            color: gray;
        }
        a :hover {
            text-decoration: none;
        }
        `}
        </style>

    </div>
)

//export this code to make it available outside of this module.
export default Project;
