import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";

function App() {
  return (
    <div className="App">
      <h1 className="title">Contact</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
