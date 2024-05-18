//==========QUESTION
//============74
function swapeValues () {
    let a = 5,  //INITIAL a = value is 5;
    b = 10;    //INITIAL b = value is 10;
    console.log('\nBefore Swape: a =', a, 'b =', b);

    let temp = a;
    a = b;
    b = temp
    console.log('\nAfter Swape: a =', a, 'b =', b);
}

swapeValues();