
function displayDetails() {
    let name = document.getElementById("name").value.trim();
    let prn = document.getElementById("prn").value.trim();
    let branch = document.getElementById("branch").value.trim();

    if (name === "" || prn === "" || branch === "") {
        alert("Please fill all the details!");
        return;
    }

    document.getElementById("studentName").innerText =
        "Name: " + name;

    document.getElementById("studentPRN").innerText =
        "PRN: " + prn;

    document.getElementById("studentBranch").innerText =
        "Branch: " + branch;

    document.getElementById("result").style.display = "block";
}
