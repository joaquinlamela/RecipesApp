import React from "react";

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
  return (
    <Container>
      <FormContainer>
        <Title>Contact us</Title>
        <Form>
          <ImageContainer>
            <img src={Person} alt="Person" />
          </ImageContainer>

          <ContactContainer>
            <InputContainer>
              <InputWithLabel
                label="Name"
                placeholder="Enter your name..."
                type="text"
              />
              <InputWithLabel
                label="Email"
                placeholder="Enter your email address..."
                type="email"
              />
            </InputContainer>
            <InputContainer>
              <InputWithLabel
                label="Subject"
                placeholder="Enter subject..."
                type="text"
              />

              <InputWithLabel
                label="Enquiry type"
                placeholder="Enter enquiry type..."
                type="text"
              />
            </InputContainer>
            <TextAreaWithLabel
              label="Message"
              placeholder="Enter your message..."
            />
          </ContactContainer>
        </Form>
        <Button>
          Submit <BiSend />
        </Button>
      </FormContainer>
      <NewsletterCard />
    </Container>
  );
};

export default Contact;
