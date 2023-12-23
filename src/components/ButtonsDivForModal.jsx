import React from "react";
import Button from "./Button";

export default function ButtonsDivForModal({
  btn1ClassName,
  btn2ClassName,
  onClickFunc1,
  onClickFunc2,
  title1,
  title2,
}) {
  return (
    <div>
      <Button
        type="button"
        className={btn1ClassName}
        onClick={onClickFunc1}
        title={title1}
      />
      <Button
        type="button"
        className={btn2ClassName}
        onClick={onClickFunc2}
        title={title2}
      />
    </div>
  );
}
