function booking() {
    let fullName = document.getElementById('fullName').value;
    let idCard = document.getElementById('idCard').value;
    let bd = document.getElementById('bd').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let rank = document.getElementById('rank').value;
    let guest = document.getElementById('guest').value;
    let rentDays = document.getElementById('rentDays').value;
    let typeOfService = document.getElementById('typeOfService').value;
    let roomType = document.getElementById('roomType').value
    let menu = parseInt(prompt('1.Hien thi thong tin khach hang.' + '\n' +
        '2.Chinh sua thong tin khach hang.' + '\n' +
        '3.Hien Thi Gia Sau Khi Giam.' + '\n' +
        '4.Them/Xoa khach hang.'));
    switch (menu) {
        case 1:
            alert('Ten: ' + fullName + '\n' +
                'So CMND: ' + idCard + '\n' +
                'Ngay sinh: ' + bd + '\n' +
                'Email: ' + email + '\n' +
                'Dia chi: ' + address + '\n' +
                'Hang thanh vien: ' + rank + '\n' +
                'So luong khach: ' + guest + '\n' +
                'So ngay thue: ' + rentDays + '\n' +
                'Loai dich vu: ' + typeOfService + '\n' +
                'Loai phong: ' + roomType + '\n');
            break;




        case 2:
            let editMenu = parseInt(prompt('1.Ten: ' + fullName + '\n' +
                '2.So CMND: ' + idCard + '\n' +
                '3.Ngay sinh: ' + bd + '\n' +
                '4.Email: ' + email + '\n' +
                '5.Dia chi: ' + address + '\n' +
                '6.Hang thanh vien: ' + rank + '\n' +
                '7.So luong khach: ' + guest + '\n' +
                '8.So ngay thue: ' + rentDays + '\n' +
                '9.Loai dich vu: ' + typeOfService + '\n' +
                '10.Loai phong: ' + roomType + '\n'));
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
                    guest = prompt('Vui long nhap so nguoi di cung:');
                    break;
                case 8:
                    rentDays = prompt('Vui long nhap so ngay thue:');
                    break;
                case 9:
                    typeOfService = prompt('Vui long chon loai dich vu:');
                    break;
                case 10:
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
                'So luong khach: ' + guest + '\n' +
                'So ngay thue: ' + rentDays + '\n' +
                'Loai dich vu: ' + typeOfService + '\n' +
                'Loai phong: ' + roomType + '\n');
            break;
        default:
            alert('Vui long chon chuc nang co trong menu');





        case 3:
            let price = 0;
            if (typeOfService === 'villa') {
                price = 500;
            } else if (typeOfService === 'house') {
                price = 300;
            } else if (typeOfService === 'room') {
                price = 100;
            }
            let discount = 0;
            if (address === 'Da Nang') {
                discount += 20;
            } else if (address === 'Hue') {
                discount += 10;
            } else if (address === 'Quang Nam') {
                discount += 5;
            }
            if (rentDays > 7) {
                discount += 30;
            } else if (rentDays >= 5) {
                discount += 20;
            } else if (rentDays >= 2) {
                discount += 10
            }
            if (rank === 'diamond') {
                discount += 15;
            } else if (rank === 'platium') {
                discount += 10;
            } else if (rank === 'gold') {
                discount += 5;
            } else if (rank === 'silver') {
                discount += 2;
            }
            let total = price * rentDays - discount;
            alert('Muc gia sau khi giam: ' + total + ' $');
            break;

        case 4:
            let arrCustomerName = [];
            while (true) {
                let choose = parseInt(prompt('1.Add new customer' + '\n' + '2.Delete Customer'));
                switch (choose) {
                    case 1:
                        let number = parseInt(prompt('Please enter the number of customer: '));
                        for (let i = 0; i < number; i++) {
                            let customerName = prompt('Please enter name:');
                            arrCustomerName.push(customerName);
                        }
                        let result='';
                        arrCustomerName.sort();
                        for(let i=0;i<arrCustomerName.length;i++){
                            result += ((i+1)+'. '+arrCustomerName[i]+'\n');
                        }
                        alert(result);
                        break;

                    case 2:
                        let check =false;
                        let customerName = prompt('Please enter name: ');
                        for(let i=0;i<arrCustomerName.length;i++) {
                            if (customerName === arrCustomerName[i]) {
                                arrCustomerName.splice(i, 1);
                                check = true;
                            }
                        }
                        if(!check){
                            alert('Not found');
                            break;
                        }
                        let result1 ='';
                        arrCustomerName.sort();
                        for(let i=0;i<arrCustomerName.length;i++){
                            result1 += ((i+1)+'. '+arrCustomerName[i]+'\n');
                        }
                        alert('Deleted Successful');
                        alert(result1);
                        break;
                    default:
                        alert('Failed');

                }

            }
            break;
    }
}

