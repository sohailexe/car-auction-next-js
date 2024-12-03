
const About = () => {
  return (
    // <      <!--  About us-->
    <section className="bg-background">
      <div className="div-cont">
        <div
          id="numbers"
          className="hidden md:flex w-full flex-col  gap-6 md:flex-row justify-between"
        >
          <div className="flex flex-col justify-center items-center">
            <span className="text-6xl uppercase">40K</span>
            <span className="sm-primary">Registered Members</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-6xl uppercase">40K</span>
            <span className="sm-primary">Registered Members</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-6xl uppercase">40K</span>
            <span className="sm-primary">Registered Members</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-6xl uppercase">40K</span>
            <span className="sm-primary">Registered Members</span>
          </div>
        </div>
      </div>

      <hr className="bg-gray-400 hidden md:bloc" />

      <div className="div-cont">
        <div className="px-8 py-7 flex flex-col gap-5 md:flex-row items-center">
          {/* <!-- left --> */}
          <div id="left" className="md:w-1/2 pr-6">
            <p className="sm-primary mb-6 text-xl">Auksjonen</p>
            <h1 className="h1 text-4xl mb-8">Vi har faste Auksjonsdager</h1>
            <p className="font-light mb-4">
              Onsdag kl. <span className="font-semibold">18:00-20.00</span> og
              Sondag kl. <span className="font-semibold">115:00-17.00</span>
            </p>

            <h1 className="text-xl text-primary mb-2">
              Onsker du a legge inn forhandsbud pa bill ?
            </h1>
            <p className="font-light mb-4">
              Du kan benytte vart skjema for a legge inn forhandsbud pa bill
            </p>

            <div id="btns" className="mb-8">
              <a href="" className="btn-primary mr-4 mb-3">
                Gi Bud
              </a>
            </div>

            <p className="font-light mb-4">
              Kom gjerne innom i god tid for auksjonen starter. Alle biler som
              selges med 3 maneders garanti har en tilstandsrapport liggende i
              bilen, her far du god informasjon om bilens takniske stand
            </p>
          </div>
          {/* <!-- right --> */}
          <div id="right" className="flex-1 hidden md:block">
            <img className="scale-110" src="images/thar2.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};


export default About;
