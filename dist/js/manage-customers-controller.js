$(function () {
    loadCustomers();
});

function loadCustomers() {
    $("#tbl-customers tbody tr").remove();
    for (var i=0; i<customers.length; i++){
        var html = '<tr>' +
            '<td>'+ customers[i].id+'</td>' +
            '<td>'+ customers[i].name+'</td>' +
            '<td>'+ customers[i].address+'</td>' +
            '<td> <i class="fa fa-trash"></i></td>' +
            '</tr>';
        $("#tbl-customers tbody").append(html);
    }
}

