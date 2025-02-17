"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
    Message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.Name.trim() || !formData.Email.trim()) {
      toast({
        title: "Error",
        description: "Please input your name and email to continue",
        variant: "destructive",
      });
      return; // Stop execution if validation fails
    }

    setLoading(true);

    try {
      const response = await emailjs.send(
        "service_q1a564m", // Replace with your actual Service ID
        "template_wazh81o", // Replace with your actual Template ID
        {
          to_name: "Priyanshu", // Or dynamic recipient name
          from_name: formData.Name, // Sender's name
          phoneNumber: formData.Phone,
          message: formData.Message , // Message content
          address:formData.Address
        },
        "rjnB6xlAyeLKrP6xj" // Replace with your Public Key
      );

      console.log("Email sent successfully!", response.text);

      toast({
        title: "Success",
        description: "Your message has been sent successfully!",
      });

      // Reset the form
      setFormData({
        Name: "",
        Email: "",
        Phone: "",
        Address: "",
        Message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error.text);

      toast({
        title: "Error",
        description: "Something went wrong, please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4 text-white/50">
      <h3 className="text-2xl md:text-4xl text-lightSky">Let&apos;s work together</h3>
      <p>
      Have a project in mind? Whether you need a custom website, an e-commerce platform, or a full-stack application, I'm here to help bring your ideas to life. Let's build something amazing together!
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <Input type="text" name="Name" placeholder="Your name" value={formData.Name} onChange={handleChange} />
          <Input type="email" name="Email" placeholder="Email address" value={formData.Email} onChange={handleChange} />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <Input type="phone" name="Phone" placeholder="Phone number" value={formData.Phone} onChange={handleChange} />
          <Input type="text" name="Address" placeholder="Address" value={formData.Address} onChange={handleChange} />
        </div>
        <Textarea name="Message" placeholder="Text here" rows={5} value={formData.Message} onChange={handleChange} />
        <Button type="submit" className="w-full text-sm bg-lightSky/10 px-4 py-2 rounded-md border border-hoverColor/10 hover:border-hoverColor hover:bg-hoverColor/10 hover:text-lightSky hoverEffect" disabled={loading}>
          {loading ? "Submitting message ..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
