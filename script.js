document.getElementById("courseForm")
    .addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let studentId = document.getElementById("studentId").value;
        let course = document.getElementById("course").value;

        document.getElementById("message").innerHTML =
            "Registration Successful!<br>" +
            "Name: " + name + "<br>" +
            "Email: " + email + "<br>" +
            "Student ID: " + studentId + "<br>" +
            "Course: " + course;
    });