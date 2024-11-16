import codepin from "../assets/images3.png";

function Navbar() {
  return (
    <div className="main lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#000] py-4">
      <div className="left">
        <div className="logo font-bold text-2xl text-white text-center">
          <img className="" width={100} src={codepin} alt="" />
        </div>
      </div>
      <div className="right text-center mx-5 ">
        <span className="text-3xl text-red-500 "> Lets code bro..</span>
      </div>
    </div>
  );
}

export default Navbar;
