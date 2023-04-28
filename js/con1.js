$(document).ready(function(){

//메인페이지 카테고리 선택_________________
  $(".title").hover(function(){
    $(this).find("li").stop().slideDown();
  },function(){
    $(this).find("li").stop().slideUp();
  });

//header__________________________________
  
//드롭다운메뉴
  $(".main").hover(function(){
    $(this).find(".submenu").stop().slideDown();
  },function(){
    $(this).find(".submenu").stop().slideUp();
  });

//로그인메뉴
  $(".modal-notice").click(function(){
    $(".modal").fadeIn();
  });


  $(".btn-close").click(function(){
    $(".modal").fadeOut();
  });

//아코디언바
  $(".title").click(function(){

    $(this).siblings(".title").removeClass("active");
    $(this).toggleClass("active");
    $(this).siblings(".content").stop().slideUp();
    $(this).next().stop().slideToggle();

  });

});
