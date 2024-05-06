const Footer = () => {
  return (
    <footer className="relative">
      <div className="waves bg-red-500">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <h1 className=" text-indigo-950 hover:scale-105 hover:text-white hover:transition font-medium hover:font-normal">
        अनुवाद
      </h1>
      <ul className="social_icon ">
        <li>
          <a href="https://www.facebook.com/" target="blank">
            <i className="fab fa-facebook text-slate-200"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target="blank">
            <i className="fab fa-twitter text-slate-200"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/home" target="blank">
            <i className="fab fa-linkedin text-slate-200"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="blank">
            <i className="fab fa-instagram text-slate-200"></i>
          </a>
        </li>
      </ul>
      <ul className="menu font-Raleway text-sm flex flex-col sm:flex-row gap-2 sm:gap-5">
        <a
          className="text-indigo-950 hover:text-white hover:scale-105 hover:font-bold"
          href="#"
        >
          Home
        </a>
        <a
          className="text-indigo-950 hover:text-white hover:scale-105 hover:font-bold"
          href="#"
        >
          About
        </a>
        <a
          className="text-indigo-950 hover:text-white hover:scale-105 hover:font-bold"
          href="#"
        >
          Services
        </a>
        <a
          className="text-indigo-950 hover:text-white hover:scale-105 hover:font-bold"
          href="#"
        >
          Contact
        </a>
      </ul>
      <p className="text-indigo-950 font-Poppins">
        ⓒ 2023 Anuvaad | All Rights Reserved
      </p>
    </footer>
  );
}
export default Footer