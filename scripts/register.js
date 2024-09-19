const inputName = document.getElementById('txtName');
const inputAge = document.getElementById('txtAge');
const inputGender = document.getElementById('txtGender');
const inputEmail = document.getElementById('txtEmail');
const inputGrade1 = document.getElementById('txtGrade1');
const inputGrade2 = document.getElementById('txtGrade2');
const inputGrade3 = document.getElementById('txtGrade3');
const registerBtn = document.getElementById('btnRegister');
let students = [];

// Object literal
let school = {
    name: "FCITEC",
    address: {
        street: "No name",
        number: "123456789"
    },
    hour: {
        open: "08:00",
        close: "17:00"
    }
}

// Object constructor
function Student(name, age, gender, email, grade1, grade2, grade3){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
    this.grade1 = grade1;
    this.grade2 = grade2;
    this.grade3 = grade3;
    this.gpa = (Number (grade1) + Number (grade2) + Number (grade3)) / 3;
}

function register(){
    // Create new student
    if (inputName.value === '' || inputAge.value === '' || inputGender.value === '' || inputGrade1.value === ''
        || inputEmail.value === '' || inputGrade2.value === '' || inputGrade3.value === ''){
        alert("You must fill all black spaces");
    }
    else{
        let newStudent = new Student(inputName.value, inputAge.value, inputGender.value, inputEmail.value, inputGrade1.value, inputGrade2.value, inputGrade3.value);
        students.push(newStudent);
        console.log(students);
        displayRow();
    }
}

function init(){
    // Hook events
    registerBtn.addEventListener('click', register);

    // Default students
    let student1 = new Student("Test1", 20, "Man", "test1", 8, 9, 7);
    let student2 = new Student("Test2", 22, "Woman", "test2", 7, 8, 9);
    students.push(student1, student2);
    displayRow();
    console.log(students);
}

window.onload = init; // Wait to render the HTML