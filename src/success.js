document.querySelector(`#email-name`).textContent =
  location.href.slice(
    location.href.indexOf("=") + 1,
    location.href.indexOf("%")
  ) +
  "@" +
  location.href.slice(location.href.indexOf("40") + 2);

ScrollReveal().reveal(".card-body", {
  duration: 500,
  opacity: 0.4,
  distance: `800px`,
  origin: "top",
});
