/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

function hasOddNumber(arr) {
    return arr.some(function(value){
        return (value % 2) === 1
    })
}

/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/



function hasAZero(num) {
    let number = num.toString().split('')
  return number.some(function(value){
     return value === '0';
    })

  };




/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

//How come I have to return the boolean and the function? Why Do I need two return statements?

function hasOnlyOddNumbers(arr) {
  return arr.every(function(value){
       return (value % 2) === 1
    })

};

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

/* Hardest one for me personally. Had to use inspiration from stack overflow. This works because:

- .indexOf returns the first occurence of that value
- so the first occurence will of course pass
- but if we then get the duplicate in the array, .indexOf will show the index of the first occurence but the idnex we're on in the array of the value we are using WILL NOT MATCH!

Not sure who the author is but you can find the top answer on this page. Credits to them!

https://stackoverflow.com/questions/49215358/checking-for-duplicate-strings-in-javascript-array

*/

function hasNoDuplicates(arr) {

   return arr.every(function(value, index){
   return arr.indexOf(value) === index
});
}

/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/



function hasCertainKey(arr, key) {
    return arr.every(function(object) {
       return object[key]
    })
}


/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/


function hasCertainValue(arr, key, searchValue) {
   return arr.every(function(objValue){
        return objValue[key] === searchValue
    })
};
