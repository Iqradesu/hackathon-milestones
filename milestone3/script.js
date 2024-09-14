// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElemet = document.getElementById('resume-display');
// Handel form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    // collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var Phone = document.getElementById('Phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Name:</b>").concat(email, "</p>\n    <p><b>Name:</b>").concat(Phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    // display the generated resume
    if (resumeDisplayElemet) {
        resumeDisplayElemet.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display element is missing');
    }
});
