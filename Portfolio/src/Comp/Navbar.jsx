import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/logo3.png";

const Navbar = () => {
  return (
    <nav className=" mb-15 flex itmes-center justify-between py-3" >
        <div className="flex flex-shrink-0 items-center" >
            <img className="mx-2" height={153} width={153} src={logo} alt="logo"  />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
            <a href="https://www.linkedin.com/in/abhishek-nigam272004/" target="_blank" ><FaLinkedin/></a>
            <FaGithub/>
            <FaSquareXTwitter/>
            <FaInstagram/>
        </div>
    </nav>
  )
}

export default Navbar