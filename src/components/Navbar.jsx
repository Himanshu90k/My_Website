import { FaLinkedin, FaGithub,  } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
    return (
        <nav className="flex justify-between m-10">
            <div className="flex ">
                <h2 className="font-poppins font-semibold text-2xl text-white"> 
                    Himanshu Rawat 
                </h2>
            </div>
            <div className="inline-flex gap-10">
                <a className="font-semibold font-poppins text-lg text-white">Main</a>
                <a className="font-semibold font-poppins text-lg text-white">About</a>
                <a className="font-semibold font-poppins text-lg text-white">Projects</a>
                <a className="font-semibold font-poppins text-lg text-white">Contact</a>
            </div>
            <div className="flex gap-2 sm:mx-3:none">
                <a> <FaLinkedin className="fill-white size-6"/> </a>
                <a> <FaGithub className="fill-white size-6"/> </a>
                <a> <SiLeetcode className="fill-white size-6"/> </a>
            </div>
        </nav>
    )
}

export default Navbar;