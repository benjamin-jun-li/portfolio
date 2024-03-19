import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { memo } from "react";
const sentences = [
  "I am a full stack software engineer, based in Australia. I am passionate about making software that forged solutions at the intersection of design and development",

];

const Subtitle = memo(() => {
  return (
    <div className="flex flex-col w-[90%] xl:w-[70%] justify-center mb-10">
      <TextGenerateEffect className="w-fit" sentences={sentences} />
      <p className="justify-start mt-4 font-semibold text-lg tracking-wide text-neutral-100">
        I am currently working as a frontend programming course tutor @UNSW, based in Melbourne. And I am actively seeking for a full-time role!🦉
      </p>
    </div>
  );
});

Subtitle.displayName = "Subtitle";

export default Subtitle;
