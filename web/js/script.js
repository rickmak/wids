$(function() {
  $("div#main div").hide();
  if(window.location.hash) {
    h = window.location.hash;
  } else {
    h = $("nav li.selected a").attr('href');
  }
  $('div#main div' + h).show();

  click_handler = function(evt) {
    hash = $(evt.currentTarget).attr('href');
    $("div#main div").hide();
    $("div#main div" + hash).show();
  }
  $('a.nav-btn').click(click_handler);
  $('nav ul li a').click(click_handler);
});






