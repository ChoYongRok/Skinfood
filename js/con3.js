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


//소식선택
  $(".btn li").click(function(){

    $(this).addClass("on");
    $(this).siblings().removeClass("on");

    let result = $(this).attr("data-alt");
    $(".grid div").removeClass("on");
    $(`#${result}`).addClass("on");

  });

});
