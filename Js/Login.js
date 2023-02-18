
var Login = document.getElementById("add-new-account");

if(Login){
    Login.onclick = function(){
        location.href = "/Index.html?create-account";
    }
}

document.getElementById('logo').addEventListener('click' ,function(){
    location.href = "/Index.html";

})

// let usr       = localStorage.getItem('username');
let Accounts = localStorage.getItem('Accounts');

AllAccounts = JSON.parse(Accounts);
console.log(AllAccounts)

if(AllAccounts){
    AllAccounts.forEach(Account => {
        document.querySelector('.isLoggedAccount').innerHTML += 
            `
                <div class="d-flex flex-column mx-5">
                    <img src="${Account["imgSrc"]}" alt="" class="Account-Icon">
                    <span class="text-center pt-5 fs-4">${Account["usrname"]}</span>
                </div>
            `
    });
    
    

}


// res = fetch("https://api.disneyapi.dev/characters")
// res.then(
//     e=> e.json()
// ).then(d => console.log(d.data))
// console.log()
