import React from "react";
import faqData from "../fixtures/faqs.json";
import { Accordion, optform } from "../components";

export default function FaqContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <Accordion.Item />
      <optform>
        <optform.Input placeholder="Email address" />
        <optform.Button>Try it now</optform.Button>
        <optform.Text>
          Ready to watch ? Enter your email to enjoy membership
        </optform.Text>
      </optform>
    </Accordion>
  );
}
