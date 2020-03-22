let arrListCustomer = [];
let arrInforCustomer = [];

function displayMainMenu() {
    let menu = parseInt(prompt('1.Add New Customer'+ '\n' +
        '2.Display Information Customer'+ '\n'+
        '3.Edit Information Customer'+ '\n'+
        '4.Delete Customer'+'\n'+
        '5.Exit'));

    switch (menu) {
        case 1:
            addNewCustomer();
            break;
        case 2:
            displayCustomer();
            break;
        case 3:
            editCustomer();
            break;
        case 4:
            deleteCustomer();
            break;
        case 5:
            alert('Exit');
            break;
        default:
            alert('Exit')
    }
}
function addNewCustomer() {
    let fullName = document.getElementById('fullName').value;
    let idCard = document.getElementById('idCard').value;
    let bd = document.getElementById('bd').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let rank = document.getElementById('rank').value;
    let guest = document.getElementById('guest').value;
    let rentDays = document.getElementById('rentDays').value;
    let typeOfService = document.getElementById('typeOfService').value;
    let roomType = document.getElementById('roomType').value;

    arrInforCustomer.push(fullName);
    arrInforCustomer.push(idCard);
    arrInforCustomer.push(bd);
    arrInforCustomer.push(email);
    arrInforCustomer.push(address);
    arrInforCustomer.push(rank);
    arrInforCustomer.push(guest);
    arrInforCustomer.push(rentDays);
    arrInforCustomer.push(typeOfService);
    arrInforCustomer.push(roomType);
    arrListCustomer.push(arrInforCustomer);
    alert('Done');
    console.log(arrListCustomer);
    arrInforCustomer=[];

    displayMainMenu();
}
function displayCustomer() {
    let show ='';

    for(let i=0; i< arrListCustomer.length;i++){

        show+='<tr>'+'<td>'+i+'</td>';
        for(let j = 0;j < arrListCustomer[i].length;j++){
            show += '<td>'+arrListCustomer[i][j]+'</td>';
        }
        show+='</tr>';
    }
    document.getElementById('showCustomer').innerHTML=show;

}

function editCustomer() {
    let title = '';
    for(let i = 0; i< arrListCustomer.length; i++){
        title += i  + ' .Name: '+arrListCustomer[i][0] + '\n';
    }
    let display = parseInt(prompt(title));
    let edit = parseInt(prompt('1.Ten: ' + arrListCustomer[display][0] + '\n' +
        '2.So CMND: ' + arrListCustomer[display][1] + '\n' +
        '3.Ngay sinh: ' + arrListCustomer[display][2] + '\n' +
        '4.Email: ' + arrListCustomer[display][3] + '\n' +
        '5.Dia chi: ' + arrListCustomer[display][4] + '\n' +
        '6.Hang thanh vien: ' + arrListCustomer[display][5] + '\n' +
        '7.So luong khach: ' + arrListCustomer[display][6] + '\n' +
        '8.So ngay thue: ' + arrListCustomer[display][7] + '\n' +
        '9.Loai dich vu: ' + arrListCustomer[display][8] + '\n' +
        '10.Loai phong: ' + arrListCustomer[display][9] + '\n'));
    switch (edit) {
        case 1:
            arrListCustomer[display][0] = prompt('Vui long nhap ten:');
            break;
        case 2:
            arrListCustomer[display][1] = prompt('Vui long nhap so CMND:');
            break;
        case 3:
            arrListCustomer[display][2] = prompt('Vui long nhap ngay sinh:');
            break;
        case 4:
            arrListCustomer[display][3] = prompt('Vui long nhap email:');
            break;
        case 5:
            arrListCustomer[display][4] = prompt('Vui long nhap dia chi:');
            break;
        case 6:
            arrListCustomer[display][5] = prompt('Vui long nhap hang thanh vien:');
            break;
        case 7:
            arrListCustomer[display][6] = prompt('Vui long nhap so nguoi di cung:');
            break;
        case 8:
            arrListCustomer[display][7] = prompt('Vui long nhap so ngay thue:');
            break;
        case 9:
            arrListCustomer[display][8] = prompt('Vui long chon loai dich vu:');
            break;
        case 10:
            arrListCustomer[display][9] = prompt('Vui long chon loai phong:');
            break;
        default:
            alert('Exit');
    }
    editCustomer();
}

function deleteCustomer() {
    let del = parseInt(prompt('Please enter the order number: '));
    for(let i = 0 ; i< arrListCustomer.length; i++){
        if(del == i){
            arrListCustomer.splice(i,1);
        }
    }
    displayCustomer();

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