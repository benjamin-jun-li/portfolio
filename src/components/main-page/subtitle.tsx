import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { memo } from "react";
const sentences = [
  "I am a full stack software engineer, based in Melbourne, Australia🦘. I am passionate about making software both individually and teamly ",
  "I usually try to build things that look good and also built well under the hood.",
  "I sometimes spent too much time on how to make a webpage look better.🤣",
];

const Subtitle = memo(() => {
  return (
    <div className="flex flex-col w-[90%] xl:w-[70%] justify-center mb-10">
      <TextGenerateEffect sentences={sentences} />
      <p className="justify-start mt-8 font-semibold text-lg tracking-wide text-neutral-100">
        I am currently working as a frontend programming course tutor @UNSW,
        based in Melbourne. And I am actively seeking for a full-time role!🦉
      </p>
    </div>
  );
});

Subtitle.displayName = "Subtitle";

export default Subtitle;
