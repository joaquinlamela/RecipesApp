import React from "react";

import Title from "../Title";
import Input from "../Input";

import SaladImage from "../../Images/SaladImage.png";
import PokeImage from "../../Images/PokeSalad.jpeg";

import Container from "./styles/Container";
import Description from "./styles/Description";
import FormContainer from "./styles/FormContainer";
import Button from "../Button";
import ImageContainer from "./styles/ImageContainer";

const NewsletterCard = () => {
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
        />
        <Button> Subscribe </Button>
      </FormContainer>
      <ImageContainer start src={SaladImage} />
      <ImageContainer src={PokeImage} />
    </Container>
  );
};

export default NewsletterCard;
