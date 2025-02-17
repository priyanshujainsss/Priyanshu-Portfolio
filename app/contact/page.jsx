import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import { Mail, MapPinCheck, Phone } from "lucide-react";
import React from "react";

const infoData = [
  {
    tittle: "Phone",
    description: "+91 9719294193",
    icon: <Phone />,
  },
  {
    tittle: "Email",
    description: "20jainpriyanshu@gmail.com",
    icon: <Mail />,
  },
  {
    tittle: "Address",
    description: "Goverdhan, Mathura, Uttar Pradesh (India) ",
    icon: <MapPinCheck />,
  },
];
const Contact = () => {
  return (
    <Container
      className={"py-6 md:py-12 flex flex-col gap-6 md:gap-12 md:flex-row"}
    >
      <div className="w-full md:w-2/3"><ContactForm/></div>
      <div className="w-full md:w-1/3 text-white flex flex-col  gap-4 md:gap-8 justify-center  ">
        {infoData?.map((item) => (
          <div key={item?.tittle} className="flex items-center space-x-4">
            <span className="bg-lightSky/5 p-4 rounded-md">{item?.icon}</span>
            <div>
              <h3 className="text-white/55 font-semibold text-sm">{item?.tittle}</h3>
              <p>{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Contact;
