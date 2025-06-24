import { TextSplit } from "@/components/ui/text-split";

const TextSplitGithub = () => {
  return (
    <TextSplit
      className="text-center "
      topClassName="text-blue-700 dark:text-purple-400"
      bottomClassName="text-fuchsia-700 dark:text-indigo-400"
      falloff={0.1}
    >
      Code Streaks
    </TextSplit>
  );
};

export default TextSplitGithub;
