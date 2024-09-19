function displayRow(){
    const TABLE = document.getElementById("studentList");
    let row = ""; // Create a variable to store the row

    for (let i = 0; i < students.length; i++){
        let student = students[i];
        row +=`
            <tr>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.gender}</td>
                <td>${student.email}@uabc.edu.mx</td>
                <td>${student.grade1}</td>
                <td>${student.grade2}</td>
                <td>${student.grade3}</td>
                <td>${student.gpa}</td>

                <td>
                    <button onclick = "removeElement(${i})" type="button" class="btn-close" aria-label="Delete"></button>
                </td>

            </tr>
        `;
    }

    TABLE.innerHTML = row; // Insert the row in the table
    displayTotal();
}

function removeElement(i){
    students.splice(i,1);

    displayRow();
}

function displayTotal(){
    document.getElementById("total").textContent = students.length;
}