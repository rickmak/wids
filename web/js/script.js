$(function() {
  $("div#main div").hide();
  if(window.location.hash) {
    h = window.location.hash;
  } else {
    h = $("nav li.selected a").attr('href');
  }
  $('div#main div' + h).show();

  $('nav ul li a').click(function(evt){
    hash = $(evt.target).attr('href');
    $("div#main div").hide();
    $("div#main div" + hash).show();
  });
});






