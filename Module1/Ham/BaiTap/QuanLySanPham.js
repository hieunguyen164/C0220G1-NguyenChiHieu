let product = ['iPhone 7', 'iPhone 7 Plus', 'iPhone 8', 'iPhone 8 Plus'];


function addItem() {
    let addItem = document.getElementById('addItem');
    let add = addItem.value;
    product.push(add);
    alert(add + ' added successfull.');
    addItem.value ='';
    displayItem();
}
function deleteItem(x) {
    for (let i = 0; i < product.length; i++) {
        if (x == i) {
            product.splice(i, 1);
            alert('Deleted');
        }
    }
    displayItem();
}
function editItem(x) {

    let editNew = prompt('Nhap ten san pham moi:');
    for (let i = 0; i < product.length; i++) {
        if (x==i) {
            product.splice(i, 1, editNew);
            alert(' Rename: '+editNew);
        }
    }
    displayItem();
}
function displayItem() {
    let data = '';
    if(product.length>0) {
        for (let i = 0; i < product.length; i++) {
            data += '<tr>';
            data += '<td>' + product[i] + '</td>';
            data += '<td>' + '<button class="btn" onclick="editItem(' + i + ')">' + 'EDIT' + '</button>' + '</td>';
            data += '<td>' + '<button class="btn" onclick="deleteItem(' + i + ')">' + 'DELETE' + '</button>' + '</td>';
            data += '</tr>';
        }

        document.getElementById('displayItem').innerHTML = data;
    }
}
