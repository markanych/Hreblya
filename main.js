window.onscroll = function() {
  const btn = document.getElementById("btnUp");
  // Якщо прокрутили більше 400px — показуємо кнопку
  if (window.scrollY > 400) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
