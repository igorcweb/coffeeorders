var $orders = $('#orders'),
    $name = $('#name'),
    $drink = $('#drink');

function addOrder(order) {
    $orders.append('<li>name: ' + order.name + ', drink: ' + order.drink + '</li>');
}

$.ajax({
  type: "GET", //default (not required)
  url: "/api/orders"
}).done(function(orders) {
  $.each(orders, function(i, order) {
    addOrder(order);
  });
}).fail(function(err) {
    console.log(err);
});

$('#add-order').on('click', function () {

    var order = {
        name: $name.val(),
        drink: $drink.val()
    };
    console.log(order);

    $.ajax({
        type: 'POST',
        url: '/api/orders',
        data: order,
    }).done(function (newOrder) {
        addOrder(newOrder);
    }).fail(function (err) {
        console.error(err);
    });
});