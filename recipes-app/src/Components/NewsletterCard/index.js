import React, { useState } from "react";

import Title from "../Title";
import Input from "../Input";

import SaladImage from "../../Images/SaladImage.png";
import PokeImage from "../../Images/PokeSalad.jpeg";

import Container from "./styles/Container";
import Description from "./styles/Description";
import FormContainer from "./styles/FormContainer";
import Button from "../Button";
import ImageContainer from "./styles/ImageContainer";
import { isEmpty } from "lodash";
import { Notify } from "notiflix";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";

const NewsletterCard = () => {
  const [email, setEmail] = useState("");

  const validateName = async (value) => {
    if (isEmpty(value)) {
      Notify.failure(
        "The email can't be empty to subscribe to the newsletter."
      );
    }
    setEmail(value);
  };

  const handleSuscriptionNewsletter = async () => {
    if (!isEmpty(email)) {
      try {
        await addDoc(collection(db, "newsletter"), {
          email: email,
        });
        Notify.success(
          "Your email was sent successfully to subscribe to our newsletter."
        );
        setEmail("");
      } catch {
        Notify.failure(
          "An error ocurred subscribing to newsletter, try again later."
        );
      }
    } else {
      Notify.failure("An error ocurred, check the email provided.");
    }
  };

  const onChange = (event) => {
    const { value } = event.target;
    validateName(value);
  };

  return (
    <Container>
      <Title small>Deliciousness to your inbox</Title>
      <Description>
        Give us your contact email, to notify you when new recipes have been
        added
      </Description>
      <FormContainer>
        <Input
          placeholder="Your email address..."
          type="email"
          noBorder
          transparent
          small
          value={email}
          onChange={onChange}
          onBlur={onChange}
        />
        <Button onClick={handleSuscriptionNewsletter}> Subscribe </Button>
      </FormContainer>
      <ImageContainer start src={SaladImage} />
      <ImageContainer src={PokeImage} />
    </Container>
  );
};

export default NewsletterCard;
