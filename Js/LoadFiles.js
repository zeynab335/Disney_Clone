
// $(function(){
//     $('#Index').load('./Html/Login/Login.html');
// })


var isCreatedAccount = location.search == "?create-account";
if(isCreatedAccount){
    window.addEventListener("load", function(){
        $('#Index').load('./Html/Register/CreateProfile.html');
    });
}


var isCreatedAccount = location.search == "?login";
if(isCreatedAccount){
    window.addEventListener("load", function(){
        $('#Index').load('./Html/Login/Login.html');
    });
}


var homePage = location.search == "";
if(homePage){
    window.addEventListener("load", function(){
        $('#Index').load('./Html/HomePage/HomePage.html');
    });
}
