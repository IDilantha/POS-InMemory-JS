$(function () {
    loadItems();
});

function loadItems() {
    $("#tbl-items tbody tr").remove();
    for (var i=0; i<items.length;i++){
        var html = '<tr>' +
            '<td>'+ items[i].code+'</td>' +
            '<td>'+ items[i].description+'</td>' +
            '<td>'+ items[i].qty+'</td>' +
            '<td>'+ items[i].unitPrice+'</td>' +
            '<td> <i class="fa fa-trash"></i></td>' +
            '</tr>';
        $("#tbl-items tbody").append(html);
    }
}
