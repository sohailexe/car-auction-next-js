export const HeaderSecondry = ({ img, heading, description }) => {
  return (
    <section id="hero" className="relative min-h-[60vh]">
      <div className="absolute inset-0">
        <img
          src={img}
          alt="About Us Background"
          className="object-cover w-full h-full blur-[0.5px]"
        />
        <div className="absolute inset-0 bg-black opacity-65 "></div>
      </div>
      <div className="absolute inset-5 sm:inset-17 md:inset-36 text-white text-center flex flex-col gap-4 md:gap-8 justify-center items-center">
        <h1 className="banner">{heading}</h1>
        <p className="uppercase">{description}</p>
      </div>
    </section>
  );
};
