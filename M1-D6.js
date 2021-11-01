/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
- Complete as many exercises as you can
*/
const exercise = function(title) {
  console.log(`\n\n***************************[ ${title.toUpperCase()} ]******************************\n\n`)
}


// JS Basics

/* EXERCISE A
   Create a variable called test and assign a string value to it.
*/
exercise("Exercise-A Output")
let test = "StringText"
console.log("The string variable assigned to variable 'test' is: "+test)

/* EXERCISE B
    Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
*/
exercise("Exercise-B Output")
let result = 0 
 for(i=10;i<=20;i++){
 result = i + result
 }
 let sum = result
 console.log("Sum of numbers between 10 and 20 is: "+sum)
/* EXERCISE C
    Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
exercise("Exercise-C Output")
const getRandom = function(min, max){
  let randomVariable = Math.random() * (max - min) + min;
  return randomVariable
}

console.log("The random number between 0 and 20 is: "+Math.floor(getRandom(0,20)))

/* EXERCISE D
    Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
exercise("Exercise-D Output")
let me = {
  name: "Anusha",
  surname: "Cherukuri",
  age: 25
}
console.log(me)
/* EXERCISE E
    Write a piece of code for programmatically removing the age property from the previously create object.
*/
exercise("Exercise-E Output")
delete me.age
console.log(me)
/* EXERCISE F
   Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.
*/
exercise("Exercise-F Output")
me.skills = ["C", "C++", "HTML", "CSS" , "JavaScript", "Python", "R"]
console.log(me)

/* EXERCISE G
   Write a piece of code for programmatically removing the last skill from the skills array inside the me object.
*/
exercise("Exercise-G Output")
me.skills.pop()
console.log(me)
// JS Functions
/* EXERCISE 1
    Write a function called dice; it should randomize an integer number between 1 and 6.
*/
exercise("Exercise-1 Output")

const dice = function(min, max){
    let randomIntVariable = Math.random() * (max - min) + min;
    return Math.floor(randomIntVariable)
  }
console.log("Some random number between 1 and 6 is: "+dice(1,6))

/* EXERCISE 2
    Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
*/
exercise("Exercise-2 Output")
let firstNumber
let secondNumber
const whoIsBigger = function(firstNumber,secondNumber){
  (firstNumber>secondNumber)?console.log("First Number, "+firstNumber+" is BIG") : console.log("Second Number, "+secondNumber+" is BIG")

}
whoIsBigger(20,30)
/* EXERCISE 3
    Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.
    Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
exercise("Exercise-3 Output")

// let givenStringArray  
const splitMe = function(givenStringArray) {
    let stringResult= givenStringArray.split(" ")
      return stringResult
}
console.log(splitMe("I love coding"))
console.log(splitMe("I love coding", "Javascript"))

/* EXERCISE 4
    Write a function called deleteOne which receives a string and a boolean as parameters.
    If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
exercise("Exercise-4 Output")
let str 
let bool
const deleteOne = function(str,bool){
if(bool == true){
  return str.slice(1)
}else{
  return str
}
}
console.log("The boolean value is true. So, the string without first letter is: "+deleteOne("Anusha",true))
console.log("The boolean value is false. So, the string is: "+deleteOne("Cherukuri",false))

/* EXERCISE 5
   Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs") => returns "I have  dogs"
*/
exercise("Exercise-5 Output")
let stringSentence

const onlyLetters = function(stringSentence){
  stringSentence = stringSentence.replace(/[0-9]/g,' ')
  return stringSentence
  }
console.log(onlyLetters("My name is Anusha and I'm 25 years old "))


/* EXERCISE 6
   Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.
*/
exercise("Exercise-6 Output")

const isThisAnEmail = function(email){
  let hasAddressSign = false
  let hasDot = false
  for (i = 0; i< email.length; i++){
    if (email[i] === "@")
    {
      hasAddressSign = true

    }
    if (email[i] === "."){
      hasDot= true
    }
  }
  if(hasDot === true && hasAddressSign === true){
    return "It is a valid email address!"
  }else{
    return "It is NOT a valid email address!"
  }
}
console.log("anushach514 :"+isThisAnEmail("anushach514"))
console.log(isThisAnEmail("anushach514@gmail.com"))


/* EXERCISE 7
   Write a function called whatDayIsIt that should return the current day of the week.
*/
exercise("Exercise-7 Output")

const whatDayIsIt = function(){
let currentDate = new Date()
let day = currentDate.getDate()
let month = currentDate.getMonth() + 1
let year = currentDate.getFullYear()
console.log("<b>" + day + "/" + month + "/" + year + "</b>")
}
whatDayIsIt()

/* EXERCISE 8
    Write a function called rollTheDices which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a sum property holding the sum of all values extracted
    and a values array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/
exercise("Exercise-8 Output")

const rollTheDices = function (number){
  let object = {sum: 0, values: []}
  for (i = 0; i < number; i++){
    rolledDices = object.sum += dice(1,6)
    object.values.push(rolledDices)
  }
  return  object
}

console.log(rollTheDices(3))
  
// }
/* EXERCISE 9
   Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.
*/
exercise("Exercise- Output")

const howManyDays = function(date) {
  let result = new Date(date)
  result.setMinutes(result.getMinutes() - result.getTimezoneOffset())
  return result
}

const daysBetween = function(startDate) {
    let todayDay = new Date()
   let millisecondsPerDay = 24 * 60 * 60 * 1000
  return Math.floor((todayDay - howManyDays(startDate)) / millisecondsPerDay)
}
console.log(new Date())
console.log("Days between start date and end date is: "+daysBetween("2021-12-01"))

