const emailInput = document.querySelector(`input[type="email"]`);

const errorMsg = document.querySelector(".error");

let savedEmail = "";

emailInput.addEventListener("input", removeStyle);

document.forms[0].onsubmit = checkValue;

function checkValue(e) {
  emailInput.value = emailInput.value.trim();
  let regex = new RegExp(
    /^([a-z]|[A-Z]){1,}\w+@([a-z]|[A-Z]){1,}.(com)$/,
    "ig"
  );
  if (!regex.test(emailInput.value)) {
    e.preventDefault();
    addStyle();
    setTimeout(removeStyle, 2000);
  } else {
    savedEmail = emailInput.value;
  }
}

function addStyle() {
  errorMsg.style.display = "block";
  emailInput.style.cssText = `
    background-color:var(--tomato-light) !important; 
    border-color:var(--tomato)`;
}

function removeStyle() {
  errorMsg.style.display = "none";
  emailInput.style.cssText = `
          background-color:#fff; 
          border-color:none`;
}

ScrollReveal().reveal("#content", {
  duration: 1000,
  opacity: 0.4,
  distance: `800px`,
  origin: "left",
});

ScrollReveal().reveal("#image", {
  delay: 200,
  duration: 1000,
  opacity: 0.4,
  distance: `800px`,
  origin: "right",
});
