import { useState } from "react";
import { ButtonSize, ButtonType } from "./theme";
import Button from "./components/Button";

export default function App() {
  const [selectedType, setSelectedType] = useState(ButtonType.primary);
  const [selectedSize, setSelectedSize] = useState(ButtonSize.lg);

  return (
    <div className="container mx-auto w-full max-w-xl h-screen flex flex-col items-center justify-center px-5">
      <div className="w-full max-w-2xl text-center flex flex-col gap-5 my-7">
        <div className="flex items-center gap-3">
          <p className="text-xl">Choose button type: </p>
          {["primary", "secondary", "basic", "delete"].map((type) => {
            return (
              <button
                key={type}
                onClick={() => {
                  setSelectedType(ButtonType[type]);
                }}
              >
                {type}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-3">
          <p className="text-xl">Choose button size: </p>
          {["sm", "lg"].map((size) => {
            return (
              <button
                key={size}
                onClick={() => {
                  setSelectedSize(ButtonSize[size]);
                }}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>
      <Button type={selectedType} size={selectedSize}>
        button
      </Button>
      <div className="flex flex-col gap-4 mt-8">
        <p>SelectedType: {selectedType}</p>
        <p>SelectedSize: {selectedSize}</p>
      </div>
    </div>
  );
}
