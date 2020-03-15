let product = ['iPhone 7', 'iPhone 7 Plus', 'iPhone 8', 'iPhone 8 Plus'];

function addItem() {
    let newItem = document.getElementById('newItem').value;
    product.push(newItem);
    alert(newItem + ' da duoc them vao danh sach.');
    document.getElementById('newItem').value='';
}

function deleteItem() {
    let del = prompt('Nhap ten san pham muon xoa:');
    for (let i = 0; i < product.length; i++) {
        if (del == product[i]) {
            product.splice(i, 1);
        }
    }
    alert('Xoa ' + del+' thanh cong')
    displayItem();

}

function editItem() {
    let editOld = prompt('Nhap ten san pham muon chinh sua: ');
    let editNew = prompt('Nhap ten san pham moi:');
    for (let i = 0; i < product.length; i++) {
        if (editOld == product[i]) {
            product.splice(i, 1, editNew);
        }
    }
    alert(editOld +' da duoc doi ten thanh '+editNew);
    displayItem();
}

function displayItem() {
    let display = '<table class="product">';
    for (let i = 0; i < product.length; i++) {
        display += '<tr>';
        for (let j = 0; j < 1; j++) {
            display += '<td>' + product[i] + '</td>'
                + '<td>' + '<button class="btn" onclick="editItem()">' + 'EDIT' + '</button>' + '</td>'
                + '<td>' + '<button class="btn" onclick="deleteItem()">' + 'DELETE' + '</button>' + '</td>';
        }
        display+='</tr>';
    }
    display += '</table>';
    document.getElementById('displayItem').innerHTML = display;
}