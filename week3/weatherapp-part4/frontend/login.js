// Insert your code here
// inscription 
document.querySelector('#register').addEventListener('click', function() {
    const user = {
        name: document.querySelector("#registerName").value,
        email: document.querySelector("#registerEmail").value,
        password: document.querySelector("#registerPassword").value,
    }; 

    fetch("http://localhost:3000/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),

    })
    .then(response => response.json())
    .then(data => {
        if(data.result) {
            window.location.assign("index.html");
        }
    })
});

// connection 

document.querySelector("#connection").addEventListener("click", function() {
    const user = {
        email: document.querySelector("#connectionEmail").value,
        password: document.querySelector("#connectionPassword").value,
    };

    fetch("http://localhost:3000/users/signin"), {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(user),
    }
    .then(response => response.json())
    .then(data => {
        if (data.result) {
            window.location.assign("index.html")
        }
    })
})