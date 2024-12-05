"use client";
import { useEffect, useState } from "react";
import { CheckBox } from "@/app/components/check-box/CheckBox";
import { CheckboxSwitch } from "@/app/components/checkBoxSwitch/CheckboxSwitch";
export const GiBudForm = () => {
  const [formData, setFormData] = useState({
    refNo: "",
    minBud: "",
    maxBud: "",
    fName: "",
    lName: "",
    email: "",
    phone: "",
    ssNumber: "",
    provideSsNumber: false,
    address: "",
    postalCode: "",
    carLoan: false,
    consent: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleProvideSSnumber = (checked) => {
    setFormData((prev) => ({
      ...prev,

      provideSsNumber: checked,
      ssNumber: "",
    }));
    console.log(checked);
  };
  const handleConsent = (checked) => {
    setFormData((prev) => ({
      ...prev,

      consent: checked,
    }));
  };
  const handleCarLoan = (checked) => {
    setFormData((prev) => ({
      ...prev,
      carLoan: checked,
    }));
  };

  useEffect(() => {}, [formData.provideSsNumber]);
  return (
    <>
      <div className="mx-auto w-full  bg-white ">
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-x-6">
            <div className="mb-5">
              <label
                htmlFor="refNo"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Referansenummer
              </label>
              <input
                type="number"
                name="refNo"
                id="refNo"
                placeholder=""
                value={formData.refNo}
                onChange={handleInputChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
              />
            </div>
            <fieldset className=" mb-5 ">
              <legend className="mb-3 block text-base font-medium text-[#07074D] ">
                Fornavn og Etternavn
              </legend>
              <div className="flex gap-6">
                <div>
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="Fornavn"
                    value={formData.fName}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="Etternavn"
                    value={formData.lName}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                  />
                </div>
              </div>
            </fieldset>
            <div className="mb-5">
              <label
                htmlFor="minBud"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Minstebud
              </label>
              <input
                type="number"
                name="minBud"
                id="minBud"
                placeholder=""
                value={formData.minBud}
                onChange={handleInputChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="maxBud"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Maksbud
              </label>
              <input
                type="number"
                name="maxBud"
                id="maxBud"
                placeholder=""
                value={formData.maxBud}
                onChange={handleInputChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                E-post
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Telefonnummer
              </label>
              <input
                type="phone"
                name="phone"
                id="phone"
                placeholder=""
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="address"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Adresse
              </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder=""
                value={formData.address}
                onChange={handleInputChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="postalCode"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Postnummer og Sted
              </label>
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                placeholder=""
                value={formData.postalCode}
                onChange={handleInputChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
              />
            </div>
            <div className=" flex mb-5 items-center gap-3 mt-3">
              <CheckBox
                name="provideSsNumber"
                isChecked={formData.provideSsNumber}
                onChange={handleProvideSSnumber}
              />
              <p className="text-sm text-gray-500">
                Ønsker ikke oppgi personnummer før jeg vinner budrunden
              </p>
            </div>
            <div className={`${formData.provideSsNumber ? "hidden" : ""} mb-5`}>
              <label
                htmlFor="ssNumber"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Personnummer
              </label>
              <input
                type="number"
                name="ssNumber"
                id="ssNumber"
                placeholder=""
                value={formData.ssNumber}
                onChange={handleInputChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
              />
            </div>
            <div className="mb-5 flex gap-2 items-center mt-3">
              <span>
                <CheckboxSwitch
                  onChange={handleCarLoan}
                  name="carLoan"
                  isChecked={formData.carLoan}
                />
              </span>
              <span className="text-sm text-gray-500 font-bold">
                Ønsker du billån?
              </span>
            </div>
          </div>

          <div className=" flex gap-3 my-3">
            <CheckBox
              name="concent"
              isChecked={formData.consent}
              onChange={handleConsent}
            />
            <p className="text-sm text-gray-500">
              Jeg bekrefter herved at jeg har lest og godkjent auksjonsreglene
              og er innforstått med at mitt bud er bindende.
            </p>
          </div>
          <div>
            <button className="hover:shadow-form w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none hover:bg-white border border-primary hover:border-black hover:shadow-xl  hover:text-black  transition ease-linear">
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
