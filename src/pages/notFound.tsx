import { constant } from "../../i18n/constants";

export const NotFound = () => {
  return (
    <div>
      <div className="flex flex-col mt-28 h-screen">
        <p className="text-5xl text-center  text-[var(--color-brand-white)]">
          {constant.notFoundPage.text.header}
        </p>
        <p className="text-2xl mt-2 text-center text-[var(--color-brand-light-grey)]">
          {constant.notFoundPage.text.description}
        </p>
        <button>{constant.notFoundPage.buttonText}</button>
      </div>
    </div>
  );
};
