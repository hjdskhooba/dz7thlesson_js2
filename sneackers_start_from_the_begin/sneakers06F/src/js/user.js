
let user = {
    login: "",
    email: ""
}

let formRegister = document.querySelector('.register')
let signedUp = document.querySelector('.signedUp')

formRegister.addEventListener('submit', (e)=>{
    let userData = {
        login: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value
    }
    e.preventDefault();
    fetch('http://localhost:8080/users', {
        method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
}).then((res) => {
    if(res.ok){
        alert('You have successfuly created an accaunt')
    }else{
        alert('Error creating account');
    }
    res.json()
}).then((res) => {
    user = {
        ...res.user,
        token: res.accessToken
    }
    localStorage.setItem('user', JSON.stringify(user))
    location.href = 'http://127.0.0.1:5500/sneakers06F/index.html'
    signedUp.textContent = 'Sign in'
})
.catch(() => console.log(err))
})

// let formLogin = document.querySelector('.login')
// formLogin.addEventListener('submit', (e)=>{
//     let userData = {
//         email:e.target[0].value,
//         password:e.target[1].value
//     }
//     e.preventDefault();

//     fetch('http://localhost:8080/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(userData)
//     }).then((res) => {
//         if(res.ok){
//             alert('You have successfully logged in')
//         }else{
//             alert('Error when logging into your account');
//         }
//         res.json()
//     })
//     .then((res) => {
//         user = {
//             ...res.user,
//           token: res.accessToken
//         }
//         localStorage.setItem('user', JSON.stringify(user))
//         location.href = 'http://127.0.0.1:5500/sneakers06F/index.html'
//         signedUp.textContent = 'Profile'
//     })
//     .catch((err)=>alert(err))
// })