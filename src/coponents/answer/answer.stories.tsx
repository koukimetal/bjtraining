import React from "react";

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { AnswerFrame } from "./answer";

storiesOf("AnswerFrame", module)
  .addDecorator(withKnobs)
  .add("Answer Pair", () => {
    return (
      <AnswerFrame
        splittable={true}
        judgeCallBack={(act) => {
          action(act.toString())();
        }}
      />
    );
  })
  .add("Answer non pair", () => {
    return (
      <AnswerFrame
        splittable={false}
        judgeCallBack={(act) => {
          action(act.toString())();
        }}
      />
    );
  });
