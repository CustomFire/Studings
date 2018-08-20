function valid (form){
    var fatal = false;
    var name = form.name.value;
    var email = form.email.value;
    var pass = form.pass.value;
    var validpass = form.validpass.value
    var state = form.state.value;
    if (name == ""|| name== " ")
        fatal = "Please, input name.";
    else if(email=="")
        fatal = "Please, input email.";
    else if(pass=="")
        fatal = "Please, input password.";
    else if (pass != validpass)
        fatal = "Please, input valid password.";
    else if (state == "")
        fatal = "Chose sex";
    if (fatal)
        alert(fatal);
    else 
        window.location = "https://google.com";
    
}