$('.accordion-s').click(function () {
  this.classList.toggle("active-s");
  const panel = this.nextElementSibling;
  panel.style.maxHeight = panel.style.maxHeight ? null : `${panel.scrollHeight}px`;
});