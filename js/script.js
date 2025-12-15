document.querySelectorAll(".product-card__favorite").forEach((btn) => {
  btn.addEventListener("click", () => {
    const icon = btn.querySelector("span");
    if (icon.textContent === "favorite_border") {
      icon.textContent = "favorite";
      icon.style.color = "#ef4444";
      btn.style.backgroundColor = "#fee2e2";
    } else {
      icon.textContent = "favorite_border";
      icon.style.color = "#9ca3af";
      btn.style.backgroundColor = "#f3f4f6";
    }
  });
});
