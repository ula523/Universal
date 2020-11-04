$(document).ready(function(){
  $('.header__button-menu').click(function(){
    $('.header__modal-dialog').toggle('header__modal-dialog--visible')
  });
   var mainBlock = $(".main-block");
  var mainWrapper = $(".main-wrapper");

   mainBlock.on('click',function(event){
     var activeContent = $(this).attr("data-target");
     mainBlock.removeClass("main-block--active");
     mainWrapper.removeClass("main-wrapper--active");
     $(activeContent).addClass("main-wrapper--active");
     $(this).addClass("mainBlock--active");
   });
})