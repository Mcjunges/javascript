function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *=c
    }
    return fat
}


//Coloque o dado abaixo.
console.log(fatorial(5))