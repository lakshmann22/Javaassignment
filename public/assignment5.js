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