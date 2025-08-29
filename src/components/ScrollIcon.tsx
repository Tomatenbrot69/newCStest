import { ArrowDown } from "lucide-react";
import { constant } from "../../i18n/constants";

export const ScrollIcon = () => {
  return (
    <div className="flex flex-col bottom-0 items-center">
      <ArrowDown className="text-[var(--color-brand-white)]" />
      <p className="text-2xl text-[var(--color-brand-white)]">
        {constant.components.scrollComp}
      </p>
    </div>
  );
};
