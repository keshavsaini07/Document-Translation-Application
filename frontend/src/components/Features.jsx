const Features = () => {
  return (
    <section className="relative text-black flex flex-col items-center justify-center bg-slate-200 px-6 py-15 m">
      <div className="mt-5 w-[100%] text-[#5228f5] h-[100%] px-10 py-5 gap-3 flex flex-col items-center sm:items-center justify-center md:gap-4 xl:ml-20 md:px-10 md:w-[70%]">
        <h1 className=" text-center text-[#5228f5] md:text-left md:tracking-[.35rem] sm:tracking-[.25rem] tracking-[.15rem] text-md sm:text-base md:text-xl lg:text-2xl font-bold">
          FEATURES
        </h1>
        <h1 className=" font-Poppins text-center md:text-left text-black lg:text-[2.25rem] md:text-[1.8rem] text-[1.3rem] font-extrabold">
          Key Features
        </h1>
        <p className=" w-[110%] text-center  text-black text-xs sm:text-base md:text-[1.15rem] lg:text-lg ">
          Discover the powerful features of our website
        </p>
      </div>
      <div className=" mt-0 sm:mt-5 flex flex-col items-center justify-center w-full sm:w-auto md:grid md:grid-cols-2 gap-6 m-10 p-5 ">
        <div className=" w-[100%] md:w-[40vw] md:h-[25vh] h-[30vh] flex flex-col items-start justify-center gap-3 rounded-lg p-5 sm:p-10 bg-white">
          <h1 className="  text-lg text-left sm:text-2xl md:text-[1.75rem] lg:text-3xl font-bold">
            File Translation
          </h1>
          <p className=" text-left text-sm sm:text-lg text-gray-500 w-[80%]">
            Uploading options for a text file availabile
          </p>
        </div>
        <div className=" w-[100%] md:w-[40vw] md:h-[25vh] h-[30vh] flex flex-col items-start justify-center gap-3 rounded-lg p-5 sm:p-10 bg-white">
          <h1 className=" text-left text-lg sm:text-2xl md:text-[1.75rem] lg:text-3xl font-bold">
            Download Translated File
          </h1>
          <p className="text-left text-sm sm:text-lg text-gray-500 w-full sm:w-[80%]">
            After translation, the file will be available for download
          </p>
        </div>
        <div className=" w-[100%] md:w-[40vw] md:h-[25vh] h-[30vh] flex flex-col items-start justify-center gap-3 rounded-lg p-5 sm:p-10 bg-white">
          <h1 className="text-left text-lg sm:text-2xl md:text-[1.75rem] lg:text-3xl font-bold">
            User-Friendly Interface
          </h1>
          <p className="text-left text-sm sm:text-lg text-gray-500 w-full sm:w-[80%]">
            Designed to be immersive and simple to use for a seamless experience
          </p>
        </div>
        <div className=" w-[100%] md:w-[40vw] md:h-[25vh] h-[30vh] flex flex-col items-start justify-center gap-3 rounded-lg p-5 sm:p-10 bg-white">
          <h1 className="text-left text-lg sm:text-2xl md:text-[1.75rem] lg:text-3xl font-bold ">
            Accurate Translation
          </h1>
          <p className="text-left text-sm sm:text-lg text-gray-500 w-full sm:w-[80%]">
            Experience the best translation service available across internet
          </p>
        </div>
        <div className="] w-[100%] md:w-[40vw] md:h-[25vh] h-[30vh] flex flex-col items-start justify-center gap-3 rounded-lg p-5 sm:p-10 bg-white">
          <h1 className="text-left text-lg sm:text-2xl md:text-[1.75rem] lg:text-3xl  font-bold ">
            Text Translation
          </h1>
          <p className="text-left text-sm sm:text-lg text-gray-500 w-full sm:w-[80%]">
            Built to perform normal text translation with ease and on par results
          </p>
        </div>
        <div className=" w-[100%] md:w-[40vw] md:h-[25vh] h-[30vh] flex flex-col items-start justify-center gap-3 rounded-lg p-5 sm:p-10 bg-white">
          <h1 className="text-left text-lg sm:text-2xl md:text-[1.75rem] lg:text-3xl font-bold">
            Immersive UI/UX
          </h1>
          <p className="text-left text-sm sm:text-lg text-gray-500 w-full sm:w-[80%]">
            Designed to be immersive and simple to use for a seamless experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
