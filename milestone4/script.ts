// Get references to the form and display area
const form =document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElemet = document.getElementById('resume-display') as HTMLDivElement;

// Handel form submission
form.addEventListener( 'submit', (event: Event)=>{
    event.preventDefault(); //prevent page reload

    // collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const  email= (document.getElementById('email') as HTMLInputElement).value
    const  Phone= (document.getElementById('Phone') as HTMLInputElement).value
    const  education= (document.getElementById('education') as HTMLInputElement).value
    const  experience= (document.getElementById('experience') as HTMLInputElement).value
    const  skills= (document.getElementById('skills') as HTMLInputElement).value

    // Generate the resume dynamically
    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable=""true">${name}</span></p>
    <p><b>Name:</b><span contenteditable=""true">${email}</span></p>
    <p><b>Name:</b><span contenteditable=""true">${Phone}</span></p>

    <h3>Education</h3>
    <p contenteditable=""true">${education}</p>

    <h3>Experience</h3>
    <p contenteditable=""true">${experience}</p>

    <h3>Skills</h3>
    <p contenteditable=""true">${skills}</p>
    `;
    // display the generated resume

    if(resumeDisplayElemet){
        resumeDisplayElemet.innerHTML = resumeHTML;
    }
    else{
        console.error('the resume display element is missing')
    }
})