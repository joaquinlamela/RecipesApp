import React, { useState } from "react";

import Title from "../../Components/Title";
import InputWithLabel from "../../Components/InputWithLabel";

import Person from "../../Images/Person.png";

import { BiSend } from "react-icons/bi";

import Container from "./styles/Container";
import FormContainer from "./styles/FormContainer";
import Form from "./styles/Form";
import ImageContainer from "./styles/ImageContainer";
import InputContainer from "./styles/InputContainer";
import ContactContainer from "./styles/ContactContainer";
import TextAreaWithLabel from "../../Components/TextAreaWithLabel";
import Button from "../../Components/Button";
import NewsletterCard from "../../Components/NewsletterCard";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [message, setMessage] = useState("");

  const handleContactForm = async (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setSubject("");
    setEnquiry("");
    setMessage("");
  };

  return (
    <Container>
      <FormContainer>
        <Title>Contact us</Title>
        <Form id="contact-form" onSubmit={handleContactForm}>
          <ImageContainer>
            <img src={Person} alt="Person" />
          </ImageContainer>

          <ContactContainer>
            <InputContainer>
              <InputWithLabel
                value={name}
                label="Name"
                placeholder="Enter your name..."
                type="text"
                onChange={setName}
              />
              <InputWithLabel
                value={email}
                label="Email"
                placeholder="Enter your email address..."
                type="email"
                onChange={setEmail}
              />
            </InputContainer>
            <InputContainer>
              <InputWithLabel
                value={subject}
                label="Subject"
                placeholder="Enter subject..."
                type="text"
                onChange={setSubject}
              />

              <InputWithLabel
                value={enquiry}
                label="Enquiry type"
                placeholder="Enter enquiry type..."
                type="text"
                onChange={setEnquiry}
              />
            </InputContainer>
            <TextAreaWithLabel
              value={message}
              label="Message"
              placeholder="Enter your message..."
              onChange={setMessage}
            />
          </ContactContainer>
        </Form>
        <Button type="submit" form="contact-form">
          Submit <BiSend />
        </Button>
      </FormContainer>
      <NewsletterCard />
    </Container>
  );
};

export default Contact;
