import sortAlfa from "../assets/Sort_alfa.svg";
import { ButtonsFooter, HeaderCard } from "./";

interface Props {
  langActive: string;
  setLangActive: (lang: string) => void;
  targetLang: string;
  setTargetLang: (lang: string) => void;
  className?: string;
  textToTranslate: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading?: boolean;
}

export const InputCard = ({
  langActive,
  setLangActive,
  targetLang,
  setTargetLang,
  className,
  textToTranslate,
  onChange,
  onSubmit,
  isLoading,
}: Props) => {
  return (
    <div
      className={`${className} rounded-xl h-80 p-7 flex flex-col gap-5 border border-graySecondary`}
    >
      <HeaderCard
        langActive={langActive}
        setLangActive={setLangActive}
        targetLang={targetLang}
        setTargetLang={setTargetLang}
      />
      <form className="h-full flex flex-col gap-3" onSubmit={onSubmit}>
        <div className="relative h-full">
          <textarea
            className="w-full bg-transparent border-none focus:outline-none resize-none text-white font-bold h-full "
            placeholder="Translate here"
            value={textToTranslate}
            onChange={onChange}
          ></textarea>
          <span className="font-medium text-lightSecondary text-xs absolute right-0 -bottom-5">
            {textToTranslate.length}/500
          </span>
        </div>
        <div className="flex justify-between items-center mt-3">
          <ButtonsFooter />
          <button
            className={`bg-bluePrimary border-blueSecondary border flex px-5 py-2 rounded-lg items-center gap-2 text-sm font-bold disabled:bg-graySecondary disabled:border-graySecondary disabled:cursor-not-allowed transition-all duration-300 ease-in-out`}
            type="submit"
            disabled={textToTranslate.length === 0 || isLoading}
          >
            <img src={sortAlfa} alt="svg Translate" />
            Translate
          </button>
        </div>
      </form>
    </div>
  );
};
