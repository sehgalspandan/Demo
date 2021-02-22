console.log("Script.js is running properly")//Testing the script


emmet.require('textarea').setup({
	pretty_break: true, // enable formatted line breaks (when inserting 
			            // between opening and closing tag) 
	use_tab: true       // expand abbreviations by Tab key
});

let form = document.getElementById("form")



function register() {
    let username= document.getElementById("username").value
    
    let email= document.getElementById("email").value

    let password= document.getElementById("password").value
    
    let name =  document.getElementById("name").value

    let lastname =  document.getElementById("name2").value
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
    })
    console.log(Users)
    let Users={username,email,password,name,lastname}
    localStorage.setItem(Users,null)
    

    
    
    
        
    }