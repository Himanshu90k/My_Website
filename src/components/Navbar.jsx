import { FaLinkedin, FaGithub,  } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
    return (
        <nav className="flex justify-between m-5">
            <div className="flex ">
                <h2> Himanshu Rawat </h2>
            </div>
            <div className="flex gap-7">
                <a>Main</a>
                <a>About</a>
                <a>Projects</a>
                <a>Contact</a>
            </div>
            <div className="flex gap-2 sm:mx-3:none">
                <a> <FaLinkedin/> </a>
                <a> <FaGithub/> </a>
                <a> <SiLeetcode/> </a>
            </div>
        </nav>
    )
}

export default Navbar;