let pizzaPrice = 0;
let additionalPrice = 0;
console.log(additionPrice)

$('.objectsize').on('change', (()=>{
    $(event.target.nextElementSibling).text(event.target.value + " грн")
    const obj = {
        Имя: event.target.name,
        Цена: event.target.value + ' грн',
    }
    console.log(obj)
}))

$('.zakaz-test').click(function(){
        const label = $(event.target);
        const chosenPizzaPrice = +label.siblings('.inline').find('.price')[0].innerHTML.substring(0,3)
        pizzaPrice = chosenPizzaPrice
        $('#totalPrice').text(chosenPizzaPrice + ' грн')
});

$('.addition-price-input').on('change', (()=>{
    const fixPrice = +event.target.name
    let additionalItemPrice = fixPrice * event.target.value
    additionalPrice += fixPrice
    const a = $(event.target).parent('td').siblings('td')[2]
    $(a).text(+additionalItemPrice + 'грн')
    $('#additionPrice').text(additionalPrice + 'грн')
    $('#totalPrice').text(+pizzaPrice + +additionalPrice + ' грн')

}))

$(document).ready(function () {
    $("#zakaz").click(function(){
        $('.addition-price-input').each((index,item)=>{
            console.log($(item))
            $(item).val(0)
        })
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


    $(".input_value").click(function (){
        var price_id = $(this).parent().prev().children().attr("id");
        var class_name = $(".price-pizza-" + price_id);
        var input_value = $(this).val() * $(class_name).text();
        $(".total_price").text(input_value + " грн");
    });
    $(".input_value2").click(function (){
        var price_id = $(this).parent().prev().children().attr("id");
        var class_name = $(".price-pizza-" + price_id);
        var input_value = $(this).val() * $(class_name).text();
        $(".total_price2").text(input_value + " грн");
    });
});

