import { HeaderSecondry } from "../../components/HeaderSecondry";
import { SelgeBilFom } from "../../components/forms/SelgeBilFom";
import { GiBudForm } from "../../components/forms/GiBudForm";
import Steps from "@/app/components/Steps";

export default function () {
  return (
    <>
      <HeaderSecondry
        img="images/aboutus.jpg"
        heading="Neque porro "
        description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      />

      <Steps />
      <hr />
      <section className=" body-font bg-white">
        <div
          className="div-cont flex flex-col  w-full px-5 py-0 md:py-6 mx-auto section pb-6"
          id="contact-form"
        >
          <div className=" w-full h-ful flex items-center justify-center">
            <img
              className=" max-h-[250px]  md:max-h-[300px]"
              src="images/car-bid.jpg"
              alt="car-bid"
            />
          </div>
          <div className="w-full mt-6 md:mt-0 md:pl-8">
            <div className="flex items-center justify-center p-12">
              <GiBudForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
