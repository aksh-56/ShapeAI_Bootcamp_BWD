import React from "react";

function Footer() {
  var curraYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright @ {curraYear}</p>
    </footer>
  );
}

export default Footer;
