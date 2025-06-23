import { createContext, useContext, useState } from "react";

const ToggleContext = createContext({
  toggleLanguage: () => {}
})

export const ToggleProvider = ({ children }) => {
  const languages = ['JavaScript', 'Python'];
  const [language, setLanguage] = useState(languages[0]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === languages[0] ? languages[1] : languages[0]) 
  }

  return (
    <ToggleContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </ToggleContext.Provider>
  );
}

export function useToggleContext() {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error('ToggleContext must be used inside a ToggleContext');
  }
  return context;
}