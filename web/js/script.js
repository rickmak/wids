var popupStatus = 0;
var bg = $('<div id="#bgpopup" style="opacity: 0.7;position:fixed;height:100%;width:100%;top:0;left:0;background:#000000;border:1px solid #cecece; z-index:1;"></div>');
nav = function(hash) {
  $("div#main div").hide();
  $("div#main div" + hash + "-content").show();
  $('nav ul li').removeClass('selected');
  $('nav ul li a[href$="'+ hash + '"]').parent().addClass('selected');
}

function loadPopup(hash){
  target = $('div' + hash);
  if(popupStatus==0){
    popupStatus = hash;
    $('body').append(bg);
    bg.fadeIn("slow");
    bg.click(function(){disablePopup();});
    target.fadeIn("slow");
  }
}

function disablePopup(){
  if(popupStatus != 0){
    $('div' + popupStatus).fadeOut("slow");
    bg.fadeOut("slow", function(){bg.remove();});
    popupStatus = 0;
  }
}

$(function() {
  if(window.location.hash) {
    h = window.location.hash;
  } else {
    h = $("nav li.selected a").attr('href');
  }
  nav(h);
  click_handler = function(evt) {
    nav($(evt.currentTarget).attr('href'));
  }
  $('a.nav-btn').click(click_handler);
  $('nav ul li a').click(click_handler);

  $('img.more-info').click(function(evt){
      loadPopup($(evt.currentTarget).attr("for"));
  });
});


