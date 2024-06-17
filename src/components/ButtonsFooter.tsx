import { ButtonIcon } from "./";
import soundIcon from "../assets/sound_max_fill.svg";
import clipIcon from "../assets/Copy.svg";

export const ButtonsFooter = () => {
  const handleAudio = () => {
    console.log("Audio");
  };

  const handleCopyClipboard = () => {
    console.log("CopyClipboard");
  };

  return (
    <div className="flex gap-2 items-center">
      <ButtonIcon img={soundIcon} alt="Sound icon" onClick={handleAudio} />
      <ButtonIcon
        img={clipIcon}
        alt="Clip icon"
        onClick={handleCopyClipboard}
      />
    </div>
  );
};
