import { TextSplit } from "@/components/ui/text-split";

const TextSplitSkills = () => {
  return (
    <TextSplit
      className="text-center "
      topClassName="text-sky-700 dark:text-sky-400"
      bottomClassName="text-green-600 dark:text-green-500"
      falloff={0.1}
    >
      Professional Skillset
    </TextSplit>
  );
};

export default TextSplitSkills;
