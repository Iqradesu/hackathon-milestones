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
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"\"true\">".concat(name, "</span></p>\n    <p><b>Name:</b><span contenteditable=\"\"true\">").concat(email, "</span></p>\n    <p><b>Name:</b><span contenteditable=\"\"true\">").concat(Phone, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"\"true\">").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p contenteditable=\"\"true\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"\"true\">").concat(skills, "</p>\n    ");
    // display the generated resume
    if (resumeDisplayElemet) {
        resumeDisplayElemet.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display element is missing');
    }
});
