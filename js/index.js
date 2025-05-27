const quotes = [
    { text: "Do not take life too seriously. You will not get out alive.", author: "Elbert Hubbard" },
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", author: "Marilyn Monroe" },
    { text: "So many books, so little time.", author: "Frank Zappa" },
    { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
    { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
    { text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", author: "Bernard M. Baruch" },
    { text: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.", author: "William W. Purkey" },
    { text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: "Dr. Seuss" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" }
];

var startindex = -1;

function printQuote() {
    var index = Math.floor(Math.random() * quotes.length);

    if (index === startindex) {
        index = (index + 1) % quotes.length;
    }

    startindex = index;

    document.getElementById("quote").innerHTML = `"${quotes[index].text}"`;
    document.getElementById("author").innerHTML = `-- ${quotes[index].author}`;
}