function checking() {
    let fullName = document.getElementById('fullName');
    let tempName = '';
    fullName.value = fullName.value.trim().toLowerCase();
    for(let i=0;i<fullName.value.length;i++){
        if(fullName.value.charAt(i)===' ' && fullName.value.charAt(i+1)===' '){
            continue;
        }
        if(i===0 || fullName.value.charAt(i-1)===' '){
            tempName+=fullName.value.charAt(i).toUpperCase();
            continue;
        }

        tempName+=fullName.value.charAt(i);
    }
    fullName.value=tempName;



    let address = document.getElementById('address');
    let tempAdress = '';
    address.value = address.value.trim().toLowerCase();
    for(let i=0; i<address.value.length;i++){
        if(address.value.charAt(i)===' ' && address.value.charAt(i+1)===' '){
            continue;
        }
        if(i===0 || address.value.charAt(i-1)===' '){
            tempAdress+=address.value.charAt(i).toUpperCase();
            continue;
        }
        tempAdress+=address.value.charAt(i);
    }
    address.value = tempAdress;




    let countAt = 0;
    let countDoc = 0;
    let email = document.getElementById('email').value;
    for (let i = 0; i < email.length; i++) {
        if (email.charAt(i) === '@') {
            countAt++;
            for (j = i + 1; j < email.length; j++) {
                if (email.charAt(j) === '.') {
                    countDoc++;
                }
            }
        }
    }
    if (countAt != 1 || countDoc < 1) {
        alert('Vui long nhap lai email');
    }





    let check = false;
    while (!check) {
        let idCard = document.getElementById('idCard').value;
        if (!isNaN(idCard)) {
            idCard = Number.parseFloat(idCard);
        }
        if (idCard < 10000000 || idCard > 99999999 || !Number.isInteger(idCard)) {
            alert('Vui long nhap du 8 chu so CMND');
        } else {
            check = true;
        }

        check = false;
        let bd = document.getElementById('bd').value;
        if (bd.charAt(2) === '/' && bd.charAt(5) === '/') {
            let day = bd.substring(0, 2);
            let month = bd.substring(3, 5);
            let year = bd.substring(6, 10);
            if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
                day = Number.parseFloat(day);
                month = Number.parseFloat(month);
                year = Number.parseFloat(year);
                if (Number.isInteger(day) && Number.isInteger(month) && Number.isInteger(year)) {
                    if (day < 32 && month < 13 && year > 1950) {
                        check = true;

                    }
                }
            }
        }
        if(!check) {
            alert('Vui long nhap dung dinh dang ngay thang')
        }

        check = false;
        let rentDays = document.getElementById('rentDays').value;

        if (!isNaN(rentDays)&& rentDays>0) {
            rentDays = Number.parseFloat(rentDays);
            if (Number.isInteger(rentDays) ) {
                check = true;
            }
        } if(!check) {
            alert('Vui long nhap so ngay muon thue');
        }








        check = false;
        let guest = document.getElementById('guest').value;

        if (!isNaN(guest)&& guest>0) {
            guest = Number.parseFloat(guest);
            if (Number.isInteger(guest) ) {
                check = true;
            }
        }if(!check) {
            alert('Vui long nhap so khach di cung');
        }
        break;
    }

}
