import { TracingBeamDemo } from "@/components/main-page/demo";
import Subtitle from "@/components/main-page/subtitle";
import TypingTitle from "@/components/main-page/typing-title";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-12">
      <TypingTitle />
      <Subtitle />
      <TracingBeamDemo />
    </main>
  );
}
