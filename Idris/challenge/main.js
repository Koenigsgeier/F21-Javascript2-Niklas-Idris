function atmPayout() {
    let money = document.getElementById("money").value;
    let note = [100, 50, 20, 10, 5];

    let a = 0;
    let numofno = 0;
    if(money % 5 === 0) {
        for(let i = 0; money > 0; i++) {
            if(money >= note[a]) {
                money = money - note[a];
                numofno = numofno + 1;
                if(money < note[a]) {
                    document.getElementById('result').innerHTML += '<div>' + `<img src="images/${a}.png">` + ' X ' + numofno + '</div><br>';
                    a = a + 1;
                    numofno = 0;
                }
            }else {
                a = a + 1;
            }
        }
    } else{
        alert('Please insert multiple of 10€');
    }
};