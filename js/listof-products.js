function loaded(){
    buildProductTable();
}
function buildProductTable(){
            var tbodyCtrl = document.getElementById("tbody");
            tbodyCtrl.innerHTML = "";
            for(var product of products ){
                var tr = "<tr>"
                tr += "<td class='center'>" + product.id + "</td>";
                tr += "<td>" + product.code + "</td>";
                tr += "<td>" + product.name + "</td>";
                tr += "<td class='right'>" + product.price + "</td>";
                tr += "<td class='center'>" + product.vendor.id + "</td>";
                tr += "<td>" + product.vendor.name + "</td>";
                tr += "</tr>";
                tbodyCtrl.innerHTML += tr;
            }
}