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
    'ארנב': 'conejo',
    'עכבר': 'ratón',
    'חמור': 'burro',
    'גמל': 'camello',
    'זאב': 'lobo',
    'שועל': 'zorro',
    'נמר': 'tigre',
    'פיל': 'elefante',
    'קוף': 'mono',
    'צבי': 'ciervo',
    'לטאה': 'lagarto',
    'נחש': 'serpiente',
    'צב': 'tortuga',
    'כריש': 'tiburón',
    'לוויתן': 'ballena',
    'דולפין': 'delfín',
    'עכביש': 'araña',
    'נמלה': 'hormiga',
    'דבורה': 'abeja',
    'פרפר': 'mariposa',
    'זבוב': 'mosca',
    'יתוש': 'mosquito',
    'רופא': 'médico',
    'אחות (רפואית)': 'enfermera',
    'מורה': 'maestro',
    'נהג': 'conductor',
    'כבאי': 'bombero',
    'שוטר': 'policía',
    'חייל': 'soldado',
    'מהנדס': 'ingeniero',
    'אדריכל': 'arquitecto',
    'חקלאי': 'agricultor',
    'טבח': 'cocinero',
    'מלצר': 'camarero',
    'מוכרת': 'vendedora',
    'פקיד': 'oficinista',
    'מנהל': 'gerente',
    'מנכ״ל': 'director general',
    'מנקה': 'limpiador',
    'שחקן': 'actor',
    'זמר': 'cantante',
    'רקדן': 'bailarín',
    'נהג אוטובוס': 'conductor de autobús',
    'טייס': 'piloto',
    'קברניט': 'capitán',
    'נגר': 'carpintero',
    'חשמלאי': 'electricista',
    'שרברב': 'fontanero',
    'טכנאי': 'técnico',
    'אומן': 'artesano',
    'צלם': 'fotógrafo',
    'סופר': 'escritor',
    'צייר': 'pintor',
    'עיתונאי': 'periodista',
    'חוקר': 'investigador',
    'נהיגה': 'conducir',
    'טיסה': 'volar',
    'הליכה ברגל': 'andar',
    'עלייה': 'subir',
    'ירידה': 'bajar',
    'כניסה': 'entrar',
    'יציאה': 'salir',
    'עצירה': 'parar',
    'התחלה': 'empezar',
    'סיום': 'terminar',
    'פתיחה': 'abrir',
    'סגירה': 'cerrar',
    'חיפוש': 'buscar',
    'מציאה': 'encontrar',
    'הפסד': 'perder',
    'זכייה': 'ganar',
    'שכיבה': 'acostarse',
    'קימה': 'levantarse',
    'ישיבה': 'sentarse',
    'עמידה': 'pararse',
    'טיול': 'pasear',
    'רכיבה על אופניים': 'montar en bicicleta',
    'נסיעה ברכב': 'viajar en coche',
    'נסיעה באוטובוס': 'viajar en autobús',
    'טיסה במטוס': 'volar en avión',
    'רכבת': 'tren',
    'סירה': 'barco',
    'מונית': 'taxi',
    'אופניים': 'bicicleta',
    'קטנוע': 'moto',
    'רכב': 'coche',
    'כביש': 'carretera',
    'תחנה': 'estación',
    'שדה תעופה': 'aeropuerto',
    'נמל': 'puerto',
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
    'ללמוד': 'estudiar',
    'לכתוב': 'escribir',
    'לקרוא': 'leer',
    'לשחק': 'jugar',
    'לשיר': 'cantar',
    'לרקוד': 'bailar',
    'לצייר': 'dibujar',
    'לנהוג': 'conducir',
    'לטייל': 'viajar',
    'לבשל': 'cocinar',
    'לנקות': 'limpiar',
    'לפתוח': 'abrir',
    'לסגור': 'cerrar',
    'לקנות': 'comprar',
    'למכור': 'vender',
    'לשלם': 'pagar',
    'לקבל': 'recibir',
    'לשלוח': 'enviar',
    'לקחת': 'tomar',
    'להביא': 'traer',
    'להתחיל': 'empezar',
    'לסיים': 'terminar',
    'לזכור': 'recordar',
    'לשכוח': 'olvidar',
    'להבין': 'entender',
    'לדעת': 'saber',
    'לשאול': 'preguntar',
    'לענות': 'responder',
    'לחשוב': 'pensar',
    'להאמין': 'creer',
    'לחלום': 'soñar',
    'לקוות': 'esperar',
    'לאהוב': 'amar',
    'לשנוא': 'odiar',
    'לפחד': 'temer',
    'לצחוק': 'reír',
    'לבכות': 'llorar',
    'לנוח': 'descansar',
    'להתעורר': 'despertar',
    'לישון': 'dormir',
    'להתלבש': 'vestirse',
    'להתקלח': 'ducharse',
    'להתרחץ': 'bañarse',
    'להתגלח': 'afeitarse',
    'להתאפר': 'maquillarse',
    'להתעמל': 'ejercitarse',
    'לרוץ': 'correr',
    'לקפוץ': 'saltar',
    'לשחות': 'nadar',
    'לרכוב': 'montar',
    'לנסוע': 'viajar',
    'לעבוד': 'trabajar',
    'להיפגש': 'reunirse',
    'לבקר': 'visitar',
    'להתקשר': 'llamar',
    'לשלוח הודעה': 'enviar un mensaje',
    'להקשיב': 'escuchar',
    'לראות': 'ver',
    'להסתכל': 'mirar',
    'להריח': 'oler',
    'לטעום': 'probar',
    'לגעת': 'tocar',
    'להרגיש': 'sentir',
    'לשבת': 'sentarse',
    'לעמוד': 'pararse',
    'ללכת': 'caminar',
    'להיכנס': 'entrar',
    'לצאת': 'salir',
    'לחזור': 'volver',
    'להישאר': 'quedarse',
    'לנסוע באוטובוס': 'viajar en autobús',
    'לנסוע ברכבת': 'viajar en tren',
    'לטוס': 'volar',
    'לרכב על אופניים': 'andar en bicicleta',
    'לנהוג במכונית': 'conducir un coche',
    'לקרוא ספר': 'leer un libro',
    'לכתוב מכתב': 'escribir una carta',
    'לצייר תמונה': 'dibujar un cuadro',
    'לבשל ארוחה': 'cocinar una comida',
    'לנקות את הבית': 'limpiar la casa',
    'לעבוד בגינה': 'trabajar en el jardín',
    'לשחק כדורגל': 'jugar al fútbol',
    'לשחק שחמט': 'jugar al ajedrez',
    'לשיר שיר': 'cantar una canción',
    'לרקוד ריקוד': 'bailar un baile',
    'לצפות בטלוויזיה': 'ver la televisión',
    'להאזין למוזיקה': 'escuchar música',
    'ללמוד למבחן': 'estudiar para un examen',
    'לעשות שיעורי בית': 'hacer la tarea',
    'להכין פרויקט': 'preparar un proyecto',
    'להשתתף בשיעור': 'asistir a una clase',
    'לשאול שאלה': 'hacer una pregunta',
    'לענות על שאלה': 'responder a una pregunta',
    'להסביר תשובה': 'explicar una respuesta',
    'להבין נושא': 'entender un tema',
    'לזכור מידע': 'recordar información',
    'לשכוח פרטים': 'olvidar detalles',
    'לתרגל מיומנות': 'practicar una habilidad',
    'לשפר ביצועים': 'mejorar el rendimiento',
    'להצליח במשימה': 'tener éxito en una tarea',
    'להיכשל בניסיון': 'fracasar en un intento',
    'להתחיל פרויקט': 'iniciar un proyecto',
    'לסיים עבודה': 'completar un trabajo',
    'להגיש דו"ח': 'entregar un informe',
    'להשתתף בפגישה': 'asistir a una reunión',
    'להציע רעיון': 'proponer una idea',
    'לקבל החלטה': 'tomar una decisión',
    'לפתור בעיה': 'resolver un problema',
    'לנהל צוות': 'dirigir un equipo',
    'לארגן אירוע': 'organizar un evento',
    'לתכנן תוכנית': 'planificar un programa',
    'לבקר חברים': 'visitar a amigos',
    'להתקשר למשפחה': 'llamar a la familia',
    'לשלוח דואר': 'enviar correo',
    'לקבל חבילה': 'recibir un paquete',
    'לפתוח חשבון': 'abrir una cuenta',
    'לסגור עסקה': 'cerrar un trato',
    'חוב': 'deuda',
    'השקעה': 'inversión',
    'רווח': 'ganancia',
    'הפסד': 'pérdida',
    'שוק': 'mercado',
    'מניה': 'acción',
    'ביטוח': 'seguro',
    'משכנתא': 'hipoteca',
    'בנק': 'banco',
    'כרטיס אשראי': 'tarjeta de crédito',
    'חשבון': 'cuenta',
    'כספומט': 'cajero automático',
    'הלוואה': 'préstamo',
    'עמלה': 'comisión',
    'משכורת': 'sueldo',
    'הכנסה': 'ingreso',
    'הוצאה': 'gasto',
    'תקציב': 'presupuesto',
    'חיסכון': 'ahorro',
    'קנס': 'multa',
    'הוצאה לפועל': 'ejecución',
    'פנסיה': 'pensión',
    'תעודה': 'certificado',
    'תואר': 'título',
    'חינוך': 'educación',
    'מבחן': 'examen',
    'ציונים': 'notas',
    'שיעור': 'clase',
    'מרצה': 'profesor',
    'סטודנט': 'estudiante',
    'מכללה': 'colegio',
    'אוניברסיטה': 'universidad',
    'מחקר': 'investigación',
    'מעבדה': 'laboratorio',
    'תזה': 'tesis',
    'הרצאה': 'conferencia',
    'מלגה': 'beca',
    'תחבורה': 'transporte',
    'אוטובוס': 'autobús',
    'רכבת': 'tren',
    'מטוס': 'avión',
    'סירה': 'barco',
    'נמל': 'puerto',
    'תחנה': 'estación',
    'כרטיס': 'billete',
    'נהג': 'conductor',
    'נוסע': 'pasajero',
    'כביש': 'carretera',
    'רמזור': 'semáforo',
    'מדרכה': 'acera',
    'מסלול': 'ruta',
    'פנייה': 'giro',
    'נסיעה': 'viaje',
    'טיול': 'excursión',
    'חופשה': 'vacaciones',
    'מלון': 'hotel',
    'אוהל': 'tienda de campaña',
    'חדר': 'cuarto',
    'מיטה': 'cama',
    'שמיכה': 'manta',
    'כרית': 'almohada',
    'מקלחת': 'ducha',
    'סבון': 'jabón',
    'שמפו': 'champú',
    'מגבת': 'toalla',
    'מברשת שיניים': 'cepillo de dientes',
    'משחה': 'pasta',
    'שירותים': 'baño',
    'ברז': 'grifo',
    'מים חמים': 'agua caliente',
    'מים קרים': 'agua fría',
    'בדרך כלל': 'normalmente',
    'כפי שצריך': 'como debe ser',
    'אין ספק': 'sin duda',
    'לעומת זאת': 'en cambio',
    'ככל הנראה': 'probablemente',
    'בסופו של דבר': 'al final',
    'לא משנה': 'no importa',
    'זה תלוי': 'depende',
    'זה נראה לי': 'me parece',
    'אני חושב ש': 'creo que',
    'לדעתך': 'según tú',
    'באופן מפתיע': 'sorprendentemente',
    'למרבה המזל': 'afortunadamente',
    'למרבה הצער': 'desafortunadamente',
    'בלי ספק': 'sin duda alguna',
    'תוך כדי': 'mientras tanto',
    'בזמן ש...': 'mientras que...',
    'בכנות': 'honestamente',
    'להגיד את האמת': 'para ser sincero',
    'בוא נלך': 'vámonos',
    'בבקשה ממך': 'por favor, te lo pido',
    'לא משנה לי': 'me da igual',
    'אני לא בטוח': 'no estoy seguro',
    'אין לי מושג': 'no tengo idea',
    'אני מעדיף': 'prefiero',
    'הייתי רוצה': 'me gustaría',
    'אין צורך': 'no hace falta',
    'על מה אתה מדבר?': '¿de qué hablas?',
    'אתה צודק': 'tienes razón',
    'זה לא נכון': 'eso no es cierto',
    'בכוונה': 'intencionalmente',
    'בלי כוונה': 'sin querer',
    'אל תדאג': 'no te preocupes',
    'תרגע': 'tranquilízate',
    'אל תצעק': 'no grites',
    'תקשיב רגע': 'escucha un momento',
    'אני מסכים': 'estoy de acuerdo',
    'אני לא מסכים': 'no estoy de acuerdo',
    'זה חשוב לי': 'es importante para mí',
    'אני מתנצל': 'lo siento',
    'בפעם הבאה': 'la próxima vez',
    'תסביר לי': 'explícamelo',
    'מה אתה מתכוון?': '¿qué quieres decir?',
    'תענה לי': 'respóndeme',
    'תשאיר לי הודעה': 'déjame un mensaje',
    'אני אחשוב על זה': 'lo pensaré',
    'נדבר מחר': 'hablamos mañana',
    'נראה מה יקרה': 'veremos qué pasa',
    'הגיע הזמן': 'es hora',
    'יותר מדי': 'demasiado',
    'פחות או יותר': 'más o menos',
    'כל הזמן': 'todo el tiempo',
    'רוב הזמן': 'la mayor parte del tiempo',
    'לעיתים נדירות': 'raramente',
    'תעשה לי טובה': 'hazme un favor',
    'בלי לחץ': 'sin presión',
    'אין מצב': 'ni hablar',
    'מה פתאום': '¡de ninguna manera!',
    'נראה לי שכן': 'creo que sí',
    'נראה לי שלא': 'creo que no',
    'לא בא לי': 'no tengo ganas',
    'יאללה, בוא נלך': 'vamos, vámonos',
    'חבל על הזמן': 'es increíble / qué lástima de tiempo',
    'אני לא יכול יותר': 'no puedo más',
    'בא לי לישון': 'tengo ganas de dormir',
    'כבר חוזר': 'vuelvo enseguida',
    'אני באמצע משהו': 'estoy en medio de algo',
    'בוא ננסה': 'intentémoslo',
    'לא נורא': 'no pasa nada',
    'עזוב את זה': 'olvídalo',
    'מה אתה רציני?': '¿hablas en serio?',
    'חכה רגע': 'espera un momento',
    'קח את הזמן': 'tómate tu tiempo',
    'מה הבעיה?': '¿cuál es el problema?',
    'אני בדרך': 'estoy en camino',
    'זה לא בשבילי': 'eso no es para mí',
    'לא בא בחשבון': 'ni pensarlo',
    'יש לי רעיון': 'tengo una idea',
    'תפסיק עם זה': 'deja de hacer eso',
    'תחשוב על זה': 'piénsalo',
    'מה דעתך על...?': '¿qué opinas de...?',
    'אין לי כוח': 'no tengo energía / no tengo ganas',
    'סמוך עליי': 'confía en mí',
    'אני איתך': 'estoy contigo',
    'מה נסגר איתך?': '¿qué te pasa?',
    'אין עליך': '¡eres el mejor!',
    'תן לי יד': 'échame una mano',
    'תן גז': '¡dale! / ¡rápido!',
    'חבל על כל מילה': 'no hace falta decir más',
    'יאללה, תתקדם': 'vamos, sigue adelante',
    'אין מה לעשות': 'no hay nada que hacer',
    'אין מה לדאוג': 'no hay de qué preocuparse',
    'זה מה יש': 'es lo que hay',
    'ככה זה': 'así es',
    'מה נעשה?': '¿qué vamos a hacer?',
    'זה לא סוף העולם': 'no es el fin del mundo',
    'ניסיתי הכל': 'lo he intentado todo',
    'לא הסתדר לי': 'no me funcionó',
    'זה הלך טוב': 'salió bien',
    'היה שווה את זה': 'valió la pena',
    'לא ציפיתי לזה': 'no lo esperaba',
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
        if (currentLevel === 6) return wordIndex >= 200 && wordIndex < 350;
        if (currentLevel === 7) return wordIndex >= 350 && wordIndex < 450;
        if (currentLevel === 8) return wordIndex >= 550;
        
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