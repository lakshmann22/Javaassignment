function isEven(num){
    return num % 2 == 0;
}
  console.log( isEven(7));

  var students= [
    {name:"lucky", age:25},
    {name:"samardh",age:24},
    {name:"ravi anna",age:35},
    {name:"surendar",age:40}
  ];
     for(var i =0; i<students.length; i++){
        console.log(students[i].name)
     }

     var users = [
        {name:"john", email: "john@123.com"},
        {name:"ali",  email: "ali@456.com"},
        {name:"sarah", email: "sarah@789.com"},
        {name:"sharukh", email: "sharukh859.com"}
     ]
     let johnEmail;
       for (var i=0; i<users.length; i++){
         if(users[i].name === "john") {
            johnEmail=users[i].email;
            break;
         }
       }
        console.log(johnEmail);

        // question 4 //

        function isPositive(num) {
            if (num > 0) {
                return true;
            } else {
                return false;
            }
        }
          var result = isPositive(-2);
          console.log(result);

          // question 5 //

          var garade = 85;
          if (garade >= 60) {
            console.log("pass");
          } else{
            console.log("fail");
          }

          // question 6 //

          function ispalindrome(word){
            var reverseword = word.split('').reverse().join('');
            if (word === reverseword){
                return true;
            } else {
                return false;
            }
          }
           var result = ispalindrome("racecar");
           console.log(result);

           // question 7 //

           var numbers = [1,2,3,4,5];
           var sum = 0;
           for (var i = 0;i < numbers.length; i++);{
             sum += i;
           }
            console.log(sum);

            // question 8 //

            var name = "Alice";
            if (name === "Alice"){
                console.log("Hello Alice!");
            } else {
                console.log("Hello stranger!");
            }

            // question 9 //

            var books=[
                {tittle: "virat kohli", author:"ravi"},
                {tittle: "the great Gatsby", author:"virat kohli"},
                {tittle: "bahubali", author:"raja"},
                {tittle: "bahubali2", author:"raja"}
            ]

             for(var i=0; i < books.length; i ++){
                if(books[i].tittle === "the great Gatsby"){
                    author = books[i].author;
                    break;
                }
             }
              console.log(author);

              // question 10 //

              function calculateArea(length, width) {
                var area = length * width;
                return area;
              }
              
              var result = calculateArea(4, 5);
              console.log(result);

              // question 11 //

              function printprimesUpToN(n) {
                for (var i = 2 ; i <=n; i++){
                    if(isPrime(i)){
                        console.log(i);
                    }
                }

              }
                function isPrime (num){
                    if(num <= 1){
                        return false;
                    }

                     for (var i =2; i <= Math.sqrt(num); i++){
                        if (num % i === 0){
                            return false;
                        }
                     }
                       return true;
                    }
                      printprimesUpToN(20);

             // JS  assignment 2  //

   // question 1 //

   function addElementToarray(array,element) {
    array.push(element);
   } 
     var myArray = [1,2,3];
     addElementToarray(myArray, 4);
     console.log(myArray); 

       // question 2 //
       function removeLastElement(arr) {
        arr.pop();
        return arr;
      }
      const myArray4 = [1, 2, 3, 4, 5];
      const updatedArray = removeLastElement(myArray4);
      console.log(updatedArray);  // Output: [1, 2, 3, 4]

     
  //          // question 3 //

   function combineArrays(array1, array2){
   return array1.concat(array2);
   }
     var arrayA = [1,2,3];
     var arrayB = [4,5,6];
     var combinedArray = combineArrays(arrayA, arrayB);
     console.log(combinedArray);

  //      // question 4//

      function findElementIndex(array,element) {
      return array.indexOf(element);
   }
       var myArray = [1,2,3,4,5];
       var elementIndex = findElementIndex(myArray, 3);
       console.log(elementIndex);

       // question 5 

   function extractArrayPortion(arr, startIndex, endIndex) {
     return arr.slice(startIndex, endIndex);
   }
     const myArray1 = [1,2,3,4,5,6,7];
     const portion = extractArrayPortion(myArray1,2,5);
       console.log(portion);

       // question 6

       let text = "lakshman";
       let text1 = text.toUpperCase();
       console.log(text1);
       let text2 = text.toLowerCase();
       console.log(text2);
       let text3 = text.split(" ");
       console.log(text3);
       let text4 = text.charAt(5);
       console.log(text4);
       let text5 = text.substring(4, 8);
       console.log(text5);
       
       function doubleArray(arr) {
           const double = arr.map((element) => element *2);
           return double;
       }
       
       const arr4 = [2, 4, 10, 18];
       const double = doubleArray(arr4);
       console.log(double);
       
       function removeEvenNumbers(arr) {
           const oddNumbers = arr.filter((element) => element % 2 != 0);
           return oddNumbers;
         }
       
         const arr5 = [1, 2, 3, 4, 5];
         const odd = removeEvenNumbers(arr5);
         console.log(odd);
       
         function logArray(arr) {
           arr.forEach((element) => console.log(element));
         }
       
         const arr6 = [1,2,3,9,8,7];
         console.log(logArray(arr6));
       
       // Algorithms
       
       function reverse(str) {
           let reversed = '';
           for (let i = str.length - 1; i >= 0; i--) {
             reversed += str.charAt(i);
           }
           return reversed;
         }
       
         const input = "lakshman";
       const reversed = reverse(input);
       console.log(reversed);
       
       function reverseBuildIn(str) {
           return str.split('').reverse().join('');
         }
       
         const input1 = "lakshman";
       const reversed1 = reverse(input1);
       console.log(reversed1);
       
       function findMaxNumber(arr) {
           let maxNumber = arr[0];
           for (let i = 1; i < arr.length; i++) {
             if (arr[i] > maxNumber) {
               maxNumber = arr[i];
             }
           }
           return maxNumber;
         }
       
         const numbers2 = [4, 14, 18, 9, 11, 1];
       const maxNumber = findMaxNumber(numbers2);
       console.log(maxNumber);
       
       function removeDuplicates(arr) {
           const uniqueArray = [];
           for (let i = 0; i < arr.length; i++) {
             if (!uniqueArray.includes(arr[i])) {
               uniqueArray.push(arr[i]);
             }
           }
           return uniqueArray;
         }
       
         const numbers1 = [1, 2, 3, 4, 2, 1, 3, 5];
       const uniqueNumbers = removeDuplicates(numbers1);
       console.log(uniqueNumbers);
       
       function sortedArray(arr) {
           for(i=0;i<arr.length;i++) {
               for(j=i+1;j<arr.length;j++) {
                   if(arr[i]>arr[j])
                       var temp = arr[i];
                       arr[i] = arr[j];
                       arr[j] = temp;
               }
           }
           return arr;
       }
       
       
       const number2 = [3,5,4,1,2];
       const sorted = sortedArray(number2);
       console.log(sorted);