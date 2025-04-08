// Dictionary of words - Hebrew to Spanish
const words = {
    // Level 1 - Basic words
    'שלום': 'hola',
    'תודה': 'gracias',
    'בבקשה': 'por favor',
    'כן': 'sí',
    'לא': 'no',
    'אני': 'yo',
    'אתה': 'tú',
    'הוא': 'él',
    'היא': 'ella',
    'אנחנו': 'nosotros',
    'אתם': 'vosotros',
    'הם': 'ellos',

    // Level 2 - Intermediate words
    // Numbers
    'אחד': 'uno',
    'שתיים': 'dos',
    'שלוש': 'tres',
    'ארבע': 'cuatro',
    'חמש': 'cinco',
    'שש': 'seis',
    'שבע': 'siete',
    'שמונה': 'ocho',
    'תשע': 'nueve',
    'עשר': 'diez',

    // Colors
    'אדום': 'rojo',
    'כחול': 'azul',
    'ירוק': 'verde',
    'צהוב': 'amarillo',
    'שחור': 'negro',
    'לבן': 'blanco',
    'כתום': 'naranja',
    'סגול': 'morado',
    'ורוד': 'rosa',
    'חום': 'marrón',

    // Family
    'אבא': 'padre',
    'אמא': 'madre',
    'אח': 'hermano',
    'אחות': 'hermana',
    'בן': 'hijo',
    'בת': 'hija',
    'סבא': 'abuelo',
    'סבתא': 'abuela',

    // Food
    'מים': 'agua',
    'לחם': 'pan',
    'חלב': 'leche',
    'ביצה': 'huevo',
    'תפוח': 'manzana',
    'בננה': 'plátano',
    'עגבניה': 'tomate',
    'גבינה': 'queso',
    'בשר': 'carne',
    'דג': 'pescado',

    // Animals
    'כלב': 'perro',
    'חתול': 'gato',
    'ציפור': 'pájaro',
    'דג': 'pez',
    'סוס': 'caballo',
    'פרה': 'vaca',
    'כבשה': 'oveja',
    'חזיר': 'cerdo',
    'תרנגול': 'gallina',
    'דב': 'oso'
};

// Game state
let selectedWord = null;
let matchedPairs = 0;
let totalPairs = 6;
let currentLevel = 1;
let currentWords = {};

// DOM Elements
const hebrewWordsContainer = document.getElementById('hebrew-words');
const spanishWordsContainer = document.getElementById('spanish-words');
const matchesFoundElement = document.getElementById('matches-found');
const totalPairsElement = document.getElementById('total-pairs');
const currentLevelElement = document.getElementById('current-level');

// Initialize the game
function initGame() {
    // Reset game state
    selectedWord = null;
    matchedPairs = 0;
    currentWords = {};
    
    // Clear containers
    hebrewWordsContainer.innerHTML = '';
    spanishWordsContainer.innerHTML = '';
    
    // Update stats
    matchesFoundElement.textContent = '0';
    totalPairsElement.textContent = totalPairs.toString();
    currentLevelElement.textContent = currentLevel.toString();
    
    // Select random words based on level
    const allWords = Object.entries(words);
    const levelWords = allWords.filter(([hebrew, spanish]) => {
        if (currentLevel === 1) return true; // All words in level 1
        if (currentLevel === 2) return hebrew.length > 3; // Longer words in level 2
        if (currentLevel === 3) return hebrew.length > 5; // Longest words in level 3
    });
    
    const shuffledWords = levelWords.sort(() => Math.random() - 0.5);
    const selectedPairs = shuffledWords.slice(0, totalPairs);
    
    // Create word pairs
    selectedPairs.forEach(([hebrew, spanish]) => {
        currentWords[hebrew] = spanish;
    });
    
    // Create buttons for Hebrew words
    const hebrewWords = Object.keys(currentWords);
    const shuffledHebrew = [...hebrewWords].sort(() => Math.random() - 0.5);
    shuffledHebrew.forEach(word => {
        const button = createWordButton(word, 'hebrew');
        hebrewWordsContainer.appendChild(button);
    });
    
    // Create buttons for Spanish words
    const spanishWords = Object.values(currentWords);
    const shuffledSpanish = [...spanishWords].sort(() => Math.random() - 0.5);
    shuffledSpanish.forEach(word => {
        const button = createWordButton(word, 'spanish');
        spanishWordsContainer.appendChild(button);
    });
}

// Create a word button
function createWordButton(word, language) {
    const button = document.createElement('button');
    button.className = 'word-button';
    button.textContent = word;
    button.dataset.word = word;
    button.dataset.language = language;
    
    button.addEventListener('click', () => handleWordClick(button));
    
    return button;
}

// Handle word button click
function handleWordClick(button) {
    // Ignore if the word is already matched
    if (button.classList.contains('matched')) return;
    
    // If no word is selected, select this one
    if (!selectedWord) {
        selectedWord = button;
        button.classList.add('selected');
        return;
    }

    // If the same word is clicked, deselect it
    if (selectedWord === button) {
        selectedWord.classList.remove('selected');
        selectedWord = null;
        return;
    }

    // Check if the words match
    const isMatch = checkMatch(selectedWord, button);
    
    if (isMatch) {
        // Mark both words as matched
        selectedWord.classList.add('matched');
        button.classList.add('matched');
        
        // Add a small delay before updating the counter
        setTimeout(() => {
            matchedPairs++;
            matchesFoundElement.textContent = matchedPairs.toString();
            
            // Check if all pairs are matched
            if (matchedPairs === totalPairs) {
                setTimeout(() => {
                    alert('כל הכבוד! מצאת את כל הזוגות!');
                    initGame(); // Start a new game
                }, 500);
            }
        }, 300);
        
        // Reset selection after successful match
        selectedWord = null;
    } else {
        // Add wrong animation to both buttons
        selectedWord.classList.add('wrong');
        button.classList.add('wrong');
        
        // Remove wrong class and selection after animation
        setTimeout(() => {
            selectedWord.classList.remove('wrong', 'selected');
            button.classList.remove('wrong', 'selected');
            selectedWord = null; // Reset selection after wrong match
        }, 1000);
    }
}

// Check if two words match
function checkMatch(word1, word2) {
    const hebrewWord = word1.dataset.language === 'hebrew' ? word1.dataset.word : word2.dataset.word;
    const spanishWord = word1.dataset.language === 'spanish' ? word1.dataset.word : word2.dataset.word;
    
    return currentWords[hebrewWord] === spanishWord;
}

// Handle level selection
document.querySelectorAll('.level-button').forEach(button => {
    button.addEventListener('click', () => {
        const newLevel = parseInt(button.dataset.level);
        if (newLevel !== currentLevel) {
            currentLevel = newLevel;
            document.querySelectorAll('.level-button').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            initGame();
        }
    });
});

// Set initial active level button
document.querySelector(`.level-button[data-level="1"]`).classList.add('active');

// Start the game when the page loads
window.addEventListener('load', initGame); 