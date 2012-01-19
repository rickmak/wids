navigate = function(hash) {
  $("div#main div").hide();
  $("div#main div" + hash).show();
  $('nav ul li').removeClass('selected');
  $('nav ul li a[href$="'+ hash + '"]').parent().addClass('selected');
}

$(function() {
  if(window.location.hash) {
    h = window.location.hash;
  } else {
    h = $("nav li.selected a").attr('href');
  }
  navigate(h);
  click_handler = function(evt) {
    navigate($(evt.currentTarget).attr('href'));
  }
  $('a.nav-btn').click(click_handler);
  $('nav ul li a').click(click_handler);
});






