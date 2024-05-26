$('.accordion-s').click(function () {
  this.classList.toggle("active-s");
  const panel = this.nextElementSibling;
  panel.style.maxHeight = panel.style.maxHeight ? null : `${panel.scrollHeight}px`;
});

$(".sponsor-slider").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  navSpeed: 1e3,
  dots: false,
  autoplay: true,
  autoplaySpeed: 1e3,
  navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
  responsive: { 0: { items: 1 }, 600: { items: 3 }, 1e3: { items: 6 } }
})