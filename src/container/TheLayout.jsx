import React, { useEffect } from "react";
import TheHeader from "./TheHeader";
import Carousel from "../View/Carousel";
import TheFooter from "./TheFooter";
import $ from "jquery";
import TheContent from "./TheContent";

const TheLayout = () => {
  useEffect(() => {
    $(document).ready(function ($) {
      $(".bar-menu").click(function (event) {
        $(this).next(".list-child").slideToggle(300);
      });
    });
  }, []);
  return (
    <div id="wallpaper">
      <TheHeader />
      {/* <Carousel /> */}
      <TheContent />
      <TheFooter />
    </div>
  );
};

export default TheLayout;
