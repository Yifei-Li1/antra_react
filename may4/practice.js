//1. Write a JavaScript function that reverse a number.
function reverseNumber(input){
    let res = 0;
    let index = 0;
    const temp=[];
    while(input != 0){
        temp.push(input % 10);  
        input = Math.floor(input/10);
        index++;
    }
    let i = 1;
    for(num of temp){
        res += num * Math.pow(10,index - i);
        i++;
    }
    return res;
}
console.log("-------Question 1-------");
console.log(reverseNumber(123456)); //654321
//2. Write a JavaScript function that checks whether a passed string is palindrome or not?
function checkPalindrome(input){
    
    return input.split('').reverse().join('') === input;
}
console.log("-------Question 2-------");
console.log(checkPalindrome("abcdcba")); //true
//3. Write a JavaScript function that generates all combinations of a string.
function permutation(input){
    res = [];
    input = input.split('');
    for(let i = 0;i < input.length;i++){
        for(let j = i + 1;j <= input.length;j++){
            res.push(input.slice(i,j));
        }
    }
    return res;
}
console.log("-------Question 3-------");
console.log(permutation("dog")); //d,d,o,d,o,g,o,o,g,g
//4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
function alphabetical(input){
    const dict = [];
    for(let i = 0;i < 26;i++){
        dict.push(0);
    }
    const arr = input.split('');
    for(char of arr){
        dict[char.charCodeAt(0) - 97] ++;
    }
    let stringBuilder = [];
    //console.log(dict);
    //construct the sentence from dict
    for(let i  = 0;i < dict.length;i++){
        if(dict[i] !== 0){
            for(let j = 0;j < dict[i];j++){
                stringBuilder.push(String.fromCharCode(i + 97));
            }
        }
    }
    return stringBuilder.join('');
    
}
console.log("-------Question 4-------");
console.log(alphabetical("webmaster")); //abeemrstw
//5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string
//in upper case.
function convertFirstLetter(input){
    const words = input.split(" ");
    const res = [];
    //words.forEach((a)=>a.charAt(0).toUpperCase());
    for(word of words){
        res.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
     
    return res.join(" ");
}
console.log("-------Question 5-------");
console.log(convertFirstLetter("this is a sentence"));//This Is A Sentence
//6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function longestWord(input){
    let longest = "";
    const words = input.split(" ");
    for(word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}
console.log("-------Question 6-------");
console.log(longestWord("I move to jersey city"));//jersey
//7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function countVowel(input){
    let res = 0;
    let arr = input.split("");
    const vewels =['a','e','i','o','u']
    for(char of arr){
        for(v of vewels){
            
            if(char === v){
                
                res++;
            }
        }
    }
    return res;

}
console.log("-------Question 7-------");
console.log(countVowel('The quick brown fox'));//5
//8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
function checkPrime(input){
    
    for(let i  = 2;i < input/2;i++){
        if(input % i === 0){
            return false;
        }
    }
    return true;
}
console.log("-------Question 8-------");
console.log(checkPrime(17));//true
//9. Write a JavaScript function which accepts an argument and returns the type.
function type(input){
    return typeof(input);
}
console.log("-------Question 9-------");
console.log(type({}));//object
//10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function matrix(input){
    
    const matrix = [];
    for(let i = 0;i < input;i++){
        let newRow = [];
        matrix.push(newRow);
        for(let j = 0;j < input;j++){
            
            if(i === j){
                newRow.push(1);
            }
            else{
                newRow.push(0);
            }
            
            
        }
        
    }
    return matrix;
}
console.log("-------Question 10-------");
console.log(matrix(5)); 
console.log(matrix(7)); 
//11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second
//greatest numbers, respectively
function secondLowGreat(input){
    input.sort((a,b)=> a - b);
    const unique = [input[0]];
    const res = [];
    for(let i = 1;i < input.length;i++){
        if(input[i] !== input[i - 1]){
            unique.push(input[i]);
        }
    }
    res.push(unique[1],unique[unique.length - 2]);
    return res.join(',');
    
}
console.log("-------Question 11-------");
console.log(secondLowGreat([223,21,42,29,1]));
//12. Write a JavaScript function which says whether a number is perfect.
function perfectNumber(input){
    const divisor = [];
    divisor.push(1);
    for(let i = 2;i < input;i++){
        if(input % i === 0){
            divisor.push(i);
        }
    }
    let res = 0;
    for(num of divisor){
        //console.log(num);
        res += num;
    }
    return res === input;
}
console.log("-------Question 12-------");
console.log(perfectNumber(496));
//13. Write a JavaScript function to compute the factors of a positive integer.
function findFactor(input){
    const res = [];
    for(let i = 1;i <= Math.floor(Math.sqrt(input));i++){
        if(input % i === 0){
            res.push(i);
            if(input/i !== i){
                res.push(input/i);
            }
        }
    }
    res.sort((a,b)=>a - b);
    return res;
}
console.log("-------Question 13-------");
console.log(findFactor(16))//1,2,4,8,16
//14. Write a JavaScript function to convert an amount to coins.
function amountTocoins(amount,coins){
    const res = [];
    while(amount > 0){
        for(coin of coins){
            let times = amount / coin;
            if(times >= 1){
                for(let i = 1;i <= times;i++){
                    res.push(coin);
                }
            }
            amount = amount % coin;
        }
    }
    return res;
}
console.log("-------Question 14-------");
console.log(amountTocoins(46, [25, 10, 5, 2, 1])); //[ 25, 10, 10, 1 ]
//15.Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n
//from the user and display the result.
function exp(b,n){
    if(n === 0){
        return 1;
    }
    let res = 1;
    for(let i = 1;i <= n;i++){
        res = b * res;
    }
    return res;
}
console.log("-------Question 15-------");
console.log(exp(2,4));// 16
console.log(exp(4,10)); // 1048576
//16. Write a JavaScript function to extract unique characters from a string.
function uniqueChar(input){
    let dict = new Array(26).fill(0);
    let res = [];
    for(let i = 0;i < input.length;i++){
        
        if(dict[input.charCodeAt(i) - 97] > 0){
        }
        else{
            res.push(input.charAt(i));
            dict[input.charCodeAt(i) - 97] ++;
        }
        
    }
    return res.join("");
}
console.log("-------Question 16-------");
console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog")); //thequickbrownfxjmpsvlazydg
//17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
function letterOccurrence(input){
    const map = new Map();
    input = input.split('');
    for(char of input){
        if(char !== " "){
            if(map.has(char)){
                map.set(char,map.get(char) + 1);
            }
            else{
                map.set(char,1);
            }
        }
        
    }
    return map;
}
console.log("-------Question 17-------");
console.log(letterOccurrence("The quick brown fox jumps over the lazy dog"));
//18. Write a function for searching JavaScript arrays with a binary search.
function binarySearch(input,target){
    input.sort((a,b) => a - b);
    let left = 0,right = input.length,mid;
    
    while(left < right){
        //console.log("left: "+left+"right: "+right+"mid: "+mid);
        mid = Math.floor((left + right) / 2);
        if(input[mid] === target){
            return true;
        }
        else{
            if(input[mid] < target){
                left = mid + 1;
            }
            else{
                right = mid;
            }
        }
    }
    return false;
}
console.log("-------Question 18-------");
console.log(binarySearch([1,3,4,5,6,7,8,9],2)); // false
console.log(binarySearch([1,2,3,4,5,6,7,8,9],2)); // true
//19. Write a JavaScript function that returns array elements larger than a number.
function findMax(input){
    let res = input[0];
    for(num of input){
        if(num > res){
            res = num;
        }
    }
    return res;
}
console.log("-------Question 19-------");
console.log(findMax([1,9,3,2,10,23,3,4]));
//20.Write a JavaScript function that generates a string id (specified length) of random characters.
function generateString(characters,length) {
    let result = '';
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}
console.log("-------Question 20-------");
console.log(generateString('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',5));
//21.Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
function subSet(input,length){
    const res = [];
    for(let i = 0;i < input.length;i++){
        const current = [];
        current.push(input[i]);
        let newInput = [...input];
        newInput.splice(i,1);
        recursion(newInput,current,res,length);
    }
    function recursion(input,current,res,length){
        if(current.length === length && !res.includes(current)){
            res.push(current);
            return;
        }
        else{
            for(let j = 0;j < input.length;j++){
                const newCopy = [...current];
                newCopy.push(input[j]);
                let newInput = [...input];
                newInput.splice(j,1)
                recursion(newInput,newCopy,res,length);
            }
        }
    }
    return res;
}
console.log("-------Question 21-------");
console.log(subSet([1,2,3],2));
console.log(subSet([1,2,3,4,5],3));
//22.Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number
//of occurrences of the specified letter within the string
function numberOccurrence(input,target){
    let res = 0;
    for(let i = 0;i < input.length;i++){
        if(input.charAt(i) === target){
            res ++;
        }
    }
    return res;
}
console.log("-------Question 22-------");
console.log(numberOccurrence('microsoft.com', 'm'));//2
console.log(numberOccurrence('microsoft.com', 'o'));//3
//23. Write a JavaScript function to find the first not repeated character.
function firstNonRepeated(input){
    const seq =  [];
    const map = new Map();
    input = input.split('');
    for(char of input){
        seq.push(char);
        if(map.has(char)){
            map.set(char,map.get(char) + 1);
        }
        else{
            map.set(char,1);
        }
    }
    for(char of seq){
        if(map.get(char) === 1){
            return char;
        }
    }
    return "not exist";
}
console.log("-------Question 23-------");
console.log(firstNonRepeated("abacddbec"));//e
console.log(firstNonRepeated("jfoailcjvnxzjkjfoaif"));//l
//24. Write a JavaScript function to apply Bubble Sort algorithm.
function bubbleSort(arr) {
  
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}
console.log("-------Question 24-------");
console.log(bubbleSort([38,12,49,11,49,20]));//[ 11, 12, 20, 38, 49, 49 ]
//25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as
//output.
function longestName(input){
    let longest = input[0];
    for(name of input){
        if(name.length > longest.length){
            longest = name;
        }
    }
    return longest;
}
console.log("-------Question 25-------");
console.log(longestName(["Australia", "Germany", "United States of America"]))//United States of America
//26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
function longestSubstring(s){
    if(s.length <= 1){
        return s.length;
    }
    let longest = 0;
    let left = 0;
    let right = 0;
    let temp =[];
    let res = [];
    const set = new Set();
    while(right < s.length){
        if(!set.has(s.charAt(right))){
            set.add(s.charAt(right));
            temp.push(s.charAt(right));
            right++;
            
            
        }
        else{
            set.delete(s.charAt(left));
            let index = s.indexOf(s.charAt(left));
            temp.splice(0,1);
            left++;
            
        }
        if(right - left > longest){
            longest = right - left;
            res = [...temp];
        }

    }
    return res.join('');
}
console.log("-------Question 26-------");
console.log(longestSubstring("abacddbec")); //bacd
console.log(longestSubstring("abcabcbb")); //abc
console.log(longestSubstring("bbbbbb")); //b
//27. Write a JavaScript function that returns the longest palindrome in a given string.
function longestPalindrome(input){
    input.split('');
    let left = 0;
    let right = 0;
    let longest = [0,0];
    
    for(let i = 0;i < input.length - 1;i++){
        left = i;
        right = i;
        for(let j = 1;i + j < input.length && i - j >=  0;j++){
            
            if(input[i + j] === input[i - j]){
                left --;
                right++;
            }
            else{
                break;
            }
        }
        if(right - left > longest[1] - longest[0]){
            longest[0] = left;
            longest[1] = right;
        }
        if(input[i] === input[i + 1]){  //even number
            left = i;
            right = i + 1;
            for(let j = 1;i + 1 + j < input.length && i - j >=  0;j++){
                if(input[i + 1 + j] === input[i - j]){
                    left --;
                    right++;
                }
            }
            if(right - left > longest[1] - longest[0]){
                longest[0] = left;
                longest[1] = right;
            }
        }
        
    }
    let res = [];
    for(let i = longest[0];i <= longest[1];i++){
        res.push(input[i]);
    }
    return res.join('');
}
console.log("-------Question 27-------");
console.log(longestPalindrome("bananas")); //anana
console.log(longestPalindrome("babad")); //bab
console.log(longestPalindrome("cbbd"));  //bb
console.log(longestPalindrome("abracadabra"));//aca
//28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function modify(a,callBack){
    return callBack(a);
}
console.log("-------Question 28-------");
console.log(modify(1,a=>a * 2));
//29. Write a JavaScript function to get the function name.
function functionName(input){
    return input.name;
};
console.log("-------Question 29-------");
console.log(functionName(functionName));


