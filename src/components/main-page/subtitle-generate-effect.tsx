import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FaDiceFive } from "react-icons/fa";
const sentences = [];

const words = "I am a software engineer, based in Australia";

const SubtitleGenerateEffect = () => {
  return (
    <div className="flex w-full justify-center">
      <TextGenerateEffect className="w-fit" words={words} />

      <FaDiceFive className="right-10 w-6 h-6 hover:animate-spin" />
    </div>
  );
};

export default SubtitleGenerateEffect;
