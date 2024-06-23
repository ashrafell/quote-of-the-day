


let quotes = [
    {
        quote: '-Be yourself; everyone else is already taken-',
        author: 'Oscar Wilde'
    },
    {
        quote: '-So many books, so little time.-',
        author: 'Frank Zappa'
    },
    {
        quote: '-Be the change that you wish to see in the world.-',
        author: 'Mahatma Gandhi'
    },
    {
        quote: '-A friend is someone who knows all about you and still loves you.-',
        author: 'Elbert Hubbard'
    },
    {
        quote: '-Always forgive your enemies; nothing annoys them so much.-',
        author: 'Oscar Wilde'
    },
    {
        quote: '-We accept the love we think we deserve.-',
        author: 'Stephen Chbosky'
    },
    {
        quote: '-Without music, life would be a mistake.-',
        author: 'Friedrich Nietzsche'
    },
    {
        quote: '-It is better to be hated for what you are than to be loved for what you are not.-',
        author: 'Andre Gide'
    },
    {
        quote: '-Insanity is doing the same thing, over and over again, but expecting different results.-',
        author: 'Narcotics Anonymous'
    },
    {
        quote: '-To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.-',
        author: 'Ralph Waldo Emerson'
    }

]


function addQuote() {
    let randomNum = Math.floor(Math.random() * 9);
    let storedRandomNum = localStorage.getItem('random');

    if (storedRandomNum == randomNum) {
        return false;
    } else {
        localStorage.setItem('random', randomNum);
        return randomNum;
    }
}

function displayQuotes() {
    let randomNum = addQuote();

    if (randomNum == false) {
        displayQuotes();
    } else {
        let randomQuote = quotes[randomNum];
        document.getElementById("newQuote").innerHTML = `
            <p>${randomQuote.quote}</p>
            <p>--${randomQuote.author}</p>
        `
    }
}

/*function addQuote() {

    let randomNum = Math.floor(Math.random() * 10)

    if (randomNum == localStorage.getItem('random')) {
        return true
    } else false

}



function displayQuotes() {
    let x = addQuote()
    if (x == true) {
        addQuote()

    } else {
        localStorage.setItem('random', randomNum)
        let randomQuote = quotes[randomNum]
        document.getElementById("newQuote").innerHTML = `
        <p>${randomQuote.quote}</p>
        <p>--${randomQuote.author}</p>
        
        `
    }


}

/*function addQuote() {

    let randomNum = Math.floor(Math.random() * 10)

    if (randomNum == localStorage.getItem('random')) {
        randomNum = Math.floor(Math.random() * 10)
    }
    localStorage.setItem('random', randomNum)
    displayQuotes(randomNum)
}



/*function displayQuotes(randomNum) {
    console.log(randomNum)
    let randomQuote = quotes[randomNum]
    document.getElementById("newQuote").innerHTML = `
    <p>${randomQuote.quote}</p>
    <p>--${randomQuote.author}</p>
    
    `

}
*/



