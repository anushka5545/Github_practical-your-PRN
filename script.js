
let students = JSON.parse(
    localStorage.getItem("students")
) || [];

const form = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");
const search = document.getElementById("search");

function saveStudents() {
    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );
}

function displayStudents(data = students) {
    studentList.innerHTML = "";

    data.forEach((student) => {
        let row = document.createElement("tr");

        [student.name, student.prn,
         student.email, student.course].forEach(value => {
            let cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        let actionCell = document.createElement("td");
        let deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        deleteButton.onclick = () => {
            students = students.filter(
                s => s.prn !== student.prn
            );

            saveStudents();
            displayStudents();
        };

        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);

        studentList.appendChild(row);
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const student = {
        name: document.getElementById("name").value.trim(),
        prn: document.getElementById("prn").value.trim(),
        email: document.getElementById("email").value.trim(),
        course: document.getElementById("course").value.trim()
    };

    if (students.some(s => s.prn === student.prn)) {
        alert("This PRN already exists!");
        return;
    }

    students.push(student);

    saveStudents();
    displayStudents();

    form.reset();

    alert("Student added successfully!");
});

search.addEventListener("input", function() {
    const keyword = search.value.toLowerCase();

    const filtered = students.filter(student =>
        student.name.toLowerCase().includes(keyword) ||
        student.prn.toLowerCase().includes(keyword)
    );

    displayStudents(filtered);
});

displayStudents();
