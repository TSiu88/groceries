$(document).ready(function(){
  $("#form1").submit(function(event){

    var items = ["item1", "item2", "item3", "item4", "item5"];

    var itemInput = items.map(function(item){
      return $("#" +item).val();
    });

    itemInput.sort();

    var itemUpper = itemInput.map(function(input){
      return input.toUpperCase();
    })

    itemUpper.forEach(function(upper){
      $("ul").append("<li>" + upper + "</li>");
    });


    $("#form1").hide();
    $("#list").show();
    event.preventDefault();
  });
});