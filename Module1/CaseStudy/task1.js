function booking() {
    let fullName = document.getElementById('fullName').value;
    let idCard = document.getElementById('idCard').value;
    let bd = document.getElementById('bd').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let rank = document.getElementById('rank').value;
    let discount = document.getElementById('discount').value;
    let guest = document.getElementById('guest').value;
    let rentDays = document.getElementById('rentDays').value;
    let type = document.getElementById('type').value;
    let roomType = document.getElementById('roomType').value
    if (type == "villa") {
        total = 500 * parseInt(rentDays) * (1 - parseFloat(discount) / 100)
    }else if (type == "house")
    {
        total = 300 * parseInt(rentDays) * (1 - parseFloat(discount) / 100)
    }else{
        total = 100 * parseInt(rentDays) * (1- parseFloat(discount) / 100)
    }
    alert('Full Name: ' + fullName +
        '\n' + 'IdCard: ' + idCard +
        '\n' + 'Birth Day: ' + bd +
        '\n' + 'Email: ' + email +
        '\n' + 'Address: ' + address +
        '\n' + 'Rank: ' + rank +
        '\n' + 'Discount: ' + discount +
        '\n' + 'Guest: ' + guest +
        '\n' + 'Rent Days: ' + rentDays +
        '\n' + 'Type of Service: ' + type +
        '\n' + 'RoomType: ' + roomType +
        '\n' + 'TOTAL PAYMENT = ' + total)
}

