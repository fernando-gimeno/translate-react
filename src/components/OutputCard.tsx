import { ButtonsFooter, HeaderCard } from ".";
import sortAlfa from "../assets/Sort_alfa.svg";

interface Props {
  langActive: string;
  setLangActive: (lang: string) => void;
  targetLang: string;
  setTargetLang: (lang: string) => void;
  className?: string;
  translatedText: string;
  isLoading?: boolean;
}

export const OutputCard = ({
  langActive,
  setLangActive,
  targetLang,
  setTargetLang,
  className,
  translatedText,
  isLoading
}: Props) => {
  return (
    <div className={`${ className } rounded-xl h-80 p-7 flex flex-col gap-5 border border-graySecondary`}>
      <HeaderCard
        langActive={langActive}
        setLangActive={setLangActive}
        targetLang={targetLang}
        setTargetLang={setTargetLang}
        isResultTranslate
      />
      <form className="h-full flex flex-col gap-3">
        <div className="relative h-full">
          <textarea
            className="w-full bg-transparent border-none focus:outline-none resize-none text-white font-bold h-full"
            disabled
            value={isLoading ? "Loading..." : translatedText}
          ></textarea>
        </div>
        <div className="flex justify-between items-center mt-3">
          <ButtonsFooter textToTranslate={translatedText} />
          
        </div>
      </form>
    </div>
  );
};
