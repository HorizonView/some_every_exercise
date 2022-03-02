const words = [
    'sdfhjkashdjfhjasdfjahsdfhasdhfhjkas',
    'then',
    'ajsdkfhasdhfuhashdufihasjdnfjasdifiu',
    'bird',
    'jsdfhiuasdvhjsnjvnjnjjhaisfyskjdf',
    'and'
];

//USING A FILTER TO CREATE A NEW ARRAY WITH WORDS OVER 10 CHARACTERS
const longWords = words.filter(function(word){
    // BELOW IS A BOOLEAN BUILT INTO FILTER
    return word.length >= 10;
});

//USING FILTER TO SEE IF WORDS BEGIN WITH SAME LETTER
const startWith = words.filter(function(s){
    return s[0] === 'a' || s[0] === 't';
});


// USING FILTER TO FIND WORDS WITHIN WORDS
const wordIn = words.filter(function(text){
    return text.includes('hen');
});

//MAP + FILTER

const colors = ['blue', 'yellow', 'green', 'red'];

function showFirstAndLast(arr){
    return arr.map(function(FL){
        let last = FL.length - 1;
        let first = FL[0];
        let lastL = FL[last];
        return `${first}${lastL}`;
    });
}