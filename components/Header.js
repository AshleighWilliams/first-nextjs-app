//this header.js includes the creation of a navbar.

//import link from next folder.
import Link from 'next/link';

//create to display the navbar using links.
const Header = () => {
    return (
    <div>
        <Link href="/">
            <a > HOME </a>
        </Link>
        <Link href="/about">
            <a > ABOUT </a>
        </Link>
        <Link href="/projects">
            <a > PROJECTS</a>
        </Link>
        <Link href="/contact">
            <a > CONTACT </a>
        </Link>

        <style jsx> {`
            div {
                padding: 2rem;
                background-color: white;
                width: 100%;
            }
            a {
                text-decoration: none;
                margin: 3px;
                color: black;
                font-size: 1.5rem;
                font-weight: bold;
                font-family: 'DM Serif Display', serif;
            }
            a :hover {
                text-decoration: none;
            }
            `}
        </style>
        
    </div>
    );
}

//export this code to make it available outside of this module.
export default Header;
