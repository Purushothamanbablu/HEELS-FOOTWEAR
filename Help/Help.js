
document.getElementById("sub").addEventListener("click", (result)=>{
    result.preventDefault();

    let x = document.getElementById("issue").value
    let y = document.getElementById("pass").value

    if(x && y && x !== "none"){
        alert("Success")
    }
    else{
        alert("invaild")
    }

    document.getElementById("issue").value = "none"
    document.getElementById("pass").value = ""

})

