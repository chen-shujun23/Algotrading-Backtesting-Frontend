import React from "react";
import PageHeader from "../components/PageHeader";
import illustration from "../assets/illustrationCreate.png";

const Create = () => {
  return (
    <div>
      <PageHeader
        header="Create Strategy"
        copy="Create your own strategy by selecting one of the strategy forms and filling in the details of your winning strategy."
        imgSrc={illustration}
        imgAlt="Graphic illustration of a woman with a laptop."
      />
    </div>
  );
};

export default Create;
