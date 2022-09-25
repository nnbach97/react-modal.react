import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Modal from "./components/Modal";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <Button onClick={() => setShow(true)}>Open Modal</Button>

      <Modal show={show} setShow={setShow}></Modal>
    </div>
  );
}

export default App;
