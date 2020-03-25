let inforCustomer = [];
let listCustomer = [];
let inforEmployee = [];
let listEmployee = [];

class Customer {
    constructor() {
        this.name = '';
        this.idNumber = '';
        this.birth = '';
        this.email = '';
        this.address = '';
        this.rank = '';
        this.discount = '';
        this.guest = '';
        this.rentDays = '';
        this.typeOfService = '';
        this.roomType = '';
        this.payment = 0;

    }

    getName() {
        return this.name;
    };

    getIdNumber() {
        return this.idNumber;
    };

    getBirth() {
        return this.birth;
    };

    getEmail() {
        return this.email;
    };

    getAddress() {
        return this.address;
    }

    getRank() {
        return this.rank;
    };

    getDiscount() {
        return this.discount;
    };

    getGuest() {
        return this.guest;
    };

    getRentDays() {
        return this.rentDays;
    };

    getTypeOfServie() {
        return this.typeOfService;
    };

    getRoomType() {
        return this.roomType;
    };

    getPayment(){
        return this.payment;
    }
    setName() {
       let name = prompt('Please enter name:');
       this.name = name;
    };

    setIdNumber() {
        let idnumber;
        do {
          idnumber = prompt('Please enter 9 ID numbers:');
            if(validateIdNumber(idnumber)){
                return this.idNumber = idnumber;
            }else{
                alert('Invalid Id number!')
            }
        }while(!validateIdNumber(idnumber))

    };

    setBirth() {
        let birth;
        do{
            birth = prompt('Please enter birthday (DD/MM/YYYY):');
            if(validateBirthday(birth)){
                return this.birth = birth;
            }else{
                alert('Invalid date format!')
            }

        }while(!validateBirthday(birth));

    };

    setEmail() {
        let email;
        do{
            email = prompt('Please enter email (abc@abc.com');
            if(validateEmail(email)) {
              return this.email = email;
            }else{
                alert('Invalid email!')
            }
        }while(!validateEmail(email));

    };

    setAddress() {
        let address = prompt('Please enter address:');
        this.address = address;
    }

    setRank() {
        let rank = prompt('Please enter rank member:'+'\n'+'(Diamond | Platinum | Gold | Silver | Member)');
        this.rank = rank;
    };

    setDiscount() {
        let discount;
        do{
            discount = prompt('Please enter discount (%):');
            if(isNum(discount)){
                return this.discount = discount;
            }else{
                alert('Invalid value');
            }
        }while(!isNum(discount));

    };

    setGuest() {
        let guest;
        do{
            guest = prompt('Please enter the number of guests:');
            if(isNum(guest)){
                return  this.guest = guest;
            }else{
                alert('Invalid value!');
            }
        }while (!isNum(guest));


    };

    setRentDays() {
        let rentDays;
        do{
            rentDays = prompt('Please enter the number of rentdays:');
            if(isNum(rentDays)){
                return this.rentDays = rentDays;
            }else{
                alert('Invalid value!');
            }
        }while(!isNum(rentDays));
    };

    setTypeOfService() {
        let typeOfService;
        do{
            typeOfService = prompt('Please select type of service' +'\n'+'(Villa | House | Room)');
            if(validateTypeOfService(typeOfService)){
                return this.typeOfService = typeOfService;
            }else{
                alert('Invalid value!')
            }
        }while(!validateTypeOfService(typeOfService));
    };

    setRoomType() {
        let roomType = prompt('Please select room type'+'\n'+'(Vip | Bussiness| Normal)');
        this.roomType = roomType;
    };

    totalPayment() {
        let price = 0;
        price = (this.getTypeOfServie() === 'Villa') ? 500 : (this.getTypeOfServie() === 'House') ? 300 : (this.getTypeOfServie() === 'Room') ? 100 : '';
        this.payment = (price * this.rentDays * (1 - this.discount / 100));
        if(this.payment<=0){
            alert('You are free to stay.');
        }else{
            alert('Price after discount: '+this.getPayment()+' $');
        }
    };
}

class Employee {
    constructor() {
        this.name = '';
        this.birth = '';
        this.idNumber = '';
        this.phoneNumber = '';
        this.email = '';
        this.level = '';
        this.position = '';
        this.department = '';
        this.salary = 0;
        this.baseSalary = 500;
    };
    getName(){
        return this.name;
    };
    getBirth() {
        return this.birth;
    }
    getIdNumber(){
        return this.idNumber;
    };
    getPhoneNumber(){
        return this.phoneNumber;
    };
    getEmail(){
        return this.email;
    };
    getLevel(){
        return this.level;
    };
    getPosition(){
        return this.position;
    };
    getDepartment(){
        return this.department;
    };
    getSalary(){
        return this.salary;
    };
    setName(){
        let name = prompt('Please enter name:');
        this.name = name;
    };
    setBirth(){
        let birth;
        do{
            birth = prompt('Please enter birthday (DD/MM/YYYY):');
            if(validateBirthday(birth)){
                return this.birth = birth;
            }else{
                alert('Invalid date format!')
            }
        }while (!validateBirthday(birth));
    };

