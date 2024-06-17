import { languages } from "../helpers/languages";

interface Props {
  langActive: string;
  setLangActive: (lang: string) => void;
  targetLang: string;
  setTargetLang: (lang: string) => void;
  isResultTranslate?: boolean;
}

export const HeaderCard = ({
  langActive,
  setLangActive,
  targetLang,
  setTargetLang,
  isResultTranslate = false,
}: Props) => {
  const handleDetectLanguage = () => {
    console.log("Detect Language");
  };

  const handleTradeLang = () => {
    setLangActive(targetLang);
    setTargetLang(langActive);
  };

  return (
    <div className="flex items-center gap-6 border-b pb-4 border-lightSecondary">
      {isResultTranslate ? (
        // Output Card
        <>
          {languages.slice(0, 3).map((language) => (
            <button
              className={`text-sm py-2 px-4 rounded-xl ${
                language.code === targetLang ? "bg-graySecondary" : ""
              }`}
              key={language.code}
              onClick={() => setTargetLang(language.code)}
            >
              {language.name}
            </button>
          ))}
        </>
      ) : (
        // Input Card
        <>
          <button className="" onClick={handleDetectLanguage}>
            Detect Language
          </button>
          {languages.slice(0, 3).map((language) => (
            <button
              className={`text-sm py-2 px-4 rounded-xl ${
                language.code === langActive ? "bg-graySecondary" : ""
              }`}
              key={language.code}
              onClick={() =>
                language.code === targetLang
                  ? handleTradeLang()
                  : setLangActive(language.code)
              }
            >
              {language.name}
            </button>
          ))}
        </>
      )}
    </div>
  );
};
