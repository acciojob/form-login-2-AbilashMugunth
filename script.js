//your JS code here. If required.

let firstName = document.getElementById('firstname')
let lastName = document.getElementById('lastname')
let mobile = document.getElementById('mobile')
let mail = document.getElementById('mail')
let form = document.getElementById('form')

form.addEventListener('submit',()=>{
	
alert(`
First Name : ${firstName.value}
Last Name : ${lastName.value}
Phone Number :${mobile.value}
Email ID : ${mail.value}`
	 )})