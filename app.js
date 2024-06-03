
// const myArray = [1, 2, 3, 4, 5];
// while (i===5) {
//   let value = myArray[i];
//   if (value === 3) {
//     isFound = true;
//   }
//   i++;
// }
// for(let i = 0;i<myArray.length;i++)

// let isOn = true
// let units = 0
// while(isOn === true){
// units++
// }

// while (yourName !== "Abdullah") {
//   yourName = prompt("Enter Your Name");
// }
// let yourName;
// do {
//   yourName = prompt("Enter Your Name");
// } while (yourName !== "Abdullah");

// console.log(yourName);

// function myName(ali, cb) {
//   console.log(ali, "Run...");
//   cb();
//   // cb();
//   // myFoo()
// }

// function myFoo(cb) {
//   console.log("MyFoo");
//   cb();
// }
// function myCB() {
//   console.log("MyFooCB");
// }
// function myFoo1() {
//   console.log("MyFoo1");
// }
// function myFoo2() {
//   console.log("MyFoo2");
// }

// myName(5, function () {
//   myFoo(function () {
//     myCB();
//   });
// });
// myName(7, function () {
//   myFoo2();
// });
// myName(10, function () {
//   myFoo1();
// });

// let data = "isNotFound";
// const timeId = setTimeout(function () {
//   data = "isFound";
//   console.log(data);
//   const result = gharJao(data);
//   console.log(result, "===result");
// }, 3000);
// console.log(timeId)
// // console.log("data : ", data);
// // gharJao(data);

// function gharJao(res) {
//   console.log(res, "Ghar");
//   return "abc"
// }
// const result = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     const foundDahi = false;
//     if (foundDahi) {
//       resolve("Dahi mil gayi");
//     } else {
//       reject("Me gir gya");
//     }
//   }, 3000);
// });

// result
//   .then(function (value) {
//     console.log("===resolved", value);
//   })
//   .catch(function (error) {
//     console.log("===reject", error);
//   });

// console.log(result);
// const result = new Promise(function(resolve,reject){});
// console.log(result);

// const newResult = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       let dataCalculation = true;
//       if (dataCalculation) {
//         resolve("Value mil gyi");
//       } else {
//         reject("Value nhi mili");
//       }
//     }, 2000);
//   });
  
//   console.log(newResult, 1);
  
//   newResult
//     .then(function (a) {
//       console.log("Resolved===", 2);
//     })
//     .catch(function (a) {
//       console.log("Rejected", err);
//     });
  
//   console.log("Function Run", 3);






  const newResult = new Promise (function(resolve, reject){
    setTimeout(function(){
        let dataCalculation = true;
        if(dataCalculation){
            resolve("Your 'Promise' Is Correct")
        }else{
            reject("Your 'Promise' Is Wrong")
        }
    }, 2000);
  });

  console.log(newResult, 1);

  newResult
  .then(function (a){
    console.log("Resolved===", 2);
  })
  .catch(function (a){
    console.log("Rejected"), err;
  })
  console.log("Function Run", 3);

  
  // function Promise(cb) {
  //   const res...olve = function () {};
  //   const reject = function () {};
  //   cb(resolve, reject);
  // }
  