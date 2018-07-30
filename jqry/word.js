$("#bold").click(function(){
    $("#par").css("fontWeight","bold");
})

$("#itali").click(function(){
    $("#par").css("fontStyle","italic");
})


$("#underline").click(function(){
    $("#par").css("text-decoration","underline");
})

$("#f").change(function(){
    var a=$('#f').val();

    $("#par").css("font-family",a);
})


$("#s").change(function(){
    var a=$('#s').val();

    $("#par").css("fontSize",a);
})




