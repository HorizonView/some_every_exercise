const colors = ['teal', 'cyan', 'peach', 'purple'];

colors.forEach(function(val) {
    console.log(val.toUpperCase());
});

const prices = [30.99, 19.99, 2.5, 99.0];

let total = 0;
prices.forEach(function(price) {
    total += price;
});
console.log(total);

// writing a personalized forEach
// BELOW IS THE 2-STEP METHOD FOR MANUALLY CREATING A FOREACH

function forEach(arr, callbackFunc) {
    for (let i =0; i < arr.length; i++) {
        callbackFunc(arr[i]);
    }
}

forEach(colors, function(color) {
    console.log(color.toUpperCase());
});

//THE BELOW IS HOW TO PROPERLY WRITE A FOREACH 

colors.forEach(function(color, i) {
    console.log(color.toUpperCase(), 'at index of ', i);
});
