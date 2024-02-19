const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: 'To live is the rarest thing in the world. Most people exist, that is all.', author: "Oscar Wilde"},
    { text: 'That it will never come again is what makes life so sweet.', author: "Emily Dickinson"},
    { text: 'It is never too late to be what you might have been.', author: "George Eliot"},
    { text: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.', author: "Ralph Waldo Emerson"},
    { text: 'Pain is inevitable. Suffering is optional.', author: "Haruki Murakami"},
    { text: 'Be kind, for everyone you meet is fighting a hard battle.', author: "Plato"},
    { text: 'Unable are the loved to die for love is immortality.', author: "Emily Dickinson"},
    { text: 'Let me live, love, and say it well in good sentences.', author: "Sylvia Plath"},
    { text: 'Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.', author: "Voltaire"},
    { text: 'Life is tough my darling, but so are you.', author: "Stephanie Bennett Henry"},
    { text: 'Self-awareness and self-love matter. Who we are is how we lead.', author: "Brene Brown"},
    { text: 'Amateurs sit and wait for inspiration, the rest of us just get up and go to work.', author: "Stephen King"},
    // Add more quotes here */
];

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const generateButton = document.getElementById("generate-button");

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = randomQuote.text;
    quoteAuthor.textContent = "— " + randomQuote.author;
}

generateButton.addEventListener("click", generateRandomQuote);

// Initiate quote generation
generateRandomQuote();


// Function to toggle the theme
function changeTheme() {
    // Check if the dark theme is currently applied
    if (document.body.classList.contains('dark-theme')) {
        // If so, remove the dark theme, reverting to light theme
        document.body.classList.remove('dark-theme');
    } else {
        // Otherwise, apply the dark theme
        document.body.classList.add('dark-theme');
    }
}

// Add an event listener to the button for the click event
document.getElementById('theme-toggle-button').addEventListener('click', toggleTheme);
