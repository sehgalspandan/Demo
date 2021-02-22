//Checking if its connected or not
console.log("Connected");






//Register function
function Register() {
    let username= document.getElementById("Username").value
    
    let email= document.getElementById("Email").value

    let password= document.getElementById("Password").value
    
    let Users={username,email,password}
    let form = document.getElementById("My_form")
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
    })
    console.log(Users)
    localStorage.setItem(username,email,password)
    
    
        
    }
    

