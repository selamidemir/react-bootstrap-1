import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="text-center bg-dark text-light mt-5 p-5 footer">
      2022 @{" "}
      <a href="https://netbilio.com" title="Netbilio Teknoloji">
        Netbilio Teknoloji
      </a>{" "}
      <a href="https://github.com/selamidemir" title="Githup Page">
        Github
      </a>
    </Container>
  );
}

export default Footer;
