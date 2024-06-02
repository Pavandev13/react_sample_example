import { useState } from "react";
import "./styles.css";

export default function InputBox() {
  const [input, setInput] = useState(0);
  const [inputCount, setInputCount] = useState([]);
  const inputHandler = (e) => {
    const count = parseInt(e.target.value) || 0;
    setInput(count);
    setInputCount(Array(count).fill(""));
  };

  const handleInputBoxChange = (index, value) => {
    const newInputs = [...inputCount];
    newInputs[index] = value;
    setInputCount(newInputs);
  };
  return (
    <div className="InputBox">
      <input type="number" value={input} onChange={inputHandler} />
      <div className="container">
        {inputCount.map((input, index) => (
          <input
            type="text"
            value={input}
            placeholder={`Input box ${index + 1}`}
            onChange={(e) => handleInputBoxChange(index, e.target.value)}
          />
        ))}
      </div>
    </div>
  );
}
