$(".rslides_portfolio").responsiveSlides({
  auto: false,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false
});

$('.menu_toggle').click(function() {
  $('.site_nav').toggleClass('site-nav--open', 500);
  $(this).toggleClass('open');
  })