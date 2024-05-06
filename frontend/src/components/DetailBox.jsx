const DetailBox = () => {
  return (
    <section className=" font-Raleway mb-10 py-10 w-[100%] flex flex-col md:flex-row md:justify-center md:h-[70vh] md:w-full bg-white relative">
      <div className=" w-[100%] text-[#5228f5] h-[100%] px-10 py-5 gap-6 flex flex-col items-center sm:items-start justify-center md:gap-10 xl:ml-20 md:px-10 md:w-[70%]">
        <h1 className="text-center md:text-left md:tracking-[.90rem] sm:tracking-[.75rem] tracking-[.5rem] text-md md:text-xl lg:text-2xl font-bold mt-4">
          DETAILS
        </h1>
        <h1 className=" font-Poppins text-center md:text-left text-black lg:text-[2.25rem] md:text-[1.8rem] text-[1.3rem] font-extrabold">
          User-Friendly Translation Website
        </h1>
        <p className="text-center md:text-left text-black text-xs sm:text-sm md:text-base lg:text-lg">
          Introducing a seamless and immersive user interface for translating
          your text files.
        </p>
        <p className="text-center md:text-left text-black text-xs sm:text-sm md:text-base lg:text-lg">
          Our Text Translator is your go-to solution for accurate and efficient
          text translation. We provide unparalleled language conversion services
          for all your needs.
        </p>
      </div>
      <div className="overflow-hidden py-5 w-full xl:mr-20 md:p-10 md:w-[40%] flex items-center justify-center">
        <img
          src="https://source.unsplash.com/random"
          alt="User"
          className=" overflow-x-hidden w-[20rem] h-[20rem] md:w-[13rem] md:h-[13rem] lg:w-[16rem] lg:h-[16rem] xl:w-[20rem] xl:h-[20rem] rounded-full"
        />
      </div>
    </section>
  );
};

export default DetailBox;

 