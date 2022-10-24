import { useRef } from "react";

const Input = ({ onClick }) => {
  const inputElement = useRef(null);

  const handleClick = (value) => {
    onClick(value);
  };

  return (
    <div className="todo__input">
      <input
        ref={inputElement}
        type="text"
        //value={value}
        //onChange={handleChange}
        placeholder="insert value here.."
      />
      <button onClick={() => handleClick(inputElement.current.value)}>
        Save
      </button>
    </div>
  );
};

export default Input;
