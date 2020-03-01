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
    let price =(type =='villa')? 500:
        (type=='house')?300:
            (type=='room')?100:'';
    let total = parseInt(price) * parseInt(rentDays) * (1 - parseInt(discount) / 100)

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

