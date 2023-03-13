// Chap # 21 to 25

// Question #01
// var firstName = window.prompt("Enter your first name.");
// var lastName = window.prompt("Enter your last name.");
// var fullName = firstName + lastName;
// alert("Hello, " + fullName);

// Question #02
// var phone = window.prompt("Enter your favourite phone model.");
// console.log("Your favoutire phone is: " + phone);
// console.log("Length of a string is: " + phone.length);

// Question #03
// var string = "Pakistani";
// console.log("String: " + string);
// console.log("Index of 'n' is: " + string.indexOf("n"));

// Question #04
// var string = "Hello World";
// console.log("String: " + string);
// console.log("Last index of 'l' is : " + string.lastIndexOf("l"));

// Question #05
// var string = "Pakistani";
// console.log("String: " + string);
// console.log("Charector at 3 index is: " + string.charAt(3));

// Question #06
// var firstName = window.prompt("Enter your first name.");
// var lastName = window.prompt("Enter your last name.");
// var fullName  = firstName.concat(lastName);
// alert("Hello, " + fullName);

// Question #07
// var city = "Hyderabad";
// console.log("City: " + city)
// console.log("After replacement: "+city.replace("Hyder", "Islam"))

// Question #08
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// console.log(message.replaceAll("and","&"));

// Question #09
// var num = "472";
// console.log("Value: "+num);
// console.log("Type: "+typeof(num))
// console.log("Value: " + parseInt(num));
// console.log("Type: " + typeof(parseInt(num)))

// Question #10
// var dryFruit = window.prompt("Enter any dry fruit");
// console.log("User input: " + dryFruit);
// var upperDryFruit = dryFruit.toUpperCase();
// console.log("Upper case: " + upperDryFruit);

// Question #11
// var input = window.prompt("Enter anything");
// console.log("User input: "+input);
// var firstAlpha = input.slice(0,1).toUpperCase();
// var restAlpha = input.slice(1);
// var result = firstAlpha +  restAlpha;
// console.log("Title case:  "+result);

// Question #12
// var num = 36.35;
// var string = num.toString();
// console.log(string.replace(".", ""))

// Question #13
// var userName = prompt('Enter username');
// var ha ="";
// for(var i = 0; i < userName.length; i++){
//     if(userName[i] === "@" ||userName[i] === "." ||userName[i] === "," ||userName[i] === "!"){
//         ha = true;
//     }
// }
// if(ha == true){
//     alert("Enter valid username")
// }
// else{
//     console.log("Hello, " + userName)   
// } 

// Question #14
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"]
// var input = prompt("Enter an Item");
// var item = input.toLowerCase()
// var ha ="";
// for(var i = 0;i < arr.length; i++){
//     if(arr[i] == item){
//         ha = true
//     }
// }

// if(ha == true){
//     console.log(item + " is available at index " + arr.indexOf(item) + " in our bakery.")
// }
// else{
//     console.log("we are sorry " + item + " is not available in our bakery.")
// }

// Question #15
// var password = prompt("Enter password");
// var alphabetMila = false;
// var numberMila = false;

// if (password[0].charCodeAt() <= 57 && password[0].charCodeAt() >= 48) {
//     console.log("Enter password is: " + password)
//     console.log("Password cannot begin with numbers")
// }
// else {
//     for (var i = 0; i < password.length; i++) {
//         if (password[i].charCodeAt() >= 65 && password[i].charCodeAt() <= 90 || password[i].charCodeAt() >= 97 && password[i].charCodeAt() <= 122) {
//             alphabetMila = true;
//         }
//     }
//     for (var j = 1; j < password.length; j++) {
//         if (password[j].charCodeAt() >= 49 && password[j].charCodeAt() <= 57) {
//             numberMila = true;
//         }
//     }
//     if (alphabetMila == true && numberMila == true) {
//         if (password.length >= 6) {
//             console.log("Enter password is: " + password);
//             console.log("Welcome");
//         }
//         else {
//             console.log("Enter password is: " + password);
//             console.log("Password should be at least six charectors.");
//         }
//     }

//     else if (alphabetMila == false) {
//         console.log("Enter password is: " + password);
//         console.log("Password must contain alphabets");
//     }

//     else if (numberMila == false) {
//         console.log("Enter password is: " + password);
//         console.log("Password must contain numbers");
//     }
// }

//Question #16
// var university = "University of Karachi";
// var arr = university.split("");
// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

//Question #17
// var userInput = window.prompt("Enter any thing");
// console.log(userInput[userInput.length-1]);

//Question #18
// var string = "The quick brown fox jumps over the lazy dog.";
// var find = string.toLowerCase();
// var num = "";
// for(var i = 0; i < find.length ;i++){
//     if(find.slice(i, i+3) === "the"){
//         num = ++num;
//     }
// }

// console.log("There are " + num + " ocurrence(s) of the word 'the'");