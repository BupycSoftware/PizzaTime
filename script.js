let totalPizzaPrice = 0
let pizzaPrice = 0;
let additionalPrice = 0;
let additionPosition = [{count: 0, price: 0}];

function checkCola () {
    if(totalPizzaPrice >= 100){
        totalPizzaPrice += 0.99
        $('#plus_id').css("display","table-cell");
        $('#cola_png').css("display","block");
    }else{
        $('#plus_id').css("display","none");
        $('#cola_png').css("display","none");
    }
}

function calculateAdditionalPrice (){
    let price = 0
    additionPosition.forEach((item, index)=>{
        price +=item.price
    })
    return price
}

function resetOrder () {
    $('.addition-price-input').each((index, item)=>{
        $(item).val(0)
        additionalPrice = 0
        totalPizzaPrice = 0
        additionPosition = [{count: 0, price: 0}];
        const a = $(item).parent('td').siblings('td')[2]
        $(a).text(0 + ' грн')
        $('#additionPrice').text(0 + ' грн') 
    })
}

$('.objectsize').on('change', (()=>{
    $(event.target.nextElementSibling).text(event.target.value + " грн")
}))

$('.order-pizza').click(function(){
    const element = $(event.target);
    const chosenPizzaPrice = +element.siblings('.inline').find('.price')[0].innerHTML.substring(0,3)
    pizzaPrice = chosenPizzaPrice
    totalPizzaPrice = chosenPizzaPrice
    checkCola();
    $('#totalPrice').text(totalPizzaPrice + ' грн')
});

$('.addition-price-input').each((index, item)=>{
    $(item).on("change, keyup, input", (()=>{
        console.log(pizzaPrice)
        const fixPrice = +event.target.name
        let additionalItemPrice = fixPrice * event.target.value
        additionPosition[index] = {};
        additionPosition[index].price = additionalItemPrice
        additionPosition[index].count = event.target.value
        if(additionPosition[index].count < event.target.value){
            additionalPrice -= additionalItemPrice
        }else{
            additionalPrice += additionalItemPrice
        }
        const additionalSum = calculateAdditionalPrice();
        const totalPizza = additionalSum + pizzaPrice
        totalPizzaPrice = totalPizza
        const a = $(event.target).parent('td').siblings('td')[2]
        checkCola();
        $(a).text(+additionalItemPrice + ' грн')
        $('#additionPrice').text(+additionalSum + ' грн')
        $('#totalPrice').text(+totalPizzaPrice + ' грн')
    }))
})

$(document).ready(function () {
    $("#zakaz").click(function(){
        resetOrder()
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
    $(".back").click(function(){
        $(".form2").fadeOut(0, function(){
            $(this).css("display", "none");
        });
        $(".form").fadeIn(500, function(){
            $(this).css("display", "flex");
        });
    });
});
