const input = document.getElementById("ctaInput");
const button = document.getElementById("updateBtn");
const ctaText = document.getElementById("ctaText");

button.addEventListener("click", function () {
    ctaText.textContent = input.value;
});
