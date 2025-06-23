import { useToggleContext } from "../../context/Context";
import { Button } from "../atoms/Button";
import { Text } from "../atoms/Text";

export function MainSection() {
  const { language, toggleLanguage } = useToggleContext();

  return (
    <div>
      <Text>favorite programing language: {language}</Text>
      <Button onClick={toggleLanguage}>toggle language</Button>
    </div>
  )
}