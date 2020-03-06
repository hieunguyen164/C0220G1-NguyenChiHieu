
function booking() {
    let fullName = document.getElementById('fullName').value;
    let idCard = document.getElementById('idCard').value;
    let bd = document.getElementById('bd').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let rank = document.getElementById('rank').value;
    let guest = document.getElementById('guest').value;
    let rentDays = document.getElementById('rentDays').value;
    let type = document.getElementById('type').value;
    let roomType = document.getElementById('roomType').value
    let discount=0;
    let menu = parseInt(prompt('1.Hien thi thong tin khach hang.' + '\n' +
        '2.Chinh sua thong tin khach hang.' + '\n' +
        '3.Hien Thi Gia Sau Khi Giam.'));
    switch (menu) {
        case 1:
            alert('Ten: ' + fullName + '\n' +
                'So CMND: ' + idCard + '\n' +
                'Ngay sinh: ' + bd + '\n' +
                'Email: ' + email + '\n' +
                'Dia chi: ' + address + '\n' +
                'Hang thanh vien: ' + rank + '\n' +
                'Giam gia: ' + discount + '\n' +
                'So luong khach: ' + guest + '\n' +
                'So ngay thue: ' + rentDays + '\n' +
                'Loai dich vu: ' + type + '\n' +
                'Loai phong: ' + roomType + '\n');
            break;
        case 2:
            let editMenu = parseInt(prompt('1.Ten: ' + fullName + '\n' +
                '2.So CMND: ' + idCard + '\n' +
                '3.Ngay sinh: ' + bd + '\n' +
                '4.Email: ' + email + '\n' +
                '5.Dia chi: ' + address + '\n' +
                '6.Hang thanh vien: ' + rank + '\n' +
                '7.Giam gia: ' + discount + '\n' +
                '8.So luong khach: ' + guest + '\n' +
                '9.So ngay thue: ' + rentDays + '\n' +
                '10.Loai dich vu: ' + type + '\n' +
                '11.Loai phong: ' + roomType + '\n'));
            switch (editMenu) {
                case 1:
                    fullName = prompt('Vui long nhap ten:');
                    break;
                case 2:
                    idCard = prompt('Vui long nhap so CMND:');
                    break;
                case 3:
                    bd = prompt('Vui long nhap ngay sinh:');
                    break;
                case 4:
                    email = prompt('Vui long nhap email:');
                    break;
                case 5:
                    address = prompt('Vui long nhap dia chi:');
                    break;
                case 6:
                    rank = prompt('Vui long nhap hang thanh vien:');
                    break;
                case 7:
                    discount = prompt('Vui long nhap so tien duoc giam:');
                    break;
                case 8:
                    guest = prompt('Vui long nhap so nguoi di cung:');
                    break;
                case 9:
                    rentDays = prompt('Vui long nhap so ngay thue:');
                    break;
                case 10:
                    type = prompt('Vui long chon loai dich vu:');
                    break;
                case 11:
                    roomType = prompt('Vui long chon loai phong:');
                    break;
                default:
                    alert('Failed');
            }
            alert('Ten: ' + fullName + '\n' +
                'So CMND: ' + idCard + '\n' +
                'Ngay sinh: ' + bd + '\n' +
                'Email: ' + email + '\n' +
                'Dia chi: ' + address + '\n' +
                'Hang thanh vien: ' + rank + '\n' +
                'Giam gia: ' + discount + '\n' +
                'So luong khach: ' + guest + '\n' +
                'So ngay thue: ' + rentDays + '\n' +
                'Loai dich vu: ' + type + '\n' +
                'Loai phong: ' + roomType + '\n');
                break;
        default:
            alert('Vui long chon chuc nang co trong menu');
        case 3:

            switch (type) {
                case 'villa':
                    type = 500;
                    break;
                case 'house':
                    type = 300;
                    break;
                case 'room':
                    type = 100;
                    break;
            }
            switch (address) {
                case 'da nang':
                    address = 20;
                    break;
                case 'hue':
                    address = 10;
                    break;
                case 'quang nam':
                    address = 5;
                    break;
            }
            switch (rank) {
                case 'diamond':
                    rank = 15;
                    break;
                case 'platium':
                    rank = 10;
                    break;
                case 'gold':
                    rank = 5;
                    break;
                case 'silver':
                    rank = 2;
                    break;
                default:
                    rank = 0;
            }
            if (rentDays >= 7) {
                discount = 30;
            } else if (rentDays >= 5) {
                discount = 20;
            } else if (rentDays >= 2) {
                discount = 10;
            } else {
                discount = 0;
            }
            total = type * rentDays - (address + discount + rank);
            alert('Muc gia sau khi giam: ' + total + ' $');
    }
}






