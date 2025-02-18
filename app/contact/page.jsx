import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import { Mail, MapPinCheck, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const infoData = [
  {
    tittle: "Phone",
    description: "+91 9719294193",
    icon: <Phone />,
    href:"tel: +919719294193",
    target:""
  },
  {
    tittle: "Email",
    description: "20jainpriyanshu@gmail.com",
    icon: <Mail />,
    href:"mailto:20jainpriyanshu@gmail.com",
    target:""
  },
  {
    tittle: "Address",
    description: "Goverdhan, Mathura, Uttar Pradesh (India) ",
    icon: <MapPinCheck />,
    href:"https://www.google.com/maps/place/Govardhan,+Uttar+Pradesh/@27.4961656,77.4562525,15z/data=!3m1!4b1!4m6!3m5!1s0x39730e7d151ec199:0x9831b65b6fd8bd36!8m2!3d27.4940756!4d77.4650284!16s%2Fm%2F02p6fwl?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D",
    target:"_blank"
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
          <Link href={item?.href} target={item?.target}  key={item?.tittle}>
          <div className="flex items-center space-x-4">
            <span className="bg-lightSky/5 p-4 rounded-md">{item?.icon}</span>
            <div>
              <h3 className="text-white/55 font-semibold text-sm">{item?.tittle}</h3>
              <p>{item?.description}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Contact;
