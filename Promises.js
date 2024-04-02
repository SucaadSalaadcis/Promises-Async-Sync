
// Balan = balanti in lafuliyo ama lafulinin
let myPrimises = new Promise((success, error)=> {
    const x = 0
    if(x==0){
        success("True");
    }else {
        error("False")
    }
}).then(
    (resolved) => console.log(resolved),
    (rejected) => console.log(rejected)
);
