
const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke);

// jokeBtn.addEventListener('click', () => {
//     console.log('hello');
// });

generateJoke()

// Using Async Await
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        }
    }

    const res = await fetch('https://icanhazdadjoke.com',
        config)

    const data = await res.json()

    jokeEl.innerHTML = data.joke
}


// # Using fetch and .then
// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com', config)
//         .then((res) => res.json())
//         .then((data) => {
//             jokeEl.innerHTML = data.joke
//         })
// }




