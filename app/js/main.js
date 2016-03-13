$(".button").on("click", function(){
  var test = $(".login").val();
  var result = 0;
  test.split("").map(function(item) {
    result += +item;
  })
  $(".text").text(result);
})
