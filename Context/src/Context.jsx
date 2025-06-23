import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const ImageSizeContext = createContext()

export const ImageSizeProvider = ({ children }) => {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <ImageSizeContext.Provider value={{ imageSize, isLarge, setIsLarge }}>
      {children}
    </ImageSizeContext.Provider>
  );
}

export function useImageSizeContext() {
  const context = useContext(ImageSizeContext);
  if (!context) {
    throw new Error('ImageSizeContext must be used inside a ImageSizeProvider');
  }
  return context;
}