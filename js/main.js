$(document).ready(function(){



  //start icon 

  
  $(".nav-item").on("click",function(){
      $(this).addClass('active').siblings().removeClass("active");
  });




  // start search icon 
    $("#search-icon").click(function(){
      $("#search-content").addClass("slid");
    });
    $("#exit-search").click(function(){
        $("#search-content").removeClass("slid");
      });
// start button to top 

$(window).scroll(function(){

  const myScroll = $(window).scrollTop();

  if(myScroll > 400){
    $('.to-top').css("visibility", "visible")
  }else{
    $('.to-top').css("visibility", "hidden")
  }

});

$(".to-top").on("click", function(){
  $("html,body").animate({
    scrollTop : 0
  },400);
});






  });