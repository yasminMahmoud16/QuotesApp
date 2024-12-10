// 1. Array of objects

var quotes = [
    {
        id: 1,
        quoteText: 'Be yourself; everyone else is already taken.',
        author: '-- Oscar Wilde',
        isShow: false
    },
    {
        id: 2,
        quoteText: 'A room without books is like a body without a soul.',
        author: '-- Marcus Tullius Cicero',
        isShow: false
    },
    {
        id: 3,
        quoteText: 'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.',
        author: 'Dr. Seuss',
        isShow: false
    },
    {
        id: 4,
        quoteText: 'You only live once, but if you do it right, once is enough',
        author: '-- Mae West',
        isShow: false
    },
    {
        id: 5,
        quoteText: 'Be the change that you wish to see in the world',
        author: '-- Mahatma Gandhi',
        isShow: false
    },
    {
        id: 6,
        quoteText: 'A friend is someone who knows all about you and still loves you.',
        author: '-- Elbert Hubbard',
        isShow: false
    },
    {
        id: 7,
        quoteText: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
        author: '-- Mahatma Gandhi',
        isShow: false
    },
    {
        id: 8,
        quoteText: 'It is better to be hated for what you are than to be loved for what you are not.',
        author: '-- Andre Gide, Autumn Leaves',
        isShow: false
    },
    {
        id: 9,
        quoteText: 'Good friends, good books, and a sleepy conscience: this is the ideal life.',
        author: '-- Mark Twain',
        isShow: false
    },
    {
        id: 10,
        quoteText: 'It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it',
        author: '-- Maurice Switzer',
        isShow: false
    }
];






// filter create new array from my array

function getRandomQuote() {
    // filter(array, arrofunction conditiion) return array 

    var isShowQuotes = quotes.filter(quote => !quote.isShow);


    // cycle loop
    if (isShowQuotes.length === 0) {
        document.getElementById('quote-con').innerHTML = `
            <p class="card-text text-center fs-3 fw-semibold">Quotes End</p>
        `;
        return;
    }


    // integer number
    var randomQuotes = Math.floor(Math.random() * isShowQuotes.length);
    var result = isShowQuotes[randomQuotes];
    result.isShow = true;

    // cartoona

    var cartoona = `
        <p class="card-text text-center lead text-capitalize fs-5 fw-semibold" id="quote-text">${result.quoteText}</p>
        <span class="text-muted fw-medium">${result.author}</span>
    `;
    document.getElementById('quote-con').innerHTML = cartoona;
    console.log(result);
    return result
}



