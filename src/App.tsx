import { useEffect, useState } from "react";
import logo from "./assets/logo.svg";
import { InputCard, OutputCard } from "./components";
import { translate } from "./services/action";

export const App = () => {
  const [langActive, setLangActive] = useState("en");
  const [targetLang, setTargetLang] = useState("fr");
  const [textToTranslate, setTextToTranslate] = useState("Hello, how are you?");
  const [translatedText, setTranslatedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const { responseData } = await translate(
      textToTranslate,
      `${langActive}|${targetLang}`
    );

    setIsLoading(false);
    setTranslatedText(responseData.translatedText);
  };

  const onTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length > 500) return;
    setTextToTranslate(event.target.value);
  };

  useEffect(() => {
    const fetchData = setTimeout(async () => {
      const data = await translate(
        textToTranslate,
        `${langActive}|${targetLang}`
      );
      setTranslatedText(data.responseData.translatedText);
    }, 2000);
  }, [textToTranslate, langActive, targetLang]);

  return (
    <div className="h-screen text-white p-16 flex flex-col justify-center max-sm:p-7">
      <div className="container">
        <div className="grid place-items-center">
          <img className="w-52 h-auto" src={logo} alt="Logo" />
        </div>

        {/* Cards de traducción */}
        <div className="grid grid-cols-2 gap-4">
          <InputCard
            langActive={langActive}
            setLangActive={setLangActive}
            targetLang={targetLang}
            setTargetLang={setTargetLang}
            className="bg-grayTransparentPrimary"
            textToTranslate={textToTranslate}
            onChange={onTextAreaChange}
            onSubmit={onSubmit}
            isLoading={isLoading}
          />
          <OutputCard
            langActive={langActive}
            setLangActive={setLangActive}
            targetLang={targetLang}
            setTargetLang={setTargetLang}
            className="bg-grayTransparentSecondary"
            translatedText={translatedText}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
