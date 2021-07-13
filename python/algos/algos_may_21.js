/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

//1 create a function that loops through the string. 

//2We need to check for _-.
//3We need to replace the -_s with empty "" 

//4Then use the upper() function to capitolize the first letter of each word
//5return the string
function toCamelCase(str){

    for(i = 0; i<str.length; i++){
        if (str[i] == "-" || str[i] == "_"){
            
            str = str.substring(0, [i])+str.charAt(i+1).toUpperCase() +str.substring([i+2], str.length);

        }
        
    }
    return(str)
}
str1="the-stealth-warrior"

console.log(toCamelCase(str1))

