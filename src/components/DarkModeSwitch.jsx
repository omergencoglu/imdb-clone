"use client";

import { Fragment } from "react";

import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Fragment>
      {currentTheme === "dark" ? <MdLightMode /> : <BsFillMoonFill />}
    </Fragment>
  );
}
