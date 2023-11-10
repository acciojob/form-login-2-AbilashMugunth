//your JS code here. If required.

let firstName = document.getElementById('First Name')
let lastName = document.getElementById('Last Name')
let mobile = document.getElementById('Phone Number')
let mail = document.getElementById('Email ID')
let form = document.getElementById('form')

form.addEventListener('submit',()=>{
	
alert(`
First Name : ${firstName.value}
Last Name : ${lastName.value}
Phone Number :${mobile.value}
Email ID : ${mail.value}`
	 )})