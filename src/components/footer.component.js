import React, { Component } from "react";

// Automatically update copright year
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.querySelector(".copyright-year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
});

function Footer() {
  return (
    <div>
      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
        <p class="copyright">
          Copyright ©<span class="copyright-year"></span>.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
