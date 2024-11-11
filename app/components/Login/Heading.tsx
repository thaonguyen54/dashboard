import React from "react";
import { useTranslations } from "next-intl";

const Heading = () => {
  const t = useTranslations("Index");

  return (
    <div className="mb-12">
      <h1 className="text-4xl text-main">
        {t("HEADING1")},{" "}
        <span className="font-bold bg-gradient-to-br from-custom-blue via-custom-aqua to-custom-green bg-clip-text text-transparent">
          Digital Fortress
        </span>
      </h1>
      <p className="text-lg mt-6 text-secondary-grey-dark">
        {t("HEADING2")}
      </p>
    </div>
  );
};

export default Heading;
