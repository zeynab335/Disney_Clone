
$(function(){
    $('#Index').load('./Html/Login/Login.html');
    
    // $('#Header').load('./Html/Header.html');
})




var isCreatedAccount = location.search == "?create-account";
if(isCreatedAccount){
    console.log("dd")
    window.addEventListener("load", function(){
        $('#Index').load('./Html/Login/CreateProfile.html');
    });
}


var isCreatedAccount = location.search == "?login";
if(isCreatedAccount){
    console.log("dd")
    window.addEventListener("load", function(){
        $('#Index').load('./Html/Login/Login.html');
    });
}
