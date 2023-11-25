const d_name = document.getElementById("name");
const doctor_id = document.getElementById("namdoctor_ide");
const Specialization = document.getElementById("Specialization");
const experience = document.getElementById("experience");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const submit = document.getElementById('submit-btn');
submit.addEventListener('click' , () => {
    console.log(d_name.value , doctor_id.value , Specialization.value , experience.value ,mobile.value);
})
