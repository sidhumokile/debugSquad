//High order functions and callback & callback hell
console.log("welcome");

const register=(reg)=>{
    setTimeout(()=>{
    console.log("register");
    reg()
},5000

)
}

const login=(log)=>{
    setTimeout(()=>{
        console.log("login");
        log()
    },2000)
}

const thank=()=>{
    setTimeout(()=>{
        console.log("thankyou");

    },3000)
}

register(function(){
    login(function(){     // callback and callback hell 
        thank()
    })
});
// login();
// thank();