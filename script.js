// ---javascript code for day/night toggle--=---------------------------------------------------------------------
var icon = document.getElementById("icon")
icon.onclick = function(){
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        icon.src = "./sun.png";
    }else{
        icon.src = "./moon.png";
    }
}
// ----javascript code for preloader-------------------------------------------------------------------------------
let a = document.getElementById("preloader")
window.addEventListener("load", function(){
    setTimeout(() => {
        a.style.display = "none";
    }, 1000);
})
// -----javascript code for forms-------------------------------------------------------------------------------
const form = document.querySelector("form");
const record = document.querySelector(".record");

function load() {
    record.innerHTML = localStorage.getItem("studentdetails") || "";
    attachListeners(); 
}

function save() {
    localStorage.setItem("studentdetails", record.innerHTML);
}

function attachListeners() {
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", function () {
            alert("Your details will be deleted, Are you sure?")
            this.parentElement.parentElement.remove();
            save();
        });
    });

    document.querySelectorAll(".edit-btn").forEach(button => {
        button.addEventListener("click", function () {
            alert("You can edit your details in the form.")
            const row = this.parentElement.parentElement;
            const cells = row.querySelectorAll("td");

            document.getElementById("name").value = cells[0].textContent;
            document.getElementById("id").value = cells[1].textContent;
            document.getElementById("email").value = cells[2].textContent;
            document.getElementById("contact").value = cells[3].textContent;

            row.remove();
            save();
        });
    });
}

form.addEventListener("submit", function (event) {

    let name = document.getElementById("name").value.trim();
    let id = document.getElementById("id").value.trim();
    let email = document.getElementById("email").value.trim();
    let contact = document.getElementById("contact").value.trim();

    if (name === "" || id === "" || email === "" || contact === "") {
        alert("Please fill all the details!");
        return;
    }

    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${name}</td>
        <td>${id}</td>
        <td>${email}</td>
        <td>${contact}</td>
        <td><button class="edit-btn">EDIT</button></td>
        <td><button class="delete-btn">DELETE</button></td>
    `;

    record.appendChild(tr);
    save();
    form.reset();

    attachListeners(); 
});

load();
// ------------------------ js code ends -----------------------------  