    setIdNumber(){
        let idnumber;
        do{
            idnumber = prompt('Please enter 9 ID Numbers:');
            if(validateIdNumber(idnumber)){
                return this.idNumber = idnumber;
            }else {
                alert('Invalid id number!');
            }
        }while(!validateIdNumber(idnumber));
    };
    setPhoneNumber(){
        let phonenumber;
        do{
            phonenumber = prompt('Please enter phone number:');
            if(isNum(phonenumber)){
                return this.phoneNumber = phonenumber;
            }else{
                alert('Invalid phone number!');
            }
        }while(!validateIdNumber(phonenumber));
    };
    setEmail(){
        let email;
        do{
            email = prompt('Please enter email(abc@abc.com):');
            if(validateEmail(email)){
                return this.email = email;
            }else{
                alert('Invalid email!')
            }
        }while(!validateEmail(email));
    };
    setLevel(){
        let level = prompt('Please enter level'+'\n'+'(Graduate | University | College | Technical)');
        this.level = level;
    };
    setPosition(){
        let position;
        do{
            position = prompt('Please enter position:'+'\n'+'(Director | Manager | Supervisor | Specialist | Server | Frontdesk)');
            if(validatePosition(position)){
                return this.position = position;
            }else{
                alert('Invalid value!')
            }
        }while(!validatePosition(position));
    };
    setDepartment(){
       let department;
       do{
           department = prompt('Please enter department:'+'\n'+'(Executive | Admin | Server | Sales | Marketing)');
           if(validateDep(department)){
               return this.department = department;
           }else{
               alert('Invalid value');
           }
       }while (!validateDep(department));
    };
    calSalary(){
        let tempSalary = 0;
        if(this.getPosition()==='Manager') {
            tempSalary += 500;
        }
        tempSalary+=(this.getDepartment()==='Sales') ? 300 :(this.getDepartment()==='Marketing') ? 200 : '';
        this.salary = this.baseSalary + tempSalary;
        alert('Salary: '+this.getSalary()+ ' $');
    }
}


function customerMenu() {
    let menu = parseInt(prompt('1. Add new customer'+'\n'
    +'2. Display customer information & payment'+'\n'
    +'3. Edit information customer'+'\n'
    +'4. Delete customer'+'\n'
    +'5. Exit'));
    switch (menu) {
        case 1:
            addCustomer();
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
    }
}

function employeeMenu() {
    let menu = parseInt(prompt('1. Add new employee'+'\n'
    +'2. Display employee information'+'\n'
    +'3. Exit'
     ));
    switch (menu) {
        case 1:
            addEmployee();
            break;
        case 2:
            displayEmployee();
            break;
        case 3:
            alert('Exit');
            break;
    }
}

let newCustomer = new Customer();
function addCustomer() {
    newCustomer.setName();
    newCustomer.setIdNumber();
    newCustomer.setBirth();
    newCustomer.setEmail();
    newCustomer.setAddress();
    newCustomer.setRank();
    newCustomer.setDiscount();
    newCustomer.setGuest();
    newCustomer.setRentDays();
    newCustomer.setTypeOfService();
    newCustomer.setRoomType();
    inforCustomer.push(newCustomer.getName());
    inforCustomer.push(newCustomer.getIdNumber());
    inforCustomer.push(newCustomer.getBirth());
    inforCustomer.push(newCustomer.getEmail());
    inforCustomer.push(newCustomer.getAddress());
    inforCustomer.push(newCustomer.getRank());
    inforCustomer.push(newCustomer.getDiscount());
    inforCustomer.push(newCustomer.getGuest());
    inforCustomer.push(newCustomer.getRentDays());
    inforCustomer.push(newCustomer.getTypeOfServie());
    inforCustomer.push(newCustomer.getRoomType());
    listCustomer.push(inforCustomer);
    inforCustomer = [];
    alert('Done');
    customerMenu();
}
function displayCustomer() {
    let show ='';
    for(let i = 0;i<listCustomer.length;i++){
        show+='<tr>'+'<td>'+i+'</td>';
        for(let j = 0;j<listCustomer[i].length;j++){
            show+='<td>'+listCustomer[i][j]+'</td>';
        }
        show+='<td>'+'<button onclick="newCustomer.totalPayment('+i+')">Price</button>'+'</td>'+'</tr>'
    }
    document.getElementById('showCustomer').innerHTML= show;
}

