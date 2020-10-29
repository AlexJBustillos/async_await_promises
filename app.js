// Timing exercise 1
// Uncomment these lines and run them, observing the order that the logs happen
// How can you change it to log in the correct order?


//using .then
// console.log('I should log before the data!');
// fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
// .then((res) => res.json()).then((json) => { 
//     console.log(json)
//     console.log('I should log after the data!');
// })

//async and await
// async function exercise1() {
//     console.log('I should log before the data!');
//     const res = await fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
//     const json = await res.json()
//     console.log(json)
//     console.log('I should log after the data!');
// }
// exercise1();
// ========================================

// Timing exercise 2: slightly more complicated

// console.log('I should be before the cats data');
// fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
// .then((res) => res.json()).then((json) => {
        // console.log(json)
        // console.log('I should be between the cats and dogs');
        // fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no')
        // .then((res) => res.json()).then((json) => {
        // console.log(json)
        // console.log('I should be last');

        // })
// })

// async function exercise2() {
//     console.log('I should be before the cats data');
//     const res = await fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
//     const json = await res.json()
//     console.log('This is the cat data', json)
//     console.log('I should be between the cats and dogs');
//     const res2 = await fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no')
//     const json2 = await res2.json()
//     console.log('this is dog datd', json2)
//     console.log('I should be last');

// }
// exercise2()


//promises!!!

// const successfulPromise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve()

//     }, 3 * 1000)
// })
// console.log(successfulPromise);

// const unsuccessfulPromise = new Promise(function(resolve, reject) {
//     setTimeout(reject, 3000)
// })
// console.log(unsuccessfulPromise);

// setTimeout(function() {
//     console.log(successfulPromise);
//     console.log(unsuccessfulPromise);
// }, 4000)

// const myPromise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       // in here, you must invoke either resolve or reject!
//     }, 3 * 1000)
//   })


//these two are the same
// fetch('some-url.com').then((res) => res.json()).then((json) => console.log(json))
// fetch('some-url.com').then((res) => res.json()).then(console.log)

// let x = 3
// const conditionalPromise = new Promise(function(resolve, reject) {
//     if (x === 3) {
//         return resolve()
//     } else {
//         return reject()
//     }
// })
// console.log(conditionalPromise);


//examples!!!
// const conditionalPromise = (cond) => new Promise((res, rej) => {
//     if (cond) res('WOOO GOT A CONDITION')
//     rej('No condition wtf bro')
//   })
//   conditionalPromise('ahhh').then(console.log).catch(console.error)
//   conditionalPromise().then(console.log).catch(console.error)

// const conditionalPromise = (condition) => new Promise(function(resolve, reject) {
//     if (condition % 2 === 0) {
//         resolve();
//     } else {
//         reject();
//     }
// })
// console.log(conditionalPromise(4), 'c');
// console.log(conditionalPromise(5), 'c');

//status code 2xx SUCCESS
//3xx REDIRECT
//4xx Client messed up
//5xx server messed up


// function myFetch(url) {
//     const myPromise = new Promise(function(resolve,reject) {
//         //get the data from the web
//         const webData = somehowGetWebData()
//         if (webData.statusCode < 400) {
//             resolve()
//         } else if (400 <= webData.statusCode <= 599) {
//             reject()

//         }
//     })
//     return myPromise
// }

// myFetch('some-url.com').then(...).catch(...)

const conditionalPromise = new Promise(function(resolve, reject) {
    if (5 < 10) {
        resolve('this will flow into .then')
    } else {
        reject('this will flow into .catch')
    }
})
//console.log(conditionalPromise)
conditionalPromise.then((res) => console.log(res)).catch((err) => console.error(err))