$('.objectsize').on('change', (()=>{
    $(event.target.nextElementSibling).text(event.target.value + " грн")
    const obj = {
        pidor: event.target.name,
        sam_pidor: event.target.value + 'grn',
    }
    console.log(obj)
}))

$(document).ready(function () {
    $("#zakaz").click(function(){
        $(".oformzakaz").fadeIn(500, function(){
            $(this).css("display", "block");
        });
        $(".form").fadeIn(500, function(){
            $(this).css("display", "flex");
        });
    });
    $(".close").click(function(){
        $(".oformzakaz").fadeOut(250, function(){
            $(this).css("display", "none");
        });
        $(".form2").fadeOut(250, function(){
            $(this).css("display", "none");
        });
    });
    $("#next").click(function(){
        $(".form").fadeOut(0, function(){
            $(this).css("display", "none");
        });
        $(".form2").fadeIn(500, function(){
            $(this).css("display", "flex");
        });
    });
});