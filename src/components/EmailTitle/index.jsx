import React from "react";
import style from "./style.module.css";

export default function EmailTitle() {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}th ${currentDate.toLocaleString("en-US",{ month: "long" })}
   ${currentDate.getFullYear()}, ${currentDate.getHours()}:${currentDate.getMinutes()}`;
  return (
    <div className={style.container}>
      <div className={style.line}></div>
      <p className={style.date}>Today, {formattedDate}</p>
      <h3 className={style.title}>Meeting with new investors</h3>
    </div>
  );
}