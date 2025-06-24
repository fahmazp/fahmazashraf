import { TextSplit } from "@/components/ui/text-split";

const TextSplitProj = () => {
  return (
    <TextSplit
      className="text-center "
      topClassName="text-slate-900 dark:text-white"
      bottomClassName="text-[#a8e600] dark:text-[#a8e600]"
      falloff={0.1}
    >
     My Projects
    </TextSplit>
  );
};

export default TextSplitProj;