function editCustomer() {
    if (listCustomer.length === 0) {
        alert('No data');
    } else {
        let sortName = 'Please enter the number to edit:' + '\n';
        for (let i = 0; i < listCustomer.length; i++) {
            sortName += i + '. Name: ' + listCustomer[i][0] + '\n';
        }
        let edit = parseInt(prompt(sortName));
        newCustomer.setName();
        newCustomer.setIdNumber();
        newCustomer.setBirth();
        newCustomer.setEmail();
        newCustomer.setAddress();
        newCustomer.setRank();
        newCustomer.setDiscount();
        newCustomer.setGuest();
        newCustomer.setRentDays();
        newCustomer.setTypeOfService();
        newCustomer.setRoomType();
        inforCustomer.push(newCustomer.getName());
        inforCustomer.push(newCustomer.getIdNumber());
        inforCustomer.push(newCustomer.getBirth());
        inforCustomer.push(newCustomer.getEmail());
        inforCustomer.push(newCustomer.getAddress());
        inforCustomer.push(newCustomer.getRank());
        inforCustomer.push(newCustomer.getDiscount());
        inforCustomer.push(newCustomer.getGuest());
        inforCustomer.push(newCustomer.getRentDays());
        inforCustomer.push(newCustomer.getTypeOfServie());
        inforCustomer.push(newCustomer.getRoomType());
        listCustomer.splice(edit, 1, inforCustomer);
        inforCustomer = [];
        console.log(listCustomer);
        alert('Edited');
        displayCustomer();
    }
}
function deleteCustomer() {
    if (listCustomer.length === 0) {
        alert('No Data');
    } else {
        let sortName = 'Please enter the number to delete:' + '\n';
        for (let i = 0; i < listCustomer.length; i++) {
            sortName += i + '. Name: ' + listCustomer[i][0] + '\n';
        }
        let del = parseInt(prompt(sortName));
        listCustomer.splice(del, 1);
        alert('Deleted');
        displayCustomer();
    }
}
    let newEmployee = new Employee();
    function addEmployee() {
        newEmployee.setName();
        newEmployee.setBirth();
        newEmployee.setIdNumber();
        newEmployee.setPhoneNumber();
        newEmployee.setEmail();
        newEmployee.setLevel();
        newEmployee.setPosition();
        newEmployee.setDepartment();
        inforEmployee.push(newEmployee.getName());
        inforEmployee.push(newEmployee.getBirth());
        inforEmployee.push(newEmployee.getIdNumber());
        inforEmployee.push(newEmployee.getPhoneNumber());
        inforEmployee.push(newEmployee.getEmail());
        inforEmployee.push(newEmployee.getLevel());
        inforEmployee.push(newEmployee.getPosition());
        inforEmployee.push(newEmployee.getDepartment());
        listEmployee.push(inforEmployee);
        inforEmployee = [];
        alert('Done');
        employeeMenu();
    }

    function displayEmployee() {
        let show ='';
        for(let i = 0;i<listEmployee.length;i++){
            show+='<tr>'+'<td>'+i+'</td>';
            for(let j = 0;j<listEmployee[i].length;j++){
                show+='<td>'+listEmployee[i][j]+'</td>';
            }
            show+='<td>'+'<button onclick="newEmployee.calSalary('+i+')">Salary</button>'+'</td>'+'</tr>'
        }
        document.getElementById('showEmployee').innerHTML= show;
    }



function validateIdNumber(x) {
    let regExp = /^\d{9}$/;
    return regExp.test(x)
}
function validateBirthday(x) {
    let regExp = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[1-2])\/((19|20)\d{2})$/;
    return regExp.test(x);
}
function validateEmail(x) {
    let regExp = /^[a-zA-Z0-9]+[a-zA-Z0-9]*@[a-zA-Z0-9]+(\.[a-zA-Z]+)$/;
    return regExp.test(x);
}
function validateTypeOfService(x) {
    let regExp = /^(Villa|House|Room)$/;
    return regExp.test(x);

}
function isNum(x) {
    let regExp = /^\d+$/;
    return regExp.test(x)
}
// function validateLevel(x) {
//     let regExp = /^(Graduate|University|College|Technical)$/;
//     return regExp.test(x);
// }
function validatePosition(x) {
    let regExp = /^(Director|Manager|Supervisor|Specialist|Server|Frontdesk)$/;
    return regExp.test(x);
}
function validateDep(x) {
    let regExp = /^(Executive|Admin|Server|Sales|Marketing)$/;
    return regExp.test(x);
}


