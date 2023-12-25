document.addEventListener("DOMContentLoaded", function () {
    // Initialize users array with data from local storage or an empty array
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const addBtn = document.getElementById("adduser");
    const fullNameInput = document.getElementById("username");
    const numberInput = document.getElementById("usernumber");
    const tableBody = document.querySelector("tbody");

    // Display existing users on page load
    displayUsers();

    addBtn.addEventListener("click", addUser);

    function addUser() {
        const fullName = fullNameInput.value;
        const number = numberInput.value;

        if (fullName && number) {
            const user = {
                fullName,
                number,
            };

            users.push(user);

            // Save users array to local storage
            localStorage.setItem("users", JSON.stringify(users));

            displayUsers();
            clearInputs();
        }
    }

    function displayUsers() {
        // Clear the existing table rows
        tableBody.innerHTML = "";

        // Populate the table with user data
        users.forEach((user, index) => {
            const row = tableBody.insertRow();
            const cellNo = row.insertCell(0);
            const cellFullName = row.insertCell(1);
            const cellNumber = row.insertCell(2);
            const cellEditRemove = row.insertCell(3);

            cellNo.textContent = index + 1;
            cellFullName.textContent = user.fullName;
            cellNumber.textContent = user.number;

            // Edit and Remove buttons
            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.addEventListener("click", () => editUser(index));

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", () => removeUser(index));

            cellEditRemove.appendChild(editButton);
            cellEditRemove.appendChild(removeButton);
        });
    }

    function editUser(index) {
        const user = users[index];
        fullNameInput.value = user.fullName;
        numberInput.value = user.number;

        // Remove the user from the array
        users.splice(index, 1);

        // Save users array to local storage
        localStorage.setItem("users", JSON.stringify(users));

        // Display the updated list
        displayUsers();
    }

    function removeUser(index) {
        // Remove the user from the array
        users.splice(index, 1);

        // Save users array to local storage
        localStorage.setItem("users", JSON.stringify(users));

        // Display the updated list
        displayUsers();
    }

    function clearInputs() {
        fullNameInput.value = "";
        numberInput.value = "";
    }
});



