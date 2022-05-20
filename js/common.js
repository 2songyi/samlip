$(function(){

  /* 실습
  : #lnb의 메뉴와 같은 서브페이지의 주소값을 매칭하여 해당 메뉴에 on class 추가하기
   */
   function splitHref(x) { //함수로 리팩토링
     let xHref = $(x).attr("href").split("/");
     xHref = xHref[xHref.length - 1].split('.')[0];
     return xHref;
   }
  let locationFunc = splitHref(location);
  $("#lnb a").each(function(){
    if (locationFunc == splitHref(this)) {
      $(this).addClass("on");
    }
  });


  // accordian
  $(".accordian dd:not(:first)").css({
    "display":"none", "height":0 }
  );
  $(".accordian dl dt").click(function(){
    let thisElem = $(this);
    if ($("+dd", thisElem).css("display") == "none") {
      $(".accordian dd").each(function(){
        if (parseInt($(this).css("height")) == 300) {
          $(this).animate({height: 0}, "slow", function(){
            $(this).css("display", "none"); //이거 안하면 안에 텍스트 겹쳐서 나옴
          });
        }
      });
      $("+dd", thisElem).css("display", "block").animate({height: 300});
    }
  });

  // brand btn
  $(".brand-btn li").click(function(){
    let liTxt = $(this).text();
    if (liTxt == 'BAKERY') {
      $(".brand").removeClass("on");
      $("#bakery").addClass("on");
      $(".brand-btn li").removeClass("on");
      $(this).addClass("on");
    } else if (liTxt == 'FOOD'){
      $(".brand").removeClass("on");
      $("#food").addClass("on");
      $(".brand-btn li").removeClass("on");
      $(this).addClass("on");
    } else if (liTxt == 'STORE/ONLINE') {
      $(".brand").removeClass("on");
      $("#store").addClass("on");
      $(".brand-btn li").removeClass("on");
      $(this).addClass("on");
    }
  });


});
