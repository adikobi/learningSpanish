// Dictionary of words - Hebrew to Spanish
const words = {
    // Level 1 - Basic words (everyday words) - 50 words
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
    'אבא': 'padre',
    'אמא': 'madre',
    'אח': 'hermano',
    'אחות': 'hermana',
    'בן': 'hijo',
    'בת': 'hija',
    'סבא': 'abuelo',
    'סבתא': 'abuela',
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
    'כלב': 'perro',
    'חתול': 'gato',
    'ציפור': 'pájaro',
    'סוס': 'caballo',
    'פרה': 'vaca',
    'כבשה': 'oveja',
    'חזיר': 'cerdo',
    'תרנגול': 'gallina',
    'דב': 'oso',
    'בית': 'casa',
    'חדר': 'habitación',
    'שולחן': 'mesa',
    'כיסא': 'silla',
    'חלון': 'ventana',
    'דלת': 'puerta',
    'אור': 'luz',
    'חושך': 'oscuridad',
    'יום': 'día',
    'לילה': 'noche',
    'שמש': 'sol',
    'ירח': 'luna',
    'כוכב': 'estrella',
    'שמים': 'cielo',
    'ארץ': 'tierra',
    'ים': 'mar',
    'נהר': 'río',
    'אגם': 'lago',
    'יער': 'bosque',
    'פרח': 'flor',
    'עץ': 'árbol',
    'עלה': 'hoja',
    'פירות': 'frutas',
    'ירקות': 'verduras',
    'אורז': 'arroz',
    'פסטה': 'pasta',
    'תפוח אדמה': 'patata',
    'בצל': 'cebolla',
    'שום': 'ajo',
    'מלח': 'sal',
    'פלפל': 'pimienta',
    'שמן': 'aceite',
    'חומץ': 'vinagre',
    'סוכר': 'azúcar',
    'קפה': 'café',
    'תה': 'té',
    'מיץ': 'zumo',
    'בירה': 'cerveza',
    'יין': 'vino',
    'לחמניה': 'panecillo',
    'עוגה': 'pastel',
    'גלידה': 'helado',
    'שוקולד': 'chocolate',
    'ממתק': 'dulce',
    'מזלג': 'tenedor',
    'סכין': 'cuchillo',
    'כף': 'cuchara',
    'צלחת': 'plato',
    'כוס': 'vaso',
    'קערה': 'tazón',
    'מפית': 'servilleta',
    'מקרר': 'nevera',
    'תנור': 'horno',
    'כיריים': 'cocina',
    'מזגן': 'aire acondicionado',
    'מחשב': 'ordenador',
    'טלפון': 'teléfono',
    'טלוויזיה': 'televisión',
    'רדיו': 'radio',
    'שעון': 'reloj',
    'משקפיים': 'gafas',
    'כובע': 'sombrero',
    'חולצה': 'camisa',
    'מכנסיים': 'pantalones',
    'נעליים': 'zapatos',
    'גרביים': 'calcetines',
    'תיק': 'bolso',
    'ארנק': 'cartera',
    'מפתח': 'llave',
    'משקאות': 'bebidas',
    'אוכל': 'comida',
    'שתייה': 'bebida',
    'אכילה': 'comer',
    'שתייה': 'beber',
    'שינה': 'dormir',
    'הליכה': 'caminar',
    'ריצה': 'correr',
    'קפיצה': 'saltar',
    'שחייה': 'nadar',
    'רכיבה': 'montar',
    'נסיעה': 'viajar',
    'עבודה': 'trabajar',
    'לימודים': 'estudiar',
    'משחק': 'jugar',
    'שירה': 'cantar',
    'ריקוד': 'bailar',
    'ציור': 'dibujar',
    'כתיבה': 'escribir',
    'קריאה': 'leer',
    'דיבור': 'hablar',
    'שמיעה': 'escuchar',
    'ראייה': 'ver',
    'ריח': 'oler',
    'טעם': 'sabor',
    'מגע': 'tocar',
    'רגש': 'sentir',
    'מחשבה': 'pensar',
    'זיכרון': 'recordar',
    'שכחה': 'olvidar',
    'למידה': 'aprender',
    'הוראה': 'enseñar',
    'עזרה': 'ayudar',
    'בקשה': 'pedir',
    'תשובה': 'responder',
    'שאלה': 'preguntar',
    'הסבר': 'explicar',
    'הבנה': 'entender',
    'חוסר הבנה': 'no entender',
    'סכמה': 'acuerdo',
    'אי הסכמה': 'desacuerdo',
    'אהבה': 'amor',
    'שנאה': 'odio',
    'שמחה': 'alegría',
    'עצב': 'tristeza',
    'כעס': 'enojo',
    'פחד': 'miedo',
    'הפתעה': 'sorpresa',
    'בושה': 'vergüenza',
    'גאווה': 'orgullo',
    'קנאה': 'envidia',
    'אכזבה': 'decepción',
    'תקווה': 'esperanza',
    'חלום': 'sueño',
    'מציאות': 'realidad',
    'אמת': 'verdad',
    'שקר': 'mentira',
    'טוב': 'bueno',
    'רע': 'malo',
    'יפה': 'hermoso',
    'מכוער': 'feo',
    'גדול': 'grande',
    'קטן': 'pequeño',
    'ארוך': 'largo',
    'קצר': 'corto',
    'רחב': 'ancho',
    'צר': 'estrecho',
    'גבוה': 'alto',
    'נמוך': 'bajo',
    'כבד': 'pesado',
    'קל': 'ligero',
    'חם': 'caliente',
    'קר': 'frío',
    'חמים': 'tibio',
    'קריר': 'fresco',
    'מתוק': 'dulce',
    'מר': 'amargo',
    'חמוץ': 'ácido',
    'מלוח': 'salado',
    'חריף': 'picante',
    'רך': 'suave',
    'קשה': 'duro',
    'חלק': 'liso',
    'מחוספס': 'áspero',
    'יבש': 'seco',
    'רטוב': 'mojado',
    'נקי': 'limpio',
    'מלוכלך': 'sucio',
    'חדש': 'nuevo',
    'ישן': 'viejo',
    'צעיר': 'joven',
    'זקן': 'viejo',
    'בריא': 'sano',
    'חולה': 'enfermo',
    'חזק': 'fuerte',
    'חלש': 'débil',
    'מהיר': 'rápido',
    'איטי': 'lento',
    'קל': 'fácil',
    'קשה': 'difícil',
    'יקר': 'caro',
    'זול': 'barato',
    'ריק': 'vacío',
    'מלא': 'lleno',
    'פתוח': 'abierto',
    'סגור': 'cerrado',
    'חופשי': 'libre',
    'עסוק': 'ocupado',
    'שקט': 'tranquilo',
    'רועש': 'ruidoso',
    'בהיר': 'claro',
    'כהה': 'oscuro',
    'צפוף': 'lleno',
    'ריק': 'vacío',
    'קרוב': 'cerca',
    'רחוק': 'lejos',
    'למעלה': 'arriba',
    'למטה': 'abajo',
    'קדימה': 'adelante',
    'אחורה': 'atrás',
    'ימין': 'derecha',
    'שמאל': 'izquierda',
    'קדימה': 'delante',
    'אחורה': 'detrás',
    'בתוך': 'dentro',
    'מחוץ': 'fuera',
    'על': 'sobre',
    'תחת': 'debajo',
    'ליד': 'al lado',
    'בין': 'entre',
    'מול': 'frente',
    'אחרי': 'después',
    'לפני': 'antes',
    'עכשיו': 'ahora',
    'אז': 'entonces',
    'תמיד': 'siempre',
    'לעולם לא': 'nunca',
    'לפעמים': 'a veces',
    'לעתים קרובות': 'a menudo',
    'לעתים רחוקות': 'rara vez',
    'כבר': 'ya',
    'עוד לא': 'todavía no',
    'עדיין': 'todavía',
    'עכשיו': 'ahora',
    'מאוחר': 'tarde',
    'מוקדם': 'temprano',
    'מהר': 'rápido',
    'לאט': 'despacio',
    'טוב': 'bien',
    'רע': 'mal',
    'נכון': 'correcto',
    'לא נכון': 'incorrecto',
    'אולי': 'quizás',
    'בטח': 'seguro',
    'אולי לא': 'quizás no',
    'בטח לא': 'seguro que no',
    'אולי כן': 'quizás sí',
    'בטח כן': 'seguro que sí',
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
        const wordIndex = Object.keys(words).indexOf(hebrew);
        if (currentLevel === 1) return wordIndex < 50;
        if (currentLevel === 2) return wordIndex >= 0 && wordIndex < 100;
        if (currentLevel === 3) return wordIndex >= 50 && wordIndex < 150;
        if (currentLevel === 4) return wordIndex >= 100 && wordIndex < 200;
        if (currentLevel === 5) return wordIndex >= 150 && wordIndex < 250;
        if (currentLevel === 6) return wordIndex >= 200 && wordIndex < 300;
        if (currentLevel === 7) return wordIndex >= 250 && wordIndex < 350;
        if (currentLevel === 7) return wordIndex >= 300 && wordIndex < 400;
        if (currentLevel === 8) return wordIndex >= 350 && wordIndex < 450;
        if (currentLevel === 9) return wordIndex >= 400 && wordIndex < 500;
        if (currentLevel === 10) return wordIndex >= 450 && wordIndex < 550;
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