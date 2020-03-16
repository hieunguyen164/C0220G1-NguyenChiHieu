let product = ['iPhone 7', 'iPhone 7 Plus', 'iPhone 8', 'iPhone 8 Plus'];

function addItem() {
    let newItem = document.getElementById('newItem').value;
    product.push(newItem);
    alert(newItem + ' added successfull.');
    document.getElementById('newItem').value='';
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
    let display = '<table class="product">';
    for (let i = 0; i < product.length; i++) {
        display += '<tr>';
        for (let j = 0; j < 1; j++) {
            display += '<td>' + product[i] + '</td>'
                + '<td>' + '<button class="btn" onclick="editItem(' + i + ')">' + 'EDIT' + '</button>' + '</td>'
                + '<td>' + '<button class="btn" onclick="deleteItem(' + i + ')">' + 'DELETE' + '</button>' + '</td>';
        }
        display+='</tr>';
    }
    display += '</table>';
    document.getElementById('displayItem').innerHTML = display;
}