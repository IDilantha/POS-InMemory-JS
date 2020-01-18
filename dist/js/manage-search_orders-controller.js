$(function () {
   loadOrders();
});

function loadOrders() {
    $("#tbl-orders tbody tr").remove();
    for (var i=0; i<orders.length;i++){
        var html = '<tr>' +
            '<td>'+ orders[i].orderId+'</td>' +
            '<td>'+ orders[i].orderDate+'</td>' +
            '<td>'+ orders[i].customerId+'</td>' +
            '<td>'+ orders[i].customerName+'</td>' +
            '<td>'+ orders[i].total+'</td>' +
            '</tr>';
        $("#tbl-orders tbody").append(html);
    }
}