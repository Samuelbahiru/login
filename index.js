const user = document.getElementById('username');
user.addEventListener('keyup', function(){
    // console.log('hello');

if(user.value.length == 0 || user.value.length<6)
{user.style.border = '2px solid red';
return false; 
}else {
 user.style.border='3px solid green';
}
})

const pass= document.getElementById('password');
pass.addEventListener('keyup', function(){
if(pass.value.length ==0 || pass.value.length<8)
{pass.style.border = '2px solid red';
return false; 
}else {
 pass.style.border='3px solid green';
}
})

function validate()
{
if(user.value.length = 0 || user.value.length <6){
alert("Enter the username correct value!");

} else if(pass.value = 0 || pass.value.length<8){
    alert("Enter the password correct value!");
} else{
    alert('succesfully logged in');
}

}