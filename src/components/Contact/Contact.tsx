import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Get in touch</h2>
        <p>
          Have a project in mind? Let's discuss how I can help you build it.
        </p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:laserna.seba@gmail.com">laserna.seba@gmail.com</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  );
}
