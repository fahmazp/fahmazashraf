import { TextSplit } from "@/components/ui/text-split";

const TextSplitFalloff = () => {
  return (
    <TextSplit
      className="text-4xl font-bold text-center"
      topClassName="text-indigo-700 dark:text-indigo-500"
      bottomClassName="text-zinc-900 dark:text-blue-200"
    >
      LET ME INTRODUCE MYSELF</TextSplit>
  );
};

export default TextSplitFalloff;
