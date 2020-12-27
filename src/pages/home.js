import React from "react";
import FaqContainer from "../containers/faqs";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import { optform, Feature } from "../components";
import { JumbotronContainer } from "../containers/jumbotron";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature.Title>Unlimited films,TV Programmes and more.</Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel at anytime.</Feature.SubTitle>
        <optform>
          <optform.Input placeholder="Email address" />
          <optform.Button>Try it now</optform.Button>
          <optform.Text>
            Ready to watch ? Enter your email to enjoy membership
          </optform.Text>
        </optform>
      </HeaderContainer>
      <JumbotronContainer />;
      <FooterContainer />;
      <FaqContainer />
    </>
  );
}
