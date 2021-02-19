
// // // class Parent {
// // //     constructor (fatherName, motherName) {
// // //         this.fatherName = 'Dipak Chandra Saha'
// // //         this.motherName = 'Gowri Rani Saha'
// // //     }
// // // } 

// // // class Child extends Parent{
// // //     constructor(name, age) {
// // //         super()
// // //         this.name = name
// // //         this.age = age
// // //     }

// // //     getFullName() {
// // //         return this.name + ' ' +this.fatherName
// // //     }
// // // }

// // // const res = new Child('Trishan', 26);
// // // const res2 = new Child('Rishan', 20);
// // // console.log(res.getFullName());
// // // console.log(res2.getFullName());


// // class Parent {
// //     constructor (fatherName , motherName) {
// //         this.fatherName = 'Dipak Saha',
// //         this.motherName = 'Gowri Rani'
// //     }
// // }


// // class Child extends Parent{
// //     constructor (name, age) {
// //         super()
// //         this.name = name
// //         this.age = age
// //     }
// // }
// // const childOne = new Child('Trishan', 26)
// // console.log(childOne);






// const add = (x, y) => {
//     return x + y
// }
// add(10, 20)



// const arr = {
//     name: 'Trishan',
//     address: 'Balakhal'
// }

// const json = JSON.stringify(arr)
// const jsonToObj = JSON.parse(json)
// console.log(json);
// console.log(jsonToObj);


fetch('https://jsonplaceholder.typicode.com/')
  .then(response => response.json())
  .then(json => console.log(json))