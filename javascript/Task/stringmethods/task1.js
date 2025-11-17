// #### 1. Username Formatter
// • Goal: Convert a full name into a clean, standardized username. This involves removing
// leading/trailing spaces, converting the name to lowercase, and replacing spaces with
// underscores.
// • Example: " John Doe " → "john_doe"
// • Concepts Used: trim(), toLowerCase(), replace(), split(), join()
// • Difficulty: Easy
// Explanation:
// 1. trim(): Removes whitespace from both ends of a string.
// 2. toLowerCase(): Converts the string to lowercase.
// 3. split(' '): Splits the string into an array of words, using space as the delimiter.
// 4. join('_'): Joins the array elements back into a string, using underscore as the separator.

let name=" SIDHU MOKILE ";
trimname=name.trim();
lowername=trimname.toLowerCase();
splitname=lowername.split(' ');
username=splitname.join('_');
console.log(username);

// #### 2. Email Validator & Extractor
// • Goal: Validate the basic structure of an email address and extract the username and
// domain parts.
// • Example: "vamsi@gmail.com" → Valid ✅ | Username: "vamsi", Domain: "gmail.com"
// • Concepts Used: includes(), endsWith(), split(), slice()
// • Difficulty: Medium
// Explanation:
// 1. includes('@'): Checks if the email contains the "@" symbol.
// 2. endsWith('.com'): Checks if the email ends with ".com" (can be extended for other
// domains).
// 3. split('@'): Splits the email into two parts at the "@" symbol.
// 4. slice(): Can be used to extract specific parts of the username or domain if needed.


email="Sidhumokile@gmail.com";
if(email.includes('@')){

    if(email.endsWith('.com')){
    console.log("valid email  :"+email);

    let split=email.split('@');
    
    let  user=split.slice('')[0];
    let domain=split.slice('')[1];
    console.log("username :"+user);
    console.log("domain :"+domain);
    }
    else {
        console.log("invalid email should contain .com  :"+email)
    }
}
else {
    console.log("invalid should contain @ :"+email)
}


// #### 3. Title Case Converter
// • Goal: Convert any sentence into title case, where the first letter of each word is
// capitalized.
// • Example: "learn javascript in 30 days" → "Learn Javascript In 30 Days"
// • Concepts Used: split(), map(), charAt(), toUpperCase(), slice()
// • Difficulty: Medium
// Explanation:
// 1. split(' '): Splits the sentence into an array of words.
// 2. map(): Iterates over each word in the array.
// 3. charAt(0).toUpperCase(): Converts the first character of the word to uppercase.
// 4. slice(1): Extracts the rest of the word (from the second character onwards).
// 5. Concatenate the uppercase first letter with the rest of the word.
// 6. join(' '): Joins the words back into a sentence.


let text="concatenate the uppercase first letter with the rest of the word."

let splittext=text.split(' ');

let caseword=splittext.map(function(splittext){
    let first = splittext.charAt(0).toUpperCase();
    let remain = splittext.slice(1);

     return first + remain;
});

finaltext=caseword.join(' ');
console.log(finaltext);


// #### 4. Password Strength Checker
// • Goal: Check the validity of a password based on predefined rules, such as minimum
// length, inclusion of a number, and inclusion of a special character.
// • Rules: Min 8 chars, must include number & special character.
// • Concepts Used: length, match(), includes(), toUpperCase(), toLowerCase()
// • Difficulty: Medium
// Explanation:
// 1. length: Checks if the password meets the minimum length requirement.
// 2. match(/[0-9]/): Uses a regular expression to check for the presence of at least one
// number.
// 3. match(/[^a-zA-Z0-9\s]/): Uses a regular expression to check for the presence of at
// least one special character.
// 4. Return true if all conditions are met, false otherwise.


let password="Sidhu@1805"

if(password.length>=8){
    if(password.match([1,2,3,4,5,6,7,8,9,0])){
        if(password.match(['@','_','-','$']))
 console.log("valid password"+password)
        }
       

}

else{
    console.log("invalid password")
}



// #### 5. URL Slug Generator
// • Goal: Create SEO-friendly URLs (slugs) from titles by converting them to lowercase,
// replacing spaces with hyphens, and removing any leading/trailing spaces.
// • Example: "Learn JavaScript in 30 Days" → "learn-javascript-in-30-days"
// • Concepts Used: trim(), toLowerCase(), replaceAll()
// • Difficulty: Easy
// Explanation:
// 1. trim(): Removes whitespace from both ends of the title.
// 2. toLowerCase(): Converts the title to lowercase.
// 3. replaceAll(' ', '-'): Replaces all spaces with hyphens.


let url=" Learn JavaScript in 30 Days ";
trim=url.trim();
lower=trim.toLowerCase();
goal=lower.replaceAll(' ','-');
console.log(goal);



// #### 6. Chat Censorship Tool
// • Goal: Detect and replace banned words in a sentence with asterisks or other
// censoring characters.
// • Example: "This movie is stupid" → "This movie is *****"
// • Concepts Used: replaceAll(), split(), arrays for banned words
// • Difficulty: Medium
// Explanation:
// 1. Create an array of banned words.
// 2. Iterate through the array of banned words.
// 3. For each banned word, use replaceAll() to replace it with a string of asterisks of the
// same length.


let bantext="This movie is stupid and bad";

let ban=["stupid","bad"]

final=bantext;

for(i=0;i<ban.length;i++){
    let result=ban[i];

    let star="*".repeat(result.length);

    final=final.replaceAll(result,star);


}
console.log(final);


// #### 7. Palindromic Sentence Checker
// • Goal: Check if a sentence is a palindrome, ignoring spaces and punctuation.
// • Example: "Was it a car or a cat I saw" → Palindrome ✅
// • Concepts Used: toLowerCase(), replace(), split(), reverse(), join()
// • Difficulty: Medium
// Explanation:
// 1. toLowerCase(): Converts the sentence to lowercase.
// 2. replace(/[^a-z0-9]/g, ''): Removes all non-alphanumeric characters.
// 3. split(''): Splits the sentence into an array of characters.
// 4. reverse(): Reverses the array of characters.
// 5. join(''): Joins the characters back into a string.
// 6. Compare the original cleaned sentence with the reversed sentence.


let sentence="NEVER ODD OR EVEN"

let sentences= sentence.toLowerCase()

console.log(sentences);

let replace=sentences.replace(/[^a-z0-9]/g, '');

console.log(replace);

let split = replace.split('').reverse().join('');

if(replace===split){
    console.log("valid palindrome")
}
else{
    console.log("Invalid")
}


