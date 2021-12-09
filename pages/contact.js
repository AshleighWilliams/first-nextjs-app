//this contact.js includes my contact details.

//import layout from components.
import Layout from "../components/Layout";

import Head from 'next/head';

//display layout and contact details with styling.
const Contact = () => (
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

    <h1> Contact Me: </h1>
    <div className="row">
        <div className="two columns main-col">
            <h4> ashleighjadewilliams5@gmail.com </h4>
        <div className="two columns main-col">
            <h4> 084 622 1956 </h4>
        </div>
        </div>
    </div>

    <style jsx>{`
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
     }
     div {
        margin: 0 auto;
    }
    `}</style>

  </div>
)

//export this code to make it available outside of this module.
export default Contact;
