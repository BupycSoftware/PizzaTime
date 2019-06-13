const storage = localStorage['pizzaInformation'];
const data = JSON.parse(storage)
const userInformation = data.userInformation
localStorage.removeItem( 'pizzaInformation' ); // Clear the localStorage
$('#order-pizza-img').attr("src", data.pizzaImg);
$('#order-pizza-name').text(data.pizzaName)
$('#order-pizza-size').text(data.pizzaSize)
$('#order-pizza-client-name').text('Имя: ' + userInformation.name)
$('#order-pizza-client-number').text('Номер: ' + userInformation.phone)
$('#order-pizza-client-adress').text('Адрес: ' + userInformation.delivery)
$('#total-payment').text('К оплате: ' + data.totalPizzaPrice + ' грн')
data.additionPosition.forEach((item, index)=>{
	if(item){
		const additionalText = '<p>' + item.name + ' в количестве: ' + item.count + " штук, ценой: " +  item.price + ' грн' + '</p>';
		$('#order-about-add').append(additionalText)
	}
})

$(".good").click(function(){
    Self.close()
});