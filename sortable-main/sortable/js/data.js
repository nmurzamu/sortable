const INITIAL_DATABASE = [
    // --- НАРУТО ---
    { id: 1, universe: "Наруто", name: "Naruto Uzumaki", origin: "Коноха", rank: "7-й Хокаге", elements: ["🌀", "🔥"], jutsus: ["Расенган", "Режим Мудреца"], stats: { "Атака": 99, "Защита": 90, "Скорость": 95 }, img: "34249dcd8d0d8d6c7103d2d3be278f0e.jpg" },
    { id: 2, universe: "Наруто", name: "Sasuke Uchiha", origin: "Коноха", rank: "Теневой Хокаге", elements: ["⚡", "🔥"], jutsus: ["Чидори", "Сусаноо"], stats: { "Атака": 98, "Защита": 92, "Скорость": 99 }, img: "5253349ef35d686e4a3e11b4ae8db3a1.jpg" },
    { id: 3, universe: "Наруто", name: "Madara Uchiha", origin: "Клан Учиха", rank: "Легенда", elements: ["🔥", "👁️"], jutsus: ["Метеорит", "Муген Цукуеми"], stats: { "Атака": 100, "Защита": 100, "Скорость": 90 }, img: "3734949ef3a2572d1ee0c6005b304f35.jpg" },
    { id: 4, universe: "Наруто", name: "Kakashi Hatake", origin: "Коноха", rank: "6-й Хокаге", elements: ["⚡", "💧"], jutsus: ["Райкири", "Камуи"], stats: { "Атака": 88, "Защита": 85, "Скорость": 90 }, img: "e14cf7759645ca65a7be50bb371bd494.jpg" },
    { id: 5, universe: "Наруто", name: "Itachi Uchiha", origin: "Акацуки", rank: "S-Ранг", elements: ["🔥", "👁️"], jutsus: ["Цукуеми", "Аматерасу"], stats: { "Атака": 95, "Защита": 85, "Скорость": 92 }, img: "5f5726232f121ca0391fcfc36a70242c.jpg" },
    { id: 6, universe: "Наруто", name: "Minato Namikaze", origin: "Коноха", rank: "4-й Хокаге", elements: ["🌀", "⚡"], jutsus: ["Хирайшин", "Расенган"], stats: { "Атака": 94, "Защита": 80, "Скорость": 100 }, img: "ba317253f73261b289e30e90934e9c7e.jpg" },
    { id: 7, universe: "Наруто", name: "Gaara", origin: "Песок", rank: "Казекаге", elements: ["⏳"], jutsus: ["Песчаный гроб", "Защита Шукаку"], stats: { "Атака": 85, "Защита": 100, "Скорость": 70 }, img: "c45a1e11a863444cb2b73950381fc7d6.jpg" },
    { id: 8, universe: "Наруто", name: "Jiraiya", origin: "Коноха", rank: "Саннин", elements: ["🔥", "🐸"], jutsus: ["Расенган", "Режим Жабы"], stats: { "Атака": 90, "Защита": 85, "Скорость": 80 }, img: "c879ebe8b20fb10d304f6dcbb3fcc3cd.jpg" },
    { id: 9, universe: "Наруто", name: "Pain", origin: "Аме", rank: "Бог", elements: ["🌀"], jutsus: ["Шинра Тенсей", "Чибаку Тенсей"], stats: { "Атака": 100, "Защита": 95, "Скорость": 85 }, img: "575469642614732872aaf6ffca67e7bf.jpg" },
    { id: 10, universe: "Наруто", name: "Hinata Hyuga", origin: "Коноха", rank: "Чунин", elements: ["👁️"], jutsus: ["64 ладони", "Бьякуган"], stats: { "Атака": 75, "Защита": 80, "Скорость": 85 }, img: "f1e8188312f95005006853ac20a37c67.jpg" },

    // --- АТАКА ТИТАНОВ ---
    { id: 11, universe: "Атака Титанов", name: "Eren Yeager", origin: "Парадиз", rank: "Прародитель", elements: ["🦴", "🔥"], jutsus: ["Дрожь земли", "Атакующий титан"], stats: { "Атака": 100, "Защита": 90, "Скорость": 85 }, img: "" },
    { id: 12, universe: "Атака Титанов", name: "Levi Ackerman", origin: "Разведкорпус", rank: "Капитан", elements: ["⚔️"], jutsus: ["Мастер УПМ", "Аккерман"], stats: { "Атака": 100, "Защита": 80, "Скорость": 100 }, img: "" },
    { id: 13, universe: "Атака Титанов", name: "Mikasa Ackerman", origin: "Разведкорпус", rank: "Солдат", elements: ["⚔️"], jutsus: ["Защита Эрена", "УПМ"], stats: { "Атака": 95, "Защита": 85, "Скорость": 95 }, img: "" },
    { id: 14, universe: "Атака Титанов", name: "Armin Arlert", origin: "Разведкорпус", rank: "Колосс", elements: ["💥"], jutsus: ["Стратегия", "Взрыв"], stats: { "Атака": 90, "Защита": 70, "Скорость": 40 }, img: "" },
    { id: 15, universe: "Атака Титанов", name: "Reiner Braun", origin: "Марлия", rank: "Бронированный", elements: ["🛡️"], jutsus: ["Таран", "Броня"], stats: { "Атака": 85, "Защита": 100, "Скорость": 60 }, img: "" },
    { id: 16, universe: "Атака Титанов", name: "Annie Leonhart", origin: "Марлия", rank: "Женская особь", elements: ["💎"], jutsus: ["Кристаллизация", "Боевые искусства"], stats: { "Атака": 88, "Защита": 90, "Скорость": 92 }, img: "" },
    { id: 17, universe: "Атака Титанов", name: "Zeke Yeager", origin: "Марлия", rank: "Звероподобный", elements: ["🐒"], jutsus: ["Метание камней", "Координата"], stats: { "Атака": 95, "Защита": 70, "Скорость": 50 }, img: "" },
    { id: 18, universe: "Атака Титанов", name: "Erwin Smith", origin: "Разведкорпус", rank: "Командор", elements: ["⚔️"], jutsus: ["Charge!", "Тактика"], stats: { "Атака": 80, "Защита": 75, "Скорость": 85 }, img: "" },

    // --- ТОКИЙСКИЙ ГУЛЬ ---
    { id: 19, universe: "Токийский Гуль", name: "Ken Kaneki", origin: "Антейку", rank: "SSS", elements: ["🩸"], jutsus: ["Какуджа", "Ринкаку"], stats: { "Атака": 100, "Защита": 90, "Скорость": 95 }, img: "" },
    { id: 20, universe: "Токийский Гуль", name: "Touka Kirishima", origin: "Антейку", rank: "S+", elements: ["🦋"], jutsus: ["Укаку", "Скорость"], stats: { "Атака": 82, "Защита": 70, "Скорость": 100 }, img: "" },
    { id: 21, universe: "Токийский Гуль", name: "Kisho Arima", origin: "CCG", rank: "Бог смерти", elements: ["⚔️"], jutsus: ["Куинке IXA", "Наруками"], stats: { "Атака": 100, "Защита": 95, "Скорость": 100 }, img: "" },
    { id: 22, universe: "Токийский Гуль", name: "Juzo Suzuya", origin: "CCG", rank: "Следователь", elements: ["🔪"], jutsus: ["Джейсон 13", "Безумие"], stats: { "Атака": 94, "Защита": 70, "Скорость": 98 }, img: "" },
    { id: 23, universe: "Токийский Гуль", name: "Ayato Kirishima", origin: "Аогири", rank: "SS", elements: ["🦋"], jutsus: ["Укаку крылья", "Стрельба"], stats: { "Атака": 88, "Защита": 75, "Скорость": 95 }, img: "" },
    { id: 24, universe: "Токийский Гуль", name: "Eto Yoshimura", origin: "Аогири", rank: "SSS", elements: ["🦉"], jutsus: ["Сова", "Какуджа"], stats: { "Атака": 98, "Защита": 96, "Скорость": 90 }, img: "" },

    // --- ТЕТРАДЬ СМЕРТИ ---
    { id: 25, universe: "Тетрадь Смерти", name: "Light Yagami", origin: "Кира", rank: "Бог мира", elements: ["📓"], jutsus: ["Тетрадь Смерти", "Интеллект"], stats: { "Атака": 100, "Защита": 30, "Скорость": 40 }, img: "" },
    { id: 26, universe: "Тетрадь Смерти", name: "L Lawliet", origin: "Детектив", rank: "L", elements: ["🔍"], jutsus: ["Дедукция", "Анализ"], stats: { "Атака": 50, "Защита": 40, "Скорость": 60 }, img: "" },
    { id: 27, universe: "Тетрадь Смерти", name: "Ryuk", origin: "Мир Синигами", rank: "Бог Смерти", elements: ["🍎"], jutsus: ["Глаза Синигами", "Полет"], stats: { "Атака": 100, "Защита": 100, "Скорость": 80 }, img: "" },
    { id: 28, universe: "Тетрадь Смерти", name: "Near", origin: "SPK", rank: "Преемник", elements: ["🧩"], jutsus: ["Логика", "Игры"], stats: { "Атака": 20, "Защита": 20, "Скорость": 30 }, img: "" },
    { id: 29, universe: "Тетрадь Смерти", name: "Misa Amane", origin: "Кира", rank: "Модель", elements: ["👁️"], jutsus: ["Второй Кира", "Глаза"], stats: { "Атака": 80, "Защита": 40, "Скорость": 50 }, img: "" }
];

// Логика объединения предустановленных героев и тех, кого добавил пользователь
let customHeroes = JSON.parse(localStorage.getItem('custom_heroes')) || [];
let DATABASE = [...INITIAL_DATABASE, ...customHeroes];