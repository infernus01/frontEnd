// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');
// button.addEventListener('click', () => {
//         const r = Math.floor(Math.random() * 256);
//         const g = Math.floor(Math.random() * 256);
//         const b = Math.floor(Math.random() * 256);
//         const newColor = `rgb(${r},${b},${g})`;
//         document.body.style.backgroundColor = newColor;
//         h1.innerText = newColor;

// })
// Below code creates 100 buttons with inner text 'hey'-->
// const btn = document.querySelector('button');
// for (let i = 0; i < 100; i++) {
//     const button1 = document.createElement('button');
//     button1.innerText = 'Hey!';
//     btn.appendChild(button1);
// }

// document.querySelector('button').addEventListener('click', function(evt) {
//     console.log(evt);
// })



// const input = document.querySelector('input');
// input.addEventListener('keydown', function(e) {
//         console.log(e.key);
//         console.log(e.code);
//     })
// input.addEventListener('keyup', function() {
//     console.log("KEYUP");
// })


// window.addEventListener('keydown', function(e) {
//     switch (e.code) {
//         case 'ArrowUp':
//             console.log("UP!");
//             break;
//         case 'ArrowDown':
//             console.log("Down!");
//             break;
//         case 'ArrowLeft':
//             console.log("LEFT!");
//             break;
//         case 'ArrowRight':
//             console.log("RIGHT!");
//             break;
//         default:
//             console.log("IGNORED!");
//     }
// })

/////////////// F O R M   E V E N T S  ///////////////
// const tweetForm = document.querySelector('#tweetForm');
// const tweetContainer = document.querySelector('#tweets');
// tweetForm.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const usernameInput = tweetForm.elements.username;
//     const tweetInput = tweetForm.elements.tweet;
//     addTweet(usernameInput.value, tweetInput.value)
//     usernameInput.value = '';
//     tweetInput.value = '';
// });
// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username)
//     newTweet.append(bTag);
//     newTweet.append(`-${tweet}`)
//     tweetContainer.append(newTweet);
// }

const input = document.querySelector('input');
const h1 = document.querySelector('h1');
input.addEventListener('input', function(e) {
    h1.innerText = 'Welcome, ' + input.value;

});
input.addEventListener('ended', function(e) {
    h1.innerText = "Enter Your Username";
});