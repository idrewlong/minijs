const quotes = [
        "Strive not to be a success, but rather to be of value.",
        "Your time is limited, so don't waste it living someone else's life.",
        "Success is a lousy teacher",
        "Design is not just what it looks like and feels like"
    ];
    
    const usedIndexes = new Set();
    const quoteButton = document.getElementById("quote");
    
    function generateQuote() {
        // Reset used indexes if all quotes have been shown
        if (usedIndexes.size === quotes.length) {
            usedIndexes.clear();
        }
        
        // Find an unused quote
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * quotes.length);
        } while (usedIndexes.has(randomIndex));
        
        // Display the quote and mark it as used
        const quote = quotes[randomIndex];
        quoteButton.textContent = quote; // safer than innerHTML
        usedIndexes.add(randomIndex);
    }