/* EXERCISE 10
   Write a function called isTodayMyBirthday which should return true if today's your birthday, false otherwise.
*/
exercise("Exercise-10 Output")

const isTodayMyBirthday = function(){
  let todayDate = new Date()
      if(todayDate.getMonth() === 10 && todayDate.getDay() === 1){
    return true
  }else{
      return false   
  } 
}  
  console.log("Birthday and today day are same: "+isTodayMyBirthday())

// JS Arrays & Objects
// NOTE: the movies array used in some exercises is defined at the end of this file


const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

let cloneMovies = []

cloneMovies.push.apply(cloneMovies,movies)

/* EXERCISE 11
   Write a function called deleteProp which receives an object and a string as parameters,
   and returns the given object after deleting its property named as the given string.
*/
exercise("Exercise-11 Output")

const deleteProp = function (objectProp, nameToDelete){
 
  delete objectProp[nameToDelete]

  return objectProp
}

console.log(deleteProp(cloneMovies[0], "Title"))
/* EXERCISE 12
    Write a function called oldestMovie which finds the oldest movie in the provided movies array.
*/
exercise("Exercise-12 Output")

const oldestMovie = function(){
  let moviesYears = []
  for(i=0;i<cloneMovies.length;i++){
      if(cloneMovies[i].Year > 2000){
          moviesYears.push(cloneMovies[i].Title)
      }
  }
  return moviesYears
}
console.log(oldestMovie())
/* EXERCISE 13
    Write a function called countMovies which returns the number of movies contained in the provided movies array.
*/
exercise("Exercise-13 Output")
let arr
const countMovies = function(arr){
  return cloneMovies.length
}
console.log("Number of movies in the movies array is: "+countMovies(cloneMovies))
/* EXERCISE 14
    Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.
*/
exercise("Exercise-14 Output")

const onlyTheTitles = function(){
  let movieTitles = []
  for(i=0; i< cloneMovies.length; i++){
     movieTitles.push(cloneMovies[i].Title)
      
  }
  return movieTitles      
}
console.log(onlyTheTitles())
/* EXERCISE 15
   Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.
*/
exercise("Exercise-15 Output")

const onlyInThisMillennium = function(){
  let movieYears = []
  for(i=0; i< cloneMovies.length; i++){
     movieYears.push(cloneMovies[i].Year)
  }
  return movieYears      
}
console.log(onlyInThisMillennium())
/* EXERCISE 16 
    Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.
*/
exercise("Exercise-16 Output")

const getMovieById = function(imdb){
    let arr = []
    for(i=0;i<cloneMovies.length;i++){
      if(imdb === cloneMovies[i].imdbID){
        arr.push(cloneMovies[i].Title)
      }
    }
    return arr
  } 
  console.log(getMovieById("tt4154756"))

  

/* EXERCISE 17
    Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.
*/
exercise("Exercise-17 Output")

const sumAllTheYears = function(){
  
}
/* EXERCISE 18
    Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.
*/
exercise("Exercise-18 Output")


const searchByTitle = function(srcTitle){
  let listOfTitles = []
  for ( i =0 ; i<cloneMovies.length; i++){
    if (cloneMovies[i].Title.indexOf(srcTitle) !== -1){
       listOfTitles.push(cloneMovies[i].Title)
    }
  }return `I found this titles:\n ${listOfTitles.join("\n")}`
}
console.log(searchByTitle("Lord of"))
/* EXERCISE 19
    Write a function called searchAndDivide which receives a string as a parameter and returns an object;
    this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,
    and another array unmatch with all the remaining ones.
*/
exercise("Exercise-19 Output")

const searchAndDivide = function(){
  
}

/* EXERCISE 20
   Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.
*/

exercise("Exercise-20 Output")


// console.log(cloneMovies)
const removeIndex = function(indexPosition)
{
  if(indexPosition <= cloneMovies.length - 1) 
  {
  movieResult = cloneMovies.splice(indexPosition-1, 1)
  console.log(cloneMovies)
  }  
}
   // for( let i = 0; i < cloneMovies.length; i++)
  // {    
  //   if ( cloneMovies[i] === indexPosition)
  //    { 
  //      return cloneMovies.splice(i, 1)
  //    }
  // }

removeIndex(2)


// removeIndex(2)
// [EXTRAS] JS Advanced

/* EXERCISE 21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/
exercise("Exercise-21 Output")
let n
const halfTree = function(n){
  for(let i=1; i<=n; i++){
    console.log("* ".repeat(i));
 }
}
halfTree(7)

/* EXERCISE 22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/
exercise("Exercise-22 Output")

const tree = function(n){
let empString = ""
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    empString += " "
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    empString += "*"
  }
  empString += "\n"
}
console.log(empString)
 }
 tree(5)
/* EXERCISE 23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/
exercise("Exercise-23 Output")
let num
const isItPrime = function(num)
{
  if (num===1)
  {
    return false;
  }
  else if(num === 2)
  {
    console.log("Given number, "+num+" is prime: " )
    return true
  }else
  {
    for(let i = 2; i < num; i++)
    {
      if(num % i === 0)
      {
        console.log("Given number, "+num+" is prime: " )
        return false
      }
    }
    console.log("Given number, "+num+" is prime: " )
    return true
  }
}

console.log(isItPrime(37))
console.log(isItPrime(8))
      

  

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/

/* This movies array is used throughout the exercises. You're not supposed to alter it. */
/*
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
*/