$("button").click(function(){
    let name=$(".name").val();
    let bottle=$(".bot-water").val();
    let bathroom=$(".bath-water").val();
     $(".prediction").show();
    $(".prediction").append("By the year 2062, "+name+" will have used at least "+(bottle*2+bathroom*18)*14600+" liters of water that about "+Math.round((bottle*2+bathroom*18)*14600/0.3)+" gallons.");
    $(".first-page").hide();
});