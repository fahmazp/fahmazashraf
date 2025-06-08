import { AuroraText } from "../magicui/aurora-text";

export function AuroraTextDemo({ className = "" }) {
  return (
    <h1 className={`font-bold tracking-tighter ${className}`}>
      <AuroraText>•Fhmz•</AuroraText>
    </h1>
  );
}
