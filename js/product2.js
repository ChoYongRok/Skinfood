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

//product1____________________________________
  //main card_________________________
  $(".con1").hover(function(){
    $(".box1").stop().fadeToggle();
  });
  $(".con2").hover(function(){
    $(".box2").stop().fadeToggle();
  });
  $(".con3").hover(function(){
    $(".box3").stop().fadeToggle();
  });
  $(".con4").hover(function(){
    $(".box4").stop().fadeToggle();
  });

  // 건강한당근 텍스트
  $(window).on("scroll",function(){
    if($(window).scrollTop() > 400){
      $("#con2 h3").animate({top:"30%",opacity:"1"}, 1000);
      $("#con2 p").delay(100).animate({top:"50%",opacity:"1"}, 1000);
    }
  });

  // 스킬 프로그레스

  $(window).on("scroll",function(){
    if($(window).scrollTop() > 1000){
      $(".skill-progress").animate({right:"0%",opacity:"1"}, 1000);
    }
  });

  //비건인증

  $(".vegan .first").hover(function(){
    $(".vegan .one").stop().animate({top:"100%",opacity:"1"}, 500);
    $(".vegan h3").stop().animate({"opacity":"0"}, 500);
  }, function(){
    $(".vegan .one").stop().animate({top:"150%",opacity:"0"}, 500);
    $(".vegan h3").stop().animate({"opacity":"1"}, 500);
  });

  $(".vegan .second").hover(function(){
    $(".vegan .two").stop().animate({top:"100%",opacity:"1"}, 500);
    $(".vegan h3").stop().animate({"opacity":"0"}, 500);
  }, function(){
    $(".vegan .two").stop().animate({top:"150%",opacity:"0"}, 500);
    $(".vegan h3").stop().animate({"opacity":"1"}, 500);
  });
  //리뷰 슬라이드

  //다음보기
  $(".ban_btn .ban_right").click(function(){

    $(".box ul").stop(true,true).animate({marginLeft:"-=360px"},500,function(){
      $(".box ul li:first-child").appendTo(".box ul"); //첫번째 이미지 맨뒤로 이동
      $(this).css({marginLeft:"0px"}); //최종목적지
    });

  });


  //이전보기
  $(".ban_btn .ban_left").click(function(){

    $(".box ul").stop(true,true).animate({marginLeft:"+=360px"},500,function(){
      $(".box ul li:last-child").prependTo(".box ul"); //마지막 이미지 맨앞으로 이동
      $(this).css({marginLeft:"0px"}); //최종목적지
    });

  });


});
