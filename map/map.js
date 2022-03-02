const numbers = [21, 37, 64, 99, 142];

const negatives = numbers.map(function(num){
   return num * -1;
});

// BELOW DOES NOT RETURN A VALUE, SO IT DOES NOT CREATE A NEW ARRAY
// const doubles = numbers.map(function(num){
//     console.log(num * 2);
// });

const todos = [
    {
        id: 1,
        text: 'walk the dog',
        priority: 'high'
    },
    {
        id: 2,
        text: 'walk the chickens',
        priority: 'low'
    },
    {
        id: 3,
        text: 'feed the cats',
        priority: 'medium'
    },
    {
        id: 4,
        text: 'yell at walkers',
        priority: 'very high'
    }
]

const todoText = todos.map(function(todo) {
    return todo.text;
});

//USING DOM TO PULL ITEMS FROM HTML INTO MAP
const links = Array.from(document.querySelectorAll('a'));
const urls = links.map(function(a){
    return a.href;
});

//WRITING MAP MANUALLY  

const colors = [2, 4, 6, 8];

function myMap(arr, callback){
    const mappedArray = [];
    for(let i = 0; i < arr.length; i++){
        const val = callback(arr[i], i, arr);
        mappedArray.push(val);
    }
    return mappedArray;
};

const priorityMap = myMap(todos, function(todo){
    return todo.priority;
}); 

let test = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

function addKeyAndValue(arr,key,value){
    return arr.map(function(val){
        val[key] = value;
        return val;
    });
}

function vowelCount(str){
    let newObj = {};
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let counter= 0;
    for (let v of str.toLowerCase()){
        if(vowels.includes(v) && !newObj[v]){
            counter++;
            newObj[v] = counter;
            counter = 0;
        } else if (vowels.includes(v) && newObj[v]){
            counter++;
            newObj[v] += counter;
            counter = 0;
        }
    }
    return newObj;
}

function valTimesIndex(arr){
    return arr.map(function(val){
        let mult = arr.indexOf(val);
        console.log(mult);
        return val * mult;
    })
}

function extractKey(arr, key){
    return arr.map(function(k){
        return k[key];
    })
}

const names = [
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia"}, 
    {first: 'Matt', last:"Lane"}, 
    {first: 'Colt', last:"Steele"}
];

function extractFullName(arr){
    return arr.map(function(k){
        return k.first + ' ' + k.last;
    })
}

const cats = [
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true}, 
    {first: 'Matt', last:"Lane"}, 
    {first: 'Colt', last:"Steele", isCatOwner: true}
];

function filterByValue(arr, key) {
    return arr.filter(function(cat){
       return cat[key];
    })
}

function find(arr, searchValue) {
    let counter = 0;
    let length = arr.length - 1;
    for(let num of arr){
        counter++;
        if(num === searchValue){
            return num;
        } else if (counter === length) {
            return undefined;
        }
    }
}

// Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

function findInObj(arr, key, searchValue) {
    for (let obj of arr){
        if(obj[key] === searchValue){
            return obj;
        }
    }
}

// /*
// Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

// Examples:
//     removeVowels('Elie') // ('l')
//     removeVowels('TIM') // ('tm')
//     removeVowels('ZZZZZZ') // ('zzzzzz')
// */

let vowels = ['a', 'e', 'i', 'o', 'u'];

function removeVowels(str) {
    let newStr = '';
    for (let v of str.toLowerCase()){
        if(!vowels.includes(v)){
            newStr+= v;
        }
    }
    return newStr;
}

function doubleOddNumbers(arr) {
    return arr.filter(function(odd){
        return odd % 2 != 0;
    }).map(function(dub){
        return dub * 2;
    })
}