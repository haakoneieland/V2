// ======================================================
// GAME STATE & DATA - MED NYE BILDER OG FIENDER
// ======================================================

let gameState = {
    coins: 0,
    gems: 0,
    prestigePoints: 0,
    level: 1,
    enemyNumber: 1,
    maxEnemyReached: 1,
    bossCleared: {},
    baseDamagePerClick: 10,
    damageUpgrades: 0,
    autoDamage: 0,
    critChance: 5,
    critUpgrades: 0,
    autoUpgrades: 0,
    critMultiplier: 2.0,
    itemDamageMultiplier: 1,
    prestigeMultiplier: 1,
    currentEnemyHP: 100,
    maxEnemyHP: 100,
    bossTimer: 60,
    bossTimerInterval: null,
    currentBiome: 'grass',
    dailyCrateAvailable: true,
    lastDailyCrate: null,
    autoAttack: false,
    autoAttackInterval: null,
    totalDamageDealt: 0,
    totalEnemiesDefeated: 0,
    totalBossesDefeated: 0,
    totalCratesOpened: 0,
    difficultyMultiplier: 1.0,
    enteredCodes: []
};

// DINE BILDE-URL-ER FOR GITHUB PAGES
const baseURL = 'https://raw.githubusercontent.com/haakoneieland/Brainrot-clicker/main/';

// Bakgrunnsbilder for biomer (dekker hele skjermen) - NYE NAVN
const backgroundImages = {
    grass: baseURL + 'Bakgrunn1.png.PNG',
    desert: baseURL + 'Bakgrunn2.png.PNG',
    snow: baseURL + 'Bakgrunn3.png.PNG',
    lava: baseURL + 'Bakgrunn4.png.PNG',
    swamp: baseURL + 'Bakgrunn5.png.PNG',
    ocean: baseURL + 'Bakgrunn6.png.PNG',
    jungle: baseURL + 'Bakgrunn7.png.PNG',
    mountain: baseURL + 'Bakgrunn8.png.PNG',
    ruins: baseURL + 'Bakgrunn9.png.PNG',
    void: baseURL + 'Bakgrunn10.png.PNG'
};

// Fiende-bilder - NYE NAVN: fiende1a.PNG, fiende2a.PNG osv.
const enemyImages = {
    grass: baseURL + 'fiende1a.PNG',
    desert: baseURL + 'fiende2a.PNG',
    snow: baseURL + 'fiende3a.PNG',
    lava: baseURL + 'fiende4a.PNG',
    swamp: baseURL + 'fiende5a.PNG',
    ocean: baseURL + 'fiende6a.PNG',
    jungle: baseURL + 'fiende7a.PNG',
    mountain: baseURL + 'fiende8a.PNG',
    ruins: baseURL + 'fiende9a.PNG',
    void: baseURL + 'fiende10a.PNG'
};

// Boss-bilder - NYE NAVN: fiende1b.PNG, fiende2b.PNG osv.
const bossImages = {
    grass: baseURL + 'fiende1b.PNG',
    desert: baseURL + 'fiende2b.PNG',
    snow: baseURL + 'fiende3b.PNG',
    lava: baseURL + 'fiende4b.PNG',
    swamp: baseURL + 'fiende5b.PNG',
    ocean: baseURL + 'fiende6b.PNG',
    jungle: baseURL + 'fiende7b.PNG',
    mountain: baseURL + 'fiende8b.PNG',
    ruins: baseURL + 'fiende9b.PNG',
    void: baseURL + 'fiende10b.PNG'
};

// Boss ikon - Legger til boss.png over bossene
const bossIcon = baseURL + 'boss.png';

// UI Ikoner - NYE BILDER
const uiIcons = {
    coin: baseURL + 'Coin.png.PNG',
    gem: baseURL + 'Diamond.png.PNG',
    star: baseURL + 'Star.png.PNG',
    crateClosed: baseURL + 'Basiccrate.png.PNG',
    crateOpen: baseURL + 'Basiccrate%C3%A5pen.png.PNG'
};

// Crate-bilder for forskjellige rarities
const crateImages = {
    basic: {
        closed: baseURL + 'Basiccrate.png.PNG',
        open: baseURL + 'Basiccrate%C3%A5pen.png.PNG'
    },
    advanced: {
        closed: baseURL + 'Advancedcrate.png.PNG',
        open: baseURL + 'Advancedcrate%C3%A5pen.png.PNG'
    },
    premium: {
        closed: baseURL + 'Premiumcrate.png.PNG',
        open: baseURL + 'Premiumcrate%C3%A5pen.png.PNG'
    },
    pet: {
        closed: baseURL + 'Petcrate.png.PNG',
        open: baseURL + 'Petcrate%C3%A5pen.png.PNG'
    },
    godly: {
        closed: baseURL + 'Godlycrate.png.PNG',
        open: baseURL + 'Godlycrate%C3%A5pen.png.PNG'
    },
    pet_godly: {
        closed: baseURL + 'Godlypetcrate.png.PNG',
        open: baseURL + 'Godlypetcrate%C3%A5pen.png.PNG'
    },
    daily: {
        closed: baseURL + 'Dailycrate.png.PNG',
        open: baseURL + 'Dailycrate%C3%A5pen.png.PNG'
    },
    godly_crate: {
        closed: baseURL + 'Godlycrate.png.PNG',
        open: baseURL + 'Godlycrate%C3%A5pen.png.PNG'
    }
};

// Items Database - NYE BILDER
const items = {
    weapons: [
        { 
            id: 'wood_sword', 
            name: 'Wood Sword', 
            icon: baseURL + 'Woodensword.png.PNG',
            rarity: 'common', 
            damage: 1.1, 
            required: 2 
        },
        { 
            id: 'iron_sword', 
            name: 'Iron Sword', 
            icon: baseURL + 'Ironsword.png.PNG',
            rarity: 'rare', 
            damage: 1.3, 
            required: 3 
        },
        { 
            id: 'steel_sword', 
            name: 'Steel Sword', 
            icon: baseURL + 'Steelsword.png.PNG',
            rarity: 'epic', 
            damage: 1.6, 
            required: 4 
        },
        { 
            id: 'dragon_sword', 
            name: 'Dragon Sword', 
            icon: baseURL + 'Dragonsword.png.PNG',
            rarity: 'legendary', 
            damage: 2.0, 
            required: 5 
        },
        { 
            id: 'excalibur', 
            name: 'Excalibur', 
            icon: baseURL + 'Excalibur.png.PNG',
            rarity: 'ultimate', 
            damage: 3.0, 
            required: 6 
        },
        { 
            id: 'godslayer', 
            name: 'Godslayer', 
            icon: baseURL + 'Godslayer.png.PNG',
            rarity: 'godly', 
            damage: 5.0, 
            required: 8 
        }
    ],
    armor: [
        { 
            id: 'leather_armor', 
            name: 'Leather Armor', 
            icon: baseURL + 'Woodenarmour.png.PNG',
            rarity: 'common', 
            defense: 1.1, 
            required: 2 
        },
        { 
            id: 'chainmail', 
            name: 'Chainmail', 
            icon: baseURL + 'Chainmail.png.PNG',
            rarity: 'rare', 
            defense: 1.2, 
            required: 3 
        },
        { 
            id: 'plate_armor', 
            name: 'Plate Armor', 
            icon: baseURL + 'Platearmour.png.PNG',
            rarity: 'epic', 
            defense: 1.4, 
            required: 4 
        },
        { 
            id: 'dragon_armor', 
            name: 'Dragon Armor', 
            icon: baseURL + 'Dragonarmour.png.PNG',
            rarity: 'legendary', 
            defense: 1.8, 
            required: 5 
        }
    ],
    pets: [
        { 
            id: 'cat', 
            name: 'Lucky Cat', 
            icon: baseURL + 'Luckycat.png.PNG',
            rarity: 'common', 
            bonus: { coins: 1.1 } 
        },
        { 
            id: 'dog', 
            name: 'Guard Dog', 
            icon: baseURL + 'Guarddog.png.PNG',
            rarity: 'rare', 
            bonus: { damage: 1.1 } 
        },
        { 
            id: 'owl', 
            name: 'Wise Owl', 
            icon: baseURL + 'Wiseowl.png.PNG',
            rarity: 'epic', 
            bonus: { crit: 5, auto: 1 } 
        },
        { 
            id: 'dragon', 
            name: 'Baby Dragon', 
            icon: baseURL + 'Babydrage.png.PNG',
            rarity: 'legendary', 
            bonus: { damage: 1.3, crit: 10 } 
        },
        { 
            id: 'phoenix', 
            name: 'Phoenix', 
            icon: baseURL + 'F%C3%B8nix.png.PNG',
            rarity: 'ultimate', 
            bonus: { damage: 1.5, auto: 5, gems: 1.2 } 
        },
        { 
            id: 'unicorn', 
            name: 'Unicorn', 
            icon: baseURL + 'Uinicorn.png.PNG',
            rarity: 'godly', 
            bonus: { damage: 2.0, crit: 15, coins: 1.5, gems: 1.5 } 
        }
    ],
    artifacts: [
        { 
            id: 'lucky_coin', 
            name: 'Lucky Coin', 
            icon: baseURL + 'Luckycoin.png.PNG',
            rarity: 'common', 
            bonus: { coins: 1.05 } 
        },
        { 
            id: 'crit_gem', 
            name: 'Crit Gem', 
            icon: baseURL + 'Critgem.png.PNG',
            rarity: 'rare', 
            bonus: { crit: 3 } 
        },
        { 
            id: 'damage_orb', 
            name: 'Damage Orb', 
            icon: baseURL + 'Damageorb.png.PNG',
            rarity: 'epic', 
            bonus: { damage: 1.2 } 
        },
        { 
            id: 'auto_core', 
            name: 'Auto Core', 
            icon: baseURL + 'Autocore.png.PNG',
            rarity: 'legendary', 
            bonus: { auto: 10 } 
        },
        { 
            id: 'boss_trophy', 
            name: 'Boss Trophy', 
            icon: baseURL + 'Bosstropthy.png.PNG',
            rarity: 'ultimate', 
            bonus: { damage: 1.5, crit: 10 } 
        },
        { 
            id: 'divine_relic', 
            name: 'Divine Relic', 
            icon: baseURL + 'Divinerelic.png.PNG',
            rarity: 'godly', 
            bonus: { damage: 2.0, crit: 20, coins: 1.5, gems: 1.5 } 
        }
    ]
};

// Inventory System
let inventory = {
    weapons: {},
    armor: {},
    pets: {},
    artifacts: {},
    activePet: null
};

// Achievements System
const achievements = [
    {
        id: 'first_kill',
        name: 'First Blood',
        icon: baseURL + 'Star.png.PNG',
        desc: 'Defeat your first enemy',
        condition: () => gameState.totalEnemiesDefeated >= 1,
        progress: () => Math.min(gameState.totalEnemiesDefeated, 1),
        total: 1,
        reward: { coins: 100 },
        claimed: false
    },
    {
        id: 'first_boss',
        name: 'Boss Slayer',
        icon: baseURL + 'Star.png.PNG',
        desc: 'Defeat your first boss',
        condition: () => gameState.totalBossesDefeated >= 1,
        progress: () => Math.min(gameState.totalBossesDefeated, 1),
        total: 1,
        reward: { gems: 5, crate: 'basic' },
        claimed: false
    },
    {
        id: 'boss_master',
        name: 'Boss Master',
        icon: baseURL + 'Star.png.PNG',
        desc: 'Defeat 10 bosses',
        condition: () => gameState.totalBossesDefeated >= 10,
        progress: () => Math.min(gameState.totalBossesDefeated, 10),
        total: 10,
        reward: { gems: 25, crate: 'advanced', item: 'dragon_sword' },
        claimed: false
    },
    {
        id: 'millionaire',
        name: 'Millionaire',
        icon: baseURL + 'Star.png.PNG',
        desc: 'Collect 1,000,000 coins',
        condition: () => gameState.coins >= 1000000,
        progress: () => Math.min(gameState.coins, 1000000),
        total: 1000000,
        reward: { gems: 100, prestige: 1, crate: 'premium' },
        claimed: false
    },
    {
        id: 'crate_collector',
        name: 'Crate Collector',
        icon: baseURL + 'Star.png.PNG',
        desc: 'Open 50 crates',
        condition: () => gameState.totalCratesOpened >= 50,
        progress: () => Math.min(gameState.totalCratesOpened, 50),
        total: 50,
        reward: { gems: 50, crate: 'pet_godly', item: 'phoenix' },
        claimed: false
    },
    {
        id: 'damage_dealer',
        name: 'Damage Dealer',
        icon: baseURL + 'Star.png.PNG',
        desc: 'Deal 1,000,000 total damage',
        condition: () => gameState.totalDamageDealt >= 1000000,
        progress: () => Math.min(gameState.totalDamageDealt, 1000000),
        total: 1000000,
        reward: { coins: 5000, gems: 20, item: 'damage_orb' },
        claimed: false
    },
    {
        id: 'first_prestige',
        name: 'Ascension',
        icon: baseURL + 'Star.png.PNG',
        desc: 'Reach your first prestige',
        condition: () => gameState.prestigePoints >= 1,
        progress: () => Math.min(gameState.prestigePoints, 1),
        total: 1,
        reward: { gems: 50, crate: 'premium' },
        claimed: false
    },
    {
        id: 'prestige_master',
        name: 'Prestige Master',
        icon: baseURL + 'Star.png.PNG',
        desc: 'Reach 5 prestige levels',
        condition: () => gameState.prestigePoints >= 5,
        progress: () => Math.min(gameState.prestigePoints, 5),
        total: 5,
        reward: { gems: 100, crate: 'pet_godly', item: 'divine_relic' },
        claimed: false
    },
    {
        id: 'prestige_legend',
        name: 'Prestige Legend',
        icon: baseURL + 'Star.png.PNG',
        desc: 'Reach 10 prestige levels',
        condition: () => gameState.prestigePoints >= 10,
        progress: () => Math.min(gameState.prestigePoints, 10),
        total: 10,
        reward: { gems: 250, prestige: 1, crate: 'premium' },
        claimed: false
    }
];

// Quests System
const quests = {
    daily: [
        {
            id: 'daily_kill_20',
            title: 'Enemy Slayer',
            desc: 'Defeat 20 enemies',
            difficulty: 'easy',
            type: 'kill',
            progress: 0,
            total: 20,
            reward: { coins: 500 },
            completed: false,
            claimed: false
        },
        {
            id: 'daily_boss_1',
            title: 'Boss Hunter',
            desc: 'Defeat 1 boss',
            difficulty: 'medium',
            type: 'boss',
            progress: 0,
            total: 1,
            reward: { gems: 3, crate: 'basic' },
            completed: false,
            claimed: false
        },
        {
            id: 'daily_crate_3',
            title: 'Crate Opener',
            desc: 'Open 3 crates',
            difficulty: 'hard',
            type: 'crate',
            progress: 0,
            total: 3,
            reward: { coins: 1000, gems: 1 },
            completed: false,
            claimed: false
        }
    ],
    weekly: [
        {
            id: 'weekly_kill_200',
            title: 'Mass Destruction',
            desc: 'Defeat 200 enemies',
            difficulty: 'hard',
            type: 'kill',
            progress: 0,
            total: 200,
            reward: { coins: 5000, gems: 10, crate: 'advanced' },
            completed: false,
            claimed: false
        },
        {
            id: 'weekly_boss_5',
            title: 'Boss Exterminator',
            desc: 'Defeat 5 bosses',
            difficulty: 'insane',
            type: 'boss',
            progress: 0,
            total: 5,
            reward: { coins: 10000, gems: 25, crate: 'premium' },
            completed: false,
            claimed: false
        }
    ],
    special: [
        {
            id: 'special_prestige',
            title: 'Ascension',
            desc: 'Reach prestige level 5',
            difficulty: 'insane',
            type: 'prestige',
            progress: 0,
            total: 5,
            reward: { coins: 50000, gems: 100, prestige: 5, crate: 'premium' },
            completed: false,
            claimed: false
        }
    ]
};

// Biome System
const biomes = [
    { 
        name: 'grass', 
        color: '#43e97b',
        enemyType: 'Grass',
        bgImage: backgroundImages.grass
    },
    { 
        name: 'desert', 
        color: '#f6d365',
        enemyType: 'Desert',
        bgImage: backgroundImages.desert
    },
    { 
        name: 'snow', 
        color: '#a1c4fd',
        enemyType: 'Snow',
        bgImage: backgroundImages.snow
    },
    { 
        name: 'lava', 
        color: '#ff9a9e',
        enemyType: 'Lava',
        bgImage: backgroundImages.lava
    },
    { 
        name: 'swamp', 
        color: '#4facfe',
        enemyType: 'Swamp',
        bgImage: backgroundImages.swamp
    },
    { 
        name: 'ocean', 
        color: '#4facfe',
        enemyType: 'Ocean',
        bgImage: backgroundImages.ocean
    },
    { 
        name: 'jungle', 
        color: '#43e97b',
        enemyType: 'Jungle',
        bgImage: backgroundImages.jungle
    },
    { 
        name: 'mountain', 
        color: '#a1c4fd',
        enemyType: 'Mountain',
        bgImage: backgroundImages.mountain
    },
    { 
        name: 'ruins', 
        color: '#f6d365',
        enemyType: 'Ruins',
        bgImage: backgroundImages.ruins
    },
    { 
        name: 'void', 
        color: '#667eea',
        enemyType: 'Void',
        bgImage: backgroundImages.void
    }
];

// Crate Probabilities
const crateProbabilities = {
    basic: {
        common: 60,
        rare: 25,
        epic: 15
    },
    advanced: {
        rare: 50,
        epic: 35,
        legendary: 15
    },
    premium: {
        epic: 40,
        legendary: 35,
        ultimate: 20,
        godly: 5
    },
    pet: {
        common: 50,
        rare: 30,
        epic: 15,
        legendary: 4,
        ultimate: 1
    },
    pet_godly: {
        epic: 20,
        legendary: 40,
        ultimate: 30,
        godly: 10
    },
    daily: {
        common: 40,
        rare: 25,
        epic: 20,
        legendary: 10,
        ultimate: 4,
        godly: 1
    },
    godly_crate: {
        ultimate: 30,
        godly: 70
    }
};

// ======================================================
// GAME INITIALIZATION
// ======================================================

function init() {
    loadGame();
    setupEventListeners();
    spawnEnemy();
    updateUI();
    startAutoSave();
    checkDailyReset();
    updateUpgradeCosts();
    renderCrates();
    updatePrestigeButton();
    
    // Oppdater UI ikoner
    updateUIIcons();
    
    // Start auto attack if enabled
    if (gameState.autoAttack) {
        startAutoAttack();
    }
}

function updateUIIcons() {
    // Oppdater top resources ikoner
    document.querySelectorAll('.resource-icon[data-type="coin"]').forEach(el => {
        el.innerHTML = `<img src="${uiIcons.coin}" style="width:20px;height:20px;">`;
    });
    
    document.querySelectorAll('.resource-icon[data-type="gem"]').forEach(el => {
        el.innerHTML = `<img src="${uiIcons.gem}" style="width:20px;height:20px;">`;
    });
    
    document.querySelectorAll('.resource-icon[data-type="star"]').forEach(el => {
        el.innerHTML = `<img src="${uiIcons.star}" style="width:20px;height:20px;">`;
    });
}

function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const page = btn.dataset.page;
            navigateToPage(page);
        });
    });
    
    // Prestige button
    const prestigeBtn = document.getElementById('prestigeBtn');
    if (prestigeBtn) {
        prestigeBtn.addEventListener('click', showPrestigeModal);
    }
    
    // Shop prestige button
    const shopPrestigeBtn = document.getElementById('shopPrestigeBtn');
    if (shopPrestigeBtn) {
        shopPrestigeBtn.addEventListener('click', showPrestigeModal);
    }
    
    // Enemy touch events for mobile
    const enemy = document.getElementById('enemy');
    if (enemy) {
        enemy.addEventListener('touchstart', (e) => {
            e.preventDefault();
            attack();
        }, { passive: false });
        
        enemy.addEventListener('touchend', (e) => {
            e.preventDefault();
        }, { passive: false });
    }
}

function navigateToPage(page) {
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.page === page) {
            btn.classList.add('active');
        }
    });
    
    // Update pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
        if (p.dataset.page === page) {
            p.classList.add('active');
        }
    });
    
    // Render specific page content
    if (page === 'achievements') {
        renderAchievements();
    } else if (page === 'inventory') {
        renderInventory();
    } else if (page === 'shop') {
        updateShop();
    } else if (page === 'quests') {
        renderQuests();
    }
}

// ======================================================
// COMBAT SYSTEM - OPPDATERET FOR NYE FIENDER
// ======================================================

function calculateDamage() {
    // Base damage fra permanent upgrades
    const baseDamage = gameState.baseDamagePerClick + (gameState.damageUpgrades * 2);
    
    // Start med base damage
    let totalDamage = baseDamage;
    
    // Samle alle damage multipliers fra items
    let itemMultiplier = 1;
    
    // Hent alle aktive items og beregn total multiplier
    if (inventory.activePet && inventory.activePet.bonus && inventory.activePet.bonus.damage) {
        itemMultiplier *= inventory.activePet.bonus.damage;
    }
    
    // Sjekk andre items (våpen, rustning, artifacts)
    for (const category in inventory) {
        if (category !== 'activePet') {
            for (const itemId in inventory[category]) {
                const itemData = inventory[category][itemId];
                if (itemData.item.damage) {
                    // For hvert nivå av item, multipliser med damage multiplier
                    for (let i = 0; i < itemData.level; i++) {
                        itemMultiplier *= itemData.item.damage;
                    }
                }
            }
        }
    }
    
    // Beregn total damage med alle multipliers
    totalDamage = baseDamage * itemMultiplier * gameState.prestigeMultiplier;
    
    // Sjekk crit
    const isCrit = Math.random() * 100 < (gameState.critChance + gameState.critUpgrades);
    
    if (isCrit) {
        totalDamage *= gameState.critMultiplier;
        showCritEffect();
    }
    
    return { damage: Math.max(1, Math.floor(totalDamage)), isCrit };
}

function attack() {
    const { damage, isCrit } = calculateDamage();
    
    // Apply damage
    gameState.currentEnemyHP -= damage;
    gameState.totalDamageDealt += damage;
    
    // Shake enemy
    const enemy = document.getElementById('enemy');
    if (enemy) {
        enemy.classList.add('shaking');
        setTimeout(() => enemy.classList.remove('shaking'), 150);
    }
    
    // Show damage number
    showDamageNumber(damage, isCrit);
    
    // Check if enemy defeated
    if (gameState.currentEnemyHP <= 0) {
        enemyDefeated();
    } else {
        updateEnemyHP();
    }
    
    // Update quest progress
    updateQuestProgress('damage', damage);
    
    // Update UI
    updateResources();
    saveGame();
}

function showDamageNumber(damage, isCrit) {
    const enemy = document.getElementById('enemy');
    if (!enemy) return;
    
    const damageText = document.createElement('div');
    damageText.textContent = `-${formatNumber(damage)}`;
    damageText.style.cssText = `
        position: absolute;
        color: ${isCrit ? '#FFD700' : '#fff'};
        font-weight: bold;
        font-size: ${isCrit ? '20px' : '16px'};
        text-shadow: 0 0 5px ${isCrit ? 'rgba(255,215,0,0.8)' : 'rgba(255,0,0,0.8)'};
        z-index: 1000;
        pointer-events: none;
        animation: floatUp 1s ease-out forwards;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `;
    
    enemy.appendChild(damageText);
    
    setTimeout(() => {
        if (damageText.parentNode) {
            damageText.remove();
        }
    }, 1000);
}

function showCritEffect() {
    const enemy = document.getElementById('enemy');
    if (enemy) {
        enemy.style.filter = 'brightness(1.5) drop-shadow(0 0 10px gold)';
        setTimeout(() => {
            enemy.style.filter = '';
        }, 300);
    }
}

function enemyDefeated() {
    const isBoss = gameState.enemyNumber === 9;
    
    // Calculate rewards
    const baseCoinReward = Math.floor(
        Math.pow(1.5, gameState.level) * 
        gameState.enemyNumber * 
        10 * 
        gameState.prestigeMultiplier
    );
    
    let coinReward = Math.floor(baseCoinReward / gameState.difficultyMultiplier);
    let gemReward = 0;
    let crateReward = null;
    let itemReward = null;
    
    if (isBoss) {
        // BOSS REWARDS
        coinReward = Math.floor(coinReward * 5);
        gemReward = Math.floor(gameState.level * 2 * gameState.prestigeMultiplier);
        gameState.bossCleared[gameState.level] = true;
        gameState.totalBossesDefeated++;
        
        // Boss har 50% sjanse for crate drop
        if (Math.random() < 0.5) {
            const crateRoll = Math.random();
            if (crateRoll < 0.6) {
                crateReward = 'basic';
            } else if (crateRoll < 0.85) {
                crateReward = 'advanced';
            } else {
                crateReward = 'premium';
            }
        }
        
        // Boss har 15% sjanse for item drop
        if (Math.random() < 0.15) {
            const itemRoll = Math.random();
            const allItems = [...items.weapons, ...items.armor, ...items.artifacts];
            let rarity;
            
            if (itemRoll < 0.6) {
                rarity = 'rare';
            } else if (itemRoll < 0.85) {
                rarity = 'epic';
            } else if (itemRoll < 0.95) {
                rarity = 'legendary';
            } else {
                rarity = 'ultimate';
            }
            
            const rarityItems = allItems.filter(item => item.rarity === rarity);
            if (rarityItems.length > 0) {
                itemReward = rarityItems[Math.floor(Math.random() * rarityItems.length)];
            }
        }
        
        // Clear boss timer
        if (gameState.bossTimerInterval) {
            clearInterval(gameState.bossTimerInterval);
            gameState.bossTimerInterval = null;
        }
        const bossTimerContainer = document.getElementById('bossTimerContainer');
        if (bossTimerContainer) bossTimerContainer.style.display = 'none';
        
        // Update quest progress
        updateQuestProgress('boss', 1);
        
        // Vis boss loot
        showMessage('🏆 BOSS DEFEATED! 🏆', 
            `Rewards:\n<img src="${uiIcons.coin}" style="width:16px;height:16px;"> +${formatNumber(coinReward)} Coins\n<img src="${uiIcons.gem}" style="width:16px;height:16px;"> +${gemReward} Gems` +
            (crateReward ? `\n<img src="${crateImages[crateReward].closed}" style="width:16px;height:16px;"> ${crateReward.charAt(0).toUpperCase() + crateReward.slice(1)} Crate` : '') +
            (itemReward ? `\n<img src="${itemReward.icon}" style="width:16px;height:16px;"> ${itemReward.name}` : '')
        );
    } else {
        // Vanlig enemy
        coinReward = Math.floor(coinReward * 1.5);
        
        // 10% sjanse for gem drop
        if (Math.random() < 0.1) {
            gemReward = Math.max(1, Math.floor(gameState.level / 5));
        }
        
        gameState.totalEnemiesDefeated++;
    }
    
    // Apply rewards
    gameState.coins += Math.max(1, coinReward);
    gameState.gems += gemReward;
    
    // Legg til crate reward hvis boss ga en
    if (crateReward) {
        setTimeout(() => {
            showSimpleCrateOpening(crateReward, 'boss');
        }, 1500);
    }
    
    // Legg til item reward hvis boss ga en
    if (itemReward) {
        setTimeout(() => {
            addItemToInventory(itemReward);
        }, 2000);
    }
    
    // Update quest progress
    updateQuestProgress('kill', 1);
    updateQuestProgress('coins', coinReward);
    
    // Update achievements
    updateAchievements();
    
    // Progress to next enemy
    if (gameState.enemyNumber >= gameState.maxEnemyReached) {
        gameState.maxEnemyReached = gameState.enemyNumber + 1;
    }
    
    gameState.enemyNumber++;
    
    if (gameState.enemyNumber > 9) {
        gameState.enemyNumber = 1;
        gameState.maxEnemyReached = 1;
        gameState.level++;
        // Øk difficulty
        gameState.difficultyMultiplier *= 1.3;
    }
    
    // Spawn new enemy
    spawnEnemy();
    updateUI();
    saveGame();
}

function spawnEnemy() {
    const biomeIndex = (gameState.level - 1) % biomes.length;
    const biome = biomes[biomeIndex];
    
    // Update background - dekker hele skjermen
    const backgroundContainer = document.querySelector('.fight-page');
    if (backgroundContainer) {
        backgroundContainer.style.backgroundImage = `url('${biome.bgImage}')`;
        backgroundContainer.style.backgroundSize = 'cover';
        backgroundContainer.style.backgroundPosition = 'center';
        backgroundContainer.style.backgroundRepeat = 'no-repeat';
    }
    
    // Update enemy - NYE FIENDE BILDER
    gameState.currentBiome = biome.name;
    const enemyImage = document.getElementById('enemyImage');
    const enemy = document.getElementById('enemy');
    const bossIconElement = document.getElementById('bossIcon');
    
    if (enemyImage && enemy) {
        const isBoss = gameState.enemyNumber === 9;
        
        if (isBoss) {
            // Bruk boss fiende bilde
            enemyImage.src = bossImages[biome.name] || enemyImages[biome.name];
            enemyImage.alt = `${biome.enemyType} Boss`;
            
            // Legg til boss klasse og ikon
            enemy.classList.add('boss-indicator', 'boss-enhanced');
            
            // Opprett boss ikon hvis den ikke finnes
            if (!bossIconElement) {
                const bossIconImg = document.createElement('img');
                bossIconImg.id = 'bossIcon';
                bossIconImg.src = bossIcon;
                bossIconImg.style.cssText = `
                    position: absolute;
                    top: -20px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 60px;
                    height: 60px;
                    z-index: 1001;
                    pointer-events: none;
                    filter: drop-shadow(0 0 10px red);
                    animation: float 2s infinite ease-in-out;
                `;
                enemy.appendChild(bossIconImg);
            }
            
            gameState.bossTimer = 60;
            const bossTimerContainer = document.getElementById('bossTimerContainer');
            if (bossTimerContainer) bossTimerContainer.style.display = 'flex';
            startBossTimer();
        } else {
            // Bruk vanlig fiende bilde
            enemyImage.src = enemyImages[biome.name];
            enemyImage.alt = `${biome.enemyType} Enemy`;
            
            // Fjern boss klasse og ikon
            enemy.classList.remove('boss-indicator', 'boss-enhanced');
            if (bossIconElement) {
                bossIconElement.remove();
            }
            
            const bossTimerContainer = document.getElementById('bossTimerContainer');
            if (bossTimerContainer) bossTimerContainer.style.display = 'none';
            if (gameState.bossTimerInterval) {
                clearInterval(gameState.bossTimerInterval);
                gameState.bossTimerInterval = null;
            }
        }
        
        // Øk størrelsen på fienden
        enemy.style.width = '250px';
        enemy.style.height = '250px';
        enemyImage.style.width = '100%';
        enemyImage.style.height = '100%';
    }
    
    const enemyTypeEl = document.getElementById('enemyType');
    if (enemyTypeEl) enemyTypeEl.textContent = biome.enemyType + (gameState.enemyNumber === 9 ? ' Boss' : '');
    
    const enemyCountEl = document.getElementById('enemyCount');
    if (enemyCountEl) enemyCountEl.textContent = `${gameState.enemyNumber}/9`;
    
    // HP beregning
    const baseHP = Math.pow(1.8, gameState.level) * 50 * (1 + gameState.prestigePoints * 0.2);
    const enemyMultiplier = 1 + ((gameState.enemyNumber - 1) * 0.7);
    let enemyHP = Math.floor(baseHP * enemyMultiplier * gameState.difficultyMultiplier);
    
    if (gameState.enemyNumber === 9) {
        // BOSS - ekstra HP
        enemyHP *= 8;
    }
    
    gameState.currentEnemyHP = enemyHP;
    gameState.maxEnemyHP = enemyHP;
    
    updateEnemyHP();
    updateDifficultyDisplay();
}

function updateDifficultyDisplay() {
    const isBoss = gameState.enemyNumber === 9;
    let difficultyText = '';
    
    if (isBoss) {
        difficultyText = `👹 BOSS FIGHT (Level ${gameState.level}) - 60s TIMER`;
    } else {
        const difficultyLevel = Math.floor(gameState.difficultyMultiplier * 10);
        let difficultyName = 'Easy';
        
        if (difficultyLevel >= 50) difficultyName = 'INSANE';
        else if (difficultyLevel >= 30) difficultyName = 'Very Hard';
        else if (difficultyLevel >= 20) difficultyName = 'Hard';
        else if (difficultyLevel >= 10) difficultyName = 'Medium';
        else if (difficultyLevel >= 5) difficultyName = 'Normal';
        
        difficultyText = `Level ${gameState.level} - ${difficultyName} (${difficultyLevel}x)`;
    }
    
    const diffTextEl = document.getElementById('difficultyText');
    if (diffTextEl) diffTextEl.textContent = difficultyText;
}

function updateEnemyHP() {
    const hpPercent = (gameState.currentEnemyHP / gameState.maxEnemyHP) * 100;
    const hpFill = document.getElementById('enemyHpFill');
    const hpText = document.getElementById('enemyHpText');
    
    if (hpFill) hpFill.style.width = `${Math.max(0, hpPercent)}%`;
    if (hpText) hpText.textContent = `${formatNumber(gameState.currentEnemyHP)}/${formatNumber(gameState.maxEnemyHP)} (${Math.floor(hpPercent)}%)`;
    
    // Endre farge basert på HP
    if (hpFill) {
        if (hpPercent > 50) {
            hpFill.style.background = 'linear-gradient(90deg, #43e97b, #38f9d7)';
        } else if (hpPercent > 25) {
            hpFill.style.background = 'linear-gradient(90deg, #FF9800, #FFB74D)';
        } else {
            hpFill.style.background = 'linear-gradient(90deg, #F44336, #EF5350)';
        }
    }
}

function startBossTimer() {
    if (gameState.bossTimerInterval) {
        clearInterval(gameState.bossTimerInterval);
    }
    
    updateBossTimer();
    
    gameState.bossTimerInterval = setInterval(() => {
        gameState.bossTimer--;
        updateBossTimer();
        
        if (gameState.bossTimer <= 0) {
            clearInterval(gameState.bossTimerInterval);
            gameState.bossTimerInterval = null;
            // Boss timed out - reset to regular enemy
            gameState.enemyNumber = 1;
            spawnEnemy();
            showMessage('⏰ TIME\'S UP!', 'The boss escaped! Try again next time.');
        }
    }, 1000);
}

function updateBossTimer() {
    const timerElement = document.getElementById('bossTimer');
    if (!timerElement) return;
    
    timerElement.textContent = `${gameState.bossTimer}s`;
    
    // Change color based on time
    if (gameState.bossTimer <= 10) {
        timerElement.style.color = '#ff4444';
        timerElement.style.animation = 'pulse 0.5s infinite';
    } else if (gameState.bossTimer <= 30) {
        timerElement.style.color = '#ffaa00';
        timerElement.style.animation = 'none';
    } else {
        timerElement.style.color = '#ffd700';
        timerElement.style.animation = 'none';
    }
}

// ======================================================
// PERMANENT UPGRADES SYSTEM
// ======================================================

function updateUpgradeCosts() {
    // Damage upgrade cost
    const damageCost = Math.floor(100 * Math.pow(1.4, gameState.damageUpgrades));
    const damageCostEl = document.getElementById('damageCost');
    const currentDamageEl = document.getElementById('currentDamage');
    
    if (damageCostEl) damageCostEl.textContent = formatNumber(damageCost);
    if (currentDamageEl) currentDamageEl.textContent = gameState.baseDamagePerClick + (gameState.damageUpgrades * 2);
    
    // Crit upgrade cost
    const critCost = Math.floor(250 * Math.pow(1.5, gameState.critUpgrades));
    const critCostEl = document.getElementById('critCost');
    const currentCritEl = document.getElementById('currentCrit');
    
    if (critCostEl) critCostEl.textContent = formatNumber(critCost);
    if (currentCritEl) currentCritEl.textContent = gameState.critChance + gameState.critUpgrades;
    
    // Auto upgrade cost
    const autoCost = Math.floor(500 * Math.pow(1.6, gameState.autoUpgrades));
    const autoCostEl = document.getElementById('autoCost');
    const currentAutoEl = document.getElementById('currentAuto');
    
    if (autoCostEl) autoCostEl.textContent = formatNumber(autoCost);
    if (currentAutoEl) currentAutoEl.textContent = gameState.autoDamage;
}

function buyDamageUpgrade() {
    const cost = Math.floor(100 * Math.pow(1.4, gameState.damageUpgrades));
    
    if (gameState.coins >= cost) {
        gameState.coins -= cost;
        gameState.damageUpgrades++;
        updateUpgradeCosts();
        updateResources();
        saveGame();
    }
}

function buyCritUpgrade() {
    const cost = Math.floor(250 * Math.pow(1.5, gameState.critUpgrades));
    
    if (gameState.coins >= cost) {
        gameState.coins -= cost;
        gameState.critUpgrades++;
        updateUpgradeCosts();
        updateResources();
        saveGame();
    }
}

function buyAutoUpgrade() {
    const cost = Math.floor(500 * Math.pow(1.6, gameState.autoUpgrades));
    
    if (gameState.coins >= cost) {
        gameState.coins -= cost;
        gameState.autoDamage += 1;
        gameState.autoUpgrades++;
        updateUpgradeCosts();
        updateResources();
        
        // Start auto attack if not already running
        if (!gameState.autoAttackInterval) {
            startAutoAttack();
        }
        
        saveGame();
    }
}

// ======================================================
// SHOP SYSTEM - MED GODLY CRATE
// ======================================================

function updateShop() {
    updateUpgradeCosts();
    renderCrates();
}

function buyCoins(coins, gems) {
    if (gameState.gems >= gems) {
        gameState.gems -= gems;
        gameState.coins += coins;
        updateResources();
        saveGame();
    }
}

function renderCrates() {
    const cratesGrid = document.getElementById('cratesGrid');
    if (!cratesGrid) return;
    
    cratesGrid.innerHTML = '';
    
    const crates = [
        {
            type: 'basic',
            name: 'Basic Crate',
            icon: crateImages.basic.closed,
            desc: 'Common - Epic items',
            price: 10,
            odds: crateProbabilities.basic,
            class: 'basic'
        },
        {
            type: 'advanced',
            name: 'Advanced Crate',
            icon: crateImages.advanced.closed,
            desc: 'Rare - Legendary',
            price: 25,
            odds: crateProbabilities.advanced,
            class: 'advanced'
        },
        {
            type: 'premium',
            name: 'Premium Crate',
            icon: crateImages.premium.closed,
            desc: 'Epic - Godly',
            price: 50,
            odds: crateProbabilities.premium,
            class: 'premium'
        },
        {
            type: 'pet',
            name: 'Pet Crate',
            icon: crateImages.pet.closed,
            desc: 'Special pets only',
            price: 30,
            odds: crateProbabilities.pet,
            class: 'pet'
        },
        {
            type: 'pet_godly',
            name: 'Godly Pet Crate',
            icon: crateImages.pet_godly.closed,
            desc: 'Epic - Godly pets',
            price: 75,
            odds: crateProbabilities.pet_godly,
            class: 'pet-godly'
        },
        {
            type: 'godly_crate',
            name: 'Ultimate Godly Crate',
            icon: crateImages.godly.closed,
            desc: 'ONLY Ultimate & Godly items',
            price: 500,
            odds: crateProbabilities.godly_crate,
            class: 'godly-crate'
        },
        {
            type: 'daily',
            name: 'Daily Crate',
            icon: crateImages.daily.closed,
            desc: 'Free daily reward',
            price: 0,
            odds: crateProbabilities.daily,
            class: 'daily'
        }
    ];
    
    crates.forEach(crate => {
        const crateCard = document.createElement('div');
        crateCard.className = `crate-card ${crate.class}`;
        
        crateCard.innerHTML = `
            <div class="crate-header">
                <img src="${crate.icon}" style="width:32px;height:32px;">
                <span class="crate-name">${crate.name}</span>
            </div>
            <div class="crate-info">
                <div class="crate-desc">${crate.desc}</div>
                <div class="crate-odds">
                    ${Object.entries(crate.odds).map(([rarity, chance]) => `
                        <div class="odd-row">
                            <span class="odd-rarity ${rarity}">${rarity.charAt(0).toUpperCase() + rarity.slice(1)}</span>
                            <span class="odd-percent">${chance}%</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            ${crate.type === 'daily' ? `
                <button class="crate-btn daily-btn" id="dailyCrateBtn" onclick="openDailyCrate()" ${!gameState.dailyCrateAvailable ? 'disabled' : ''}>
                    <span class="crate-price">FREE</span>
                </button>
                <div class="daily-timer" id="dailyTimer">${gameState.dailyCrateAvailable ? 'Available' : 'Claimed'}</div>
            ` : `
                <button class="crate-btn" onclick="buyCrate('${crate.type}')">
                    <span class="crate-price">${crate.price}</span>
                    <img src="${uiIcons.gem}" style="width:16px;height:16px;vertical-align:middle;">
                </button>
            `}
        `;
        
        cratesGrid.appendChild(crateCard);
    });
}

function buyCrate(type) {
    let cost;
    switch(type) {
        case 'basic': cost = 10; break;
        case 'advanced': cost = 25; break;
        case 'premium': cost = 50; break;
        case 'pet': cost = 30; break;
        case 'pet_godly': cost = 75; break;
        case 'godly_crate': cost = 500; break;
        default: return;
    }
    
    if (gameState.gems >= cost) {
        gameState.gems -= cost;
        gameState.totalCratesOpened++;
        
        // Vis enkel crate opening
        showSimpleCrateOpening(type, 'shop');
        
        updateResources();
        updateAchievements();
        updateQuestProgress('crate', 1);
        saveGame();
    }
}

// ======================================================
// ENKEL CRATE OPENING
// ======================================================

function showSimpleCrateOpening(crateType, source = 'shop') {
    const item = openCrate(crateType, source === 'boss');
    
    // Vis enkel popup med reward
    showMessage(`<img src="${crateImages[crateType]?.open || crateImages.basic.open}" style="width:64px;height:64px;"> CRATE OPENED!`, 
        `You got:<br>
        <img src="${item.icon}" style="width:32px;height:32px;vertical-align:middle;"> <strong>${item.name}</strong><br>
        <span class="rarity-badge ${item.rarity}" style="display:inline-block;padding:4px 8px;border-radius:10px;margin:5px 0;">
            ${item.rarity.toUpperCase()}
        </span><br><br>
        ${item.damage ? `<img src="${uiIcons.coin}" style="width:16px;height:16px;"> Damage: ${item.damage}x<br>` : ''}
        ${item.defense ? `<img src="${uiIcons.coin}" style="width:16px;height:16px;"> Defense: ${item.defense}x<br>` : ''}
        ${item.bonus ? Object.entries(item.bonus).map(([key, value]) => 
            `<img src="${key === 'coins' ? uiIcons.coin : key === 'gems' ? uiIcons.gem : uiIcons.star}" style="width:16px;height:16px;"> ${key.charAt(0).toUpperCase() + key.slice(1)}: +${value}${key === 'coins' || key === 'gems' || key === 'damage' ? 'x' : '%'}<br>`
        ).join('') : ''}`
    );
    
    // Legg til i inventory
    addItemToInventory(item);
}

function openCrate(type, isBossDrop = false) {
    const probabilities = crateProbabilities[type];
    const roll = Math.random() * 100;
    
    let selectedRarity;
    let cumulative = 0;
    
    for (const [rarity, chance] of Object.entries(probabilities)) {
        cumulative += chance;
        if (roll <= cumulative) {
            selectedRarity = rarity;
            break;
        }
    }
    
    // Boss drops har litt bedre odds
    if (isBossDrop && Math.random() < 0.3) {
        const rarities = ['common', 'rare', 'epic', 'legendary', 'ultimate', 'godly'];
        const currentIndex = rarities.indexOf(selectedRarity);
        if (currentIndex < rarities.length - 1) {
            selectedRarity = rarities[currentIndex + 1];
        }
    }
    
    // Get items of selected rarity
    let itemPool;
    if (type === 'pet' || type === 'pet_godly') {
        itemPool = items.pets.filter(item => item.rarity === selectedRarity);
    } else if (type === 'godly_crate') {
        // Godly crate gir bare ultimate og godly items
        const allItems = [...items.weapons, ...items.armor, ...items.artifacts];
        itemPool = allItems.filter(item => item.rarity === selectedRarity && 
            (item.rarity === 'ultimate' || item.rarity === 'godly'));
    } else {
        const allItems = [...items.weapons, ...items.armor, ...items.artifacts];
        itemPool = allItems.filter(item => item.rarity === selectedRarity);
    }
    
    if (itemPool.length === 0) {
        // Fallback hvis ingen items av den rarity
        if (type === 'pet' || type === 'pet_godly') {
            itemPool = items.pets.filter(i => i.rarity === 'common');
        } else if (type === 'godly_crate') {
            const allItems = [...items.weapons, ...items.armor, ...items.artifacts];
            itemPool = allItems.filter(item => item.rarity === 'ultimate' || item.rarity === 'godly');
            if (itemPool.length === 0) {
                itemPool = items.weapons.filter(i => i.rarity === 'ultimate');
            }
        } else {
            itemPool = items.weapons.filter(i => i.rarity === 'common');
        }
    }
    
    return itemPool[Math.floor(Math.random() * itemPool.length)];
}

function openDailyCrate() {
    if (!gameState.dailyCrateAvailable) {
        return;
    }
    
    gameState.dailyCrateAvailable = false;
    gameState.lastDailyCrate = Date.now();
    gameState.totalCratesOpened++;
    
    const dailyBtn = document.getElementById('dailyCrateBtn');
    if (dailyBtn) {
        dailyBtn.disabled = true;
        dailyBtn.textContent = 'Claimed';
        dailyBtn.style.opacity = '0.5';
    }
    
    const dailyTimer = document.getElementById('dailyTimer');
    if (dailyTimer) {
        dailyTimer.textContent = 'Claimed';
    }
    
    // Vis enkel crate opening
    showSimpleCrateOpening('daily', 'daily');
    
    updateResources();
    updateAchievements();
    updateQuestProgress('crate', 1);
    saveGame();
}

// ======================================================
// PRESTIGE SYSTEM
// ======================================================

function showPrestigeModal() {
    const canPrestige = gameState.level >= 10;
    if (!canPrestige) {
        showMessage('Prestige Locked', `Reach Level 10 to prestige!<br>Current Level: ${gameState.level}<br>Need: ${10 - gameState.level} more levels`);
        return;
    }
    
    const prestigePoints = Math.floor(gameState.level / 2) + gameState.prestigePoints;
    const multiplierIncrease = prestigePoints * 0.1;
    const newMultiplier = 1 + multiplierIncrease;
    
    const message = `<img src="${uiIcons.star}" style="width:32px;height:32px;"> PRESTIGE AVAILABLE!<br><br>
                   Current Level: ${gameState.level}<br>
                   Prestige Points: +${prestigePoints}<br>
                   New Multiplier: ${newMultiplier.toFixed(1)}x<br><br>
                   Prestige Benefits:<br>
                   <img src="${uiIcons.star}" style="width:16px;height:16px;"> Keep Prestige Points<br>
                   <img src="${uiIcons.coin}" style="width:16px;height:16px;"> Keep Permanent Upgrades<br>
                   <img src="${items.weapons[0].icon}" style="width:16px;height:16px;"> Keep Items & Pets<br>
                   <img src="${uiIcons.gem}" style="width:16px;height:16px;"> Keep Gems<br><br>
                   Reset: Coins to 1000, Enemies to 1<br><br>
                   Prestige now?`;
    
    if (confirm(message.replace(/<br>/g, '\n'))) {
        prestige();
    }
}

function prestige() {
    const prestigePoints = Math.floor(gameState.level / 2);
    
    gameState.prestigePoints += prestigePoints;
    gameState.prestigeMultiplier = 1 + (gameState.prestigePoints * 0.1);
    
    const savedInventory = {...inventory};
    const savedDamageUpgrades = gameState.damageUpgrades;
    const savedCritUpgrades = gameState.critUpgrades;
    const savedAutoUpgrades = gameState.autoUpgrades;
    const savedGems = gameState.gems;
    
    // Reset game state
    gameState.coins = 1000;
    gameState.gems = savedGems;
    gameState.level = 1;
    gameState.enemyNumber = 1;
    gameState.maxEnemyReached = 1;
    gameState.currentEnemyHP = 100;
    gameState.maxEnemyHP = 100;
    gameState.difficultyMultiplier = 1.0 + (gameState.prestigePoints * 0.1);
    gameState.bossCleared = {};
    
    // Behold permanent upgrades
    gameState.damageUpgrades = savedDamageUpgrades;
    gameState.critUpgrades = savedCritUpgrades;
    gameState.autoUpgrades = savedAutoUpgrades;
    
    // Behold inventory
    inventory = savedInventory;
    
    // Update quest progress
    updateQuestProgress('prestige', 1);
    
    showMessage(`<img src="${uiIcons.star}" style="width:48px;height:48px;"> PRESTIGE COMPLETE!`, 
        `You gained ${prestigePoints} Prestige Points!<br>
         <img src="${uiIcons.star}" style="width:24px;height:24px;"> Total Prestige: ${gameState.prestigePoints}<br>
         Global Multiplier: ${gameState.prestigeMultiplier.toFixed(1)}x<br><br>
         Keep clicking to reach higher levels!`
    );
    
    spawnEnemy();
    updateUI();
    saveGame();
}

function updatePrestigeButton() {
    const prestigeBtn = document.getElementById('prestigeBtn');
    const shopPrestigeBtn = document.getElementById('shopPrestigeBtn');
    
    const canPrestige = gameState.level >= 10;
    
    if (prestigeBtn) {
        if (canPrestige) {
            prestigeBtn.style.background = 'linear-gradient(135deg, #FFD700, #FFA500)';
            prestigeBtn.style.animation = 'pulse 2s infinite';
            prestigeBtn.style.boxShadow = '0 0 15px gold';
            prestigeBtn.innerHTML = `<img src="${uiIcons.star}" style="width:16px;height:16px;"> PRESTIGE!`;
        } else {
            prestigeBtn.style.background = 'linear-gradient(135deg, #888, #666)';
            prestigeBtn.style.animation = 'none';
            prestigeBtn.style.boxShadow = '';
            prestigeBtn.innerHTML = `<img src="${uiIcons.star}" style="width:16px;height:16px;"> Prestige`;
        }
    }
    
    if (shopPrestigeBtn) {
        if (canPrestige) {
            shopPrestigeBtn.style.background = 'linear-gradient(135deg, #FFD700, #FFA500)';
            shopPrestigeBtn.style.color = '#333';
            shopPrestigeBtn.style.animation = 'pulse 2s infinite';
        } else {
            shopPrestigeBtn.style.background = 'linear-gradient(135deg, #888, #666)';
            shopPrestigeBtn.style.color = '#ccc';
            shopPrestigeBtn.style.animation = 'none';
        }
    }
    
    // Oppdater prestige info
    const prestigeMultiplier = document.getElementById('prestigeMultiplier');
    const prestigeRequirements = document.getElementById('prestigeRequirements');
    
    if (prestigeMultiplier) {
        prestigeMultiplier.innerHTML = `<img src="${uiIcons.star}" style="width:20px;height:20px;"> Global Multiplier: ${gameState.prestigeMultiplier.toFixed(1)}x`;
    }
    
    if (prestigeRequirements) {
        if (canPrestige) {
            prestigeRequirements.innerHTML = `<img src="${uiIcons.star}" style="width:16px;height:16px;"> READY! Level ${gameState.level} reached`;
            prestigeRequirements.style.color = '#43e97b';
        } else {
            prestigeRequirements.innerHTML = `<img src="${uiIcons.star}" style="width:16px;height:16px;"> Need Level ${10 - gameState.level} more to prestige`;
            prestigeRequirements.style.color = '#666';
        }
    }
    
    setTimeout(updatePrestigeButton, 5000);
}

// ======================================================
// INVENTORY SYSTEM - MED STØRRE ITEM BILDER
// ======================================================

function addItemToInventory(item) {
    let category;
    if (items.weapons.includes(item)) category = 'weapons';
    else if (items.armor.includes(item)) category = 'armor';
    else if (items.pets.includes(item)) category = 'pets';
    else category = 'artifacts';
    
    if (!inventory[category]) {
        inventory[category] = {};
    }
    
    if (!inventory[category][item.id]) {
        inventory[category][item.id] = {
            item: item,
            count: 1,
            level: 1
        };
    } else {
        inventory[category][item.id].count += 1;
    }
    
    if (document.querySelector('.inventory-page.active')) {
        renderInventory();
    }
}

function renderInventory() {
    // Update player stats
    const totalDamage = (gameState.baseDamagePerClick + (gameState.damageUpgrades * 2)) * gameState.itemDamageMultiplier * gameState.prestigeMultiplier;
    const statDamageEl = document.getElementById('statDamage');
    const statAutoEl = document.getElementById('statAuto');
    const statCritEl = document.getElementById('statCrit');
    const statMultiEl = document.getElementById('statMulti');
    
    if (statDamageEl) statDamageEl.textContent = Math.floor(totalDamage);
    if (statAutoEl) statAutoEl.textContent = gameState.autoDamage;
    if (statCritEl) statCritEl.textContent = `${gameState.critChance + gameState.critUpgrades}%`;
    if (statMultiEl) statMultiEl.textContent = `${gameState.prestigeMultiplier.toFixed(1)}x`;
    
    // Update active pet
    const activePetElement = document.getElementById('activePet');
    if (activePetElement) {
        if (inventory.activePet) {
            const pet = inventory.activePet;
            activePetElement.innerHTML = `
                <div class="pet-display">
                    <img src="${pet.icon}" style="width:48px;height:48px;">
                    <div class="pet-details">
                        <span class="pet-name">${pet.name}</span>
                        <span class="pet-rarity ${pet.rarity}">${pet.rarity.toUpperCase()}</span>
                    </div>
                </div>
                <div class="pet-bonuses">
                    ${Object.entries(pet.bonus || {}).map(([key, value]) => `
                        <div class="bonus">
                            <span class="bonus-type">${key}:</span>
                            <span class="bonus-value">+${value}${key === 'coins' || key === 'gems' || key === 'damage' ? 'x' : '%'}</span>
                        </div>
                    `).join('')}
                </div>
                <button class="remove-pet-btn" onclick="removePet()">Remove</button>
            `;
        } else {
            activePetElement.innerHTML = `<div class="no-pet">No pet equipped</div>`;
        }
    }
    
    // Render items grid
    const itemsGrid = document.getElementById('itemsGrid');
    if (!itemsGrid) return;
    
    itemsGrid.innerHTML = '';
    
    // Combine all items
    const allItems = [];
    for (const category in inventory) {
        if (category === 'activePet') continue;
        for (const itemId in inventory[category]) {
            allItems.push({...inventory[category][itemId], category: category});
        }
    }
    
    // Display items
    allItems.forEach(itemData => {
        const item = itemData.item;
        const category = itemData.category;
        const div = document.createElement('div');
        div.className = `item-card ${item.rarity}`;
        
        let actionButton = '';
        let statsHtml = '';
        
        // Generer stats for alle items
        if (item.damage) {
            statsHtml += `<div class="item-stat"><span class="stat-label">Damage:</span> <span class="stat-value">${item.damage}x</span></div>`;
        }
        if (item.defense) {
            statsHtml += `<div class="item-stat"><span class="stat-label">Defense:</span> <span class="stat-value">${item.defense}x</span></div>`;
        }
        if (item.bonus) {
            Object.entries(item.bonus).forEach(([key, value]) => {
                const keyName = key.charAt(0).toUpperCase() + key.slice(1);
                const suffix = key === 'coins' || key === 'gems' || key === 'damage' ? 'x' : '%';
                statsHtml += `<div class="item-stat"><span class="stat-label">${keyName}:</span> <span class="stat-value">+${value}${suffix}</span></div>`;
            });
        }
        if (item.required) {
            statsHtml += `<div class="item-stat"><span class="stat-label">Req. for upgrade:</span> <span class="stat-value">${item.required}</span></div>`;
        }
        
        if (category === 'pets') {
            const isActive = inventory.activePet && inventory.activePet.id === item.id;
            actionButton = `<button class="item-equip" onclick="equipPet('${item.id}')" ${isActive ? 'disabled style="opacity:0.5;"' : ''}>
                ${isActive ? '✓ Equipped' : 'Equip'}
            </button>`;
        } else {
            actionButton = itemData.count >= itemData.level + 1 ? 
                `<button class="item-upgrade" onclick="upgradeItem('${item.id}')">↑ Upgrade</button>` : 
                `<div class="item-required">Need ${itemData.level + 1 - itemData.count} more</div>`;
        }
        
        // Legg til klikk-event for å vise større bilde
        div.innerHTML = `
            <div class="item-count">${itemData.count}/${itemData.level + 1}</div>
            <img src="${item.icon}" class="item-icon" style="width:64px;height:64px;cursor:pointer;" 
                 onclick="showItemModal('${item.id}', '${category}')">
            <div class="item-name">${item.name}</div>
            <div class="item-level">Level ${itemData.level}</div>
            <div class="item-rarity ${item.rarity}">${item.rarity.toUpperCase()}</div>
            ${statsHtml ? `<div class="item-stats">${statsHtml}</div>` : ''}
            ${actionButton}
        `;
        itemsGrid.appendChild(div);
    });
}

function showItemModal(itemId, category) {
    const itemData = inventory[category]?.[itemId];
    if (!itemData) return;
    
    const item = itemData.item;
    
    // Opprett modal for større bilde
    const modalHTML = `
        <div class="item-modal-overlay">
            <div class="item-modal-content">
                <img src="${item.icon}" style="width:128px;height:128px;margin-bottom:15px;">
                <h3 style="color:#333;margin-bottom:10px;">${item.name}</h3>
                <div class="item-rarity ${item.rarity}" style="margin-bottom:15px;">${item.rarity.toUpperCase()}</div>
                <div style="text-align:left;margin-bottom:15px;">
                    ${item.damage ? `<div style="margin-bottom:5px;"><strong>Damage:</strong> ${item.damage}x</div>` : ''}
                    ${item.defense ? `<div style="margin-bottom:5px;"><strong>Defense:</strong> ${item.defense}x</div>` : ''}
                    ${item.bonus ? Object.entries(item.bonus).map(([key, value]) => 
                        `<div style="margin-bottom:5px;"><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> +${value}${key === 'coins' || key === 'gems' || key === 'damage' ? 'x' : '%'}</div>`
                    ).join('') : ''}
                    ${item.required ? `<div style="margin-bottom:5px;"><strong>Required for upgrade:</strong> ${item.required}</div>` : ''}
                </div>
                <div style="margin-bottom:15px;color:#666;">
                    <strong>Level:</strong> ${itemData.level}<br>
                    <strong>Count:</strong> ${itemData.count}/${itemData.level + 1}
                </div>
                <button onclick="closeItemModal()" style="background:linear-gradient(135deg, #667eea, #764ba2);color:white;border:none;padding:10px 20px;border-radius:10px;cursor:pointer;">
                    Close
                </button>
            </div>
        </div>
    `;
    
    // Legg til modal i dokumentet
    const modalDiv = document.createElement('div');
    modalDiv.innerHTML = modalHTML;
    document.body.appendChild(modalDiv.firstChild);
    
    // Legg til CSS for modal
    const style = document.createElement('style');
    style.textContent = `
        .item-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            backdrop-filter: blur(5px);
        }
        .item-modal-content {
            background: white;
            border-radius: 15px;
            padding: 20px;
            max-width: 300px;
            width: 90%;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            animation: slideUp 0.3s;
        }
        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

function closeItemModal() {
    const modal = document.querySelector('.item-modal-overlay');
    if (modal) {
        modal.remove();
    }
}

function equipPet(petId) {
    if (inventory.pets[petId]) {
        // Remove current pet bonuses if any
        if (inventory.activePet) {
            const currentPet = inventory.activePet;
            if (currentPet.bonus) {
                if (currentPet.bonus.damage) gameState.itemDamageMultiplier /= currentPet.bonus.damage;
                if (currentPet.bonus.crit) gameState.critChance -= currentPet.bonus.crit;
                if (currentPet.bonus.auto) gameState.autoDamage -= currentPet.bonus.auto;
            }
        }
        
        // Equip new pet
        inventory.activePet = inventory.pets[petId].item;
        
        // Apply new pet bonuses
        const pet = inventory.activePet;
        if (pet.bonus) {
            if (pet.bonus.damage) gameState.itemDamageMultiplier *= pet.bonus.damage;
            if (pet.bonus.crit) gameState.critChance += pet.bonus.crit;
            if (pet.bonus.auto) gameState.autoDamage += pet.bonus.auto;
        }
        
        renderInventory();
        updateUI();
        saveGame();
    }
}

function removePet() {
    if (inventory.activePet) {
        const pet = inventory.activePet;
        
        // Remove pet bonuses
        if (pet.bonus) {
            if (pet.bonus.damage) gameState.itemDamageMultiplier /= pet.bonus.damage;
            if (pet.bonus.crit) gameState.critChance -= pet.bonus.crit;
            if (pet.bonus.auto) gameState.autoDamage -= pet.bonus.auto;
        }
        
        inventory.activePet = null;
        renderInventory();
        updateUI();
        saveGame();
    }
}

function upgradeItem(itemId) {
    let itemData;
    let category;
    
    for (const [cat, items] of Object.entries(inventory)) {
        if (cat === 'activePet') continue;
        if (items[itemId]) {
            itemData = items[itemId];
            category = cat;
            break;
        }
    }
    
    if (!itemData) return;
    
    const required = itemData.level + 1;
    if (itemData.count >= required) {
        itemData.count -= required;
        itemData.level++;
        
        // Apply upgrade effects
        const item = itemData.item;
        if (item.damage) {
            gameState.itemDamageMultiplier *= item.damage;
        }
        
        // If count becomes 0, remove from inventory
        if (itemData.count <= 0) {
            delete inventory[category][itemId];
        }
        
        renderInventory();
        updateUI();
        saveGame();
    }
}

// ======================================================
// ACHIEVEMENTS SYSTEM
// ======================================================

function renderAchievements() {
    const list = document.getElementById('achievementsList');
    if (!list) return;
    
    list.innerHTML = '';
    
    achievements.forEach(achievement => {
        const completed = achievement.condition();
        const progress = achievement.progress();
        const progressPercent = (progress / achievement.total) * 100;
        
        const div = document.createElement('div');
        div.className = `achievement-card ${completed ? 'completed' : ''} ${achievement.claimed ? 'claimed' : ''}`;
        
        div.innerHTML = `
            <img src="${achievement.icon}" class="achievement-icon" style="width:50px;height:50px;">
            <div class="achievement-info">
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-desc">${achievement.desc}</div>
                <div class="achievement-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progressPercent}%"></div>
                    </div>
                    <span>${formatNumber(progress)}/${formatNumber(achievement.total)}</span>
                </div>
                <div class="achievement-rewards">
                    ${achievement.reward.coins ? 
                        `<div class="reward"><img src="${uiIcons.coin}" style="width:16px;height:16px;"> ${achievement.reward.coins}</div>` : ''}
                    ${achievement.reward.gems ? 
                        `<div class="reward"><img src="${uiIcons.gem}" style="width:16px;height:16px;"> ${achievement.reward.gems}</div>` : ''}
                    ${achievement.reward.crate ? 
                        `<div class="reward"><img src="${crateImages[achievement.reward.crate]?.closed || crateImages.basic.closed}" style="width:16px;height:16px;"> ${achievement.reward.crate}</div>` : ''}
                    ${achievement.reward.item ? 
                        `<div class="reward"><img src="${items.weapons.find(i => i.id === achievement.reward.item)?.icon || items.pets.find(i => i.id === achievement.reward.item)?.icon}" style="width:16px;height:16px;"> ${achievement.reward.item}</div>` : ''}
                    ${achievement.reward.prestige ? 
                        `<div class="reward"><img src="${uiIcons.star}" style="width:16px;height:16px;"> ${achievement.reward.prestige}</div>` : ''}
                </div>
            </div>
            <button class="achievement-claim" 
                    onclick="claimAchievement('${achievement.id}')"
                    ${completed && !achievement.claimed ? '' : 'disabled'}>
                ${achievement.claimed ? '✅ Claimed' : completed ? 'Claim' : 'Locked'}
            </button>
        `;
        
        list.appendChild(div);
    });
}

function updateAchievements() {
    let newlyCompleted = false;
    achievements.forEach(achievement => {
        if (!achievement.claimed && achievement.condition()) {
            newlyCompleted = true;
        }
    });
    
    if (document.querySelector('.achievements-page.active')) {
        renderAchievements();
    }
}

function claimAchievement(achievementId) {
    const achievement = achievements.find(a => a.id === achievementId);
    if (!achievement || achievement.claimed || !achievement.condition()) {
        return;
    }
    
    // Give rewards
    if (achievement.reward.coins) {
        gameState.coins += achievement.reward.coins;
    }
    if (achievement.reward.gems) {
        gameState.gems += achievement.reward.gems;
    }
    if (achievement.reward.prestige) {
        gameState.prestigePoints += achievement.reward.prestige;
        gameState.prestigeMultiplier = 1 + (gameState.prestigePoints * 0.1);
    }
    if (achievement.reward.crate) {
        showSimpleCrateOpening(achievement.reward.crate, 'achievement');
    }
    if (achievement.reward.item) {
        const item = [...items.weapons, ...items.armor, ...items.pets, ...items.artifacts]
            .find(i => i.id === achievement.reward.item);
        if (item) {
            addItemToInventory(item);
        }
    }
    
    achievement.claimed = true;
    
    updateResources();
    renderAchievements();
    renderInventory();
    saveGame();
}

// ======================================================
// QUESTS SYSTEM
// ======================================================

function renderQuests() {
    // Daily Quests
    const dailyList = document.getElementById('dailyQuests');
    if (dailyList) {
        dailyList.innerHTML = '';
        quests.daily.forEach(quest => {
            const progressPercent = (quest.progress / quest.total) * 100;
            const div = createQuestCard(quest, progressPercent);
            dailyList.appendChild(div);
        });
    }
    
    // Weekly Quests
    const weeklyList = document.getElementById('weeklyQuests');
    if (weeklyList) {
        weeklyList.innerHTML = '';
        quests.weekly.forEach(quest => {
            const progressPercent = (quest.progress / quest.total) * 100;
            const div = createQuestCard(quest, progressPercent);
            weeklyList.appendChild(div);
        });
    }
    
    // Special Quests
    const specialList = document.getElementById('specialQuests');
    if (specialList) {
        specialList.innerHTML = '';
        quests.special.forEach(quest => {
            const progressPercent = (quest.progress / quest.total) * 100;
            const div = createQuestCard(quest, progressPercent);
            specialList.appendChild(div);
        });
    }
}

function createQuestCard(quest, progressPercent) {
    const div = document.createElement('div');
    div.className = `quest-card ${quest.difficulty}`;
    
    div.innerHTML = `
        <div class="quest-header">
            <div class="quest-title">${quest.title}</div>
            <div class="quest-difficulty ${quest.difficulty}">${quest.difficulty}</div>
        </div>
        <div class="quest-desc">${quest.desc}</div>
        <div class="quest-progress">
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progressPercent}%"></div>
            </div>
            <div class="progress-text">
                <span>${formatNumber(quest.progress)}</span>
                <span>${formatNumber(quest.total)}</span>
            </div>
        </div>
        <div class="quest-rewards">
            ${quest.reward.coins ? 
                `<div class="reward"><img src="${uiIcons.coin}" style="width:16px;height:16px;"> ${quest.reward.coins}</div>` : ''}
            ${quest.reward.gems ? 
                `<div class="reward"><img src="${uiIcons.gem}" style="width:16px;height:16px;"> ${quest.reward.gems}</div>` : ''}
            ${quest.reward.crate ? 
                `<div class="reward"><img src="${crateImages[quest.reward.crate]?.closed || crateImages.basic.closed}" style="width:16px;height:16px;"> ${quest.reward.crate}</div>` : ''}
            ${quest.reward.item ? 
                `<div class="reward"><img src="${items.weapons.find(i => i.id === quest.reward.item)?.icon || items.pets.find(i => i.id === quest.reward.item)?.icon}" style="width:16px;height:16px;"> ${quest.reward.item}</div>` : ''}
            ${quest.reward.prestige ? 
                `<div class="reward"><img src="${uiIcons.star}" style="width:16px;height:16px;"> ${quest.reward.prestige}</div>` : ''}
        </div>
        <button class="quest-claim" 
                onclick="claimQuest('${quest.id}')"
                ${quest.completed && !quest.claimed ? '' : 'disabled'}>
            ${quest.claimed ? '✅ Claimed' : quest.completed ? 'Claim Reward' : 'In Progress'}
        </button>
    `;
    
    return div;
}

function updateQuestProgress(type, amount) {
    let updated = false;
    
    // Update daily quests
    quests.daily.forEach(quest => {
        if (!quest.completed && quest.type === type) {
            quest.progress = Math.min(quest.total, quest.progress + amount);
            if (quest.progress >= quest.total) {
                quest.completed = true;
            }
            updated = true;
        }
    });
    
    // Update weekly quests
    quests.weekly.forEach(quest => {
        if (!quest.completed && quest.type === type) {
            quest.progress = Math.min(quest.total, quest.progress + amount);
            if (quest.progress >= quest.total) {
                quest.completed = true;
            }
            updated = true;
        }
    });
    
    // Update special quests
    quests.special.forEach(quest => {
        if (!quest.completed && quest.type === type) {
            if (type === 'prestige') {
                quest.progress = Math.min(quest.total, gameState.prestigePoints);
            } else {
                quest.progress = Math.min(quest.total, quest.progress + amount);
            }
            if (quest.progress >= quest.total) {
                quest.completed = true;
            }
            updated = true;
        }
    });
    
    if (updated && document.querySelector('.quests-page.active')) {
        renderQuests();
    }
}

function claimQuest(questId) {
    let quest;
    let questType;
    
    // Find the quest
    quest = quests.daily.find(q => q.id === questId);
    questType = 'daily';
    
    if (!quest) {
        quest = quests.weekly.find(q => q.id === questId);
        questType = 'weekly';
    }
    
    if (!quest) {
        quest = quests.special.find(q => q.id === questId);
        questType = 'special';
    }
    
    if (!quest || quest.claimed || !quest.completed) {
        return;
    }
    
    // Give rewards
    if (quest.reward.coins) {
        gameState.coins += quest.reward.coins;
    }
    if (quest.reward.gems) {
        gameState.gems += quest.reward.gems;
    }
    if (quest.reward.crate) {
        showSimpleCrateOpening(quest.reward.crate, 'quest');
    }
    if (quest.reward.item) {
        const item = [...items.weapons, ...items.armor, ...items.pets, ...items.artifacts]
            .find(i => i.id === quest.reward.item);
        if (item) {
            addItemToInventory(item);
        }
    }
    if (quest.reward.prestige) {
        gameState.prestigePoints += quest.reward.prestige;
        gameState.prestigeMultiplier = 1 + (gameState.prestigePoints * 0.1);
    }
    
    quest.claimed = true;
    
    updateResources();
    renderQuests();
    renderInventory();
    saveGame();
}

// ======================================================
// UTILITY FUNCTIONS
// ======================================================

function updateUI() {
    updateResources();
    updateEnemyHP();
    updatePrestigeButton();
    
    if (document.querySelector('.inventory-page.active')) {
        renderInventory();
    }
    
    if (document.querySelector('.shop-page.active')) {
        updateShop();
    }
}

function updateResources() {
    const coinsEl = document.getElementById('coins');
    const gemsEl = document.getElementById('gems');
    const prestigeEl = document.getElementById('prestige');
    
    if (coinsEl) coinsEl.textContent = formatNumber(gameState.coins);
    if (gemsEl) gemsEl.textContent = formatNumber(gameState.gems);
    if (prestigeEl) prestigeEl.textContent = gameState.prestigePoints;
    
    // Oppdater ikoner
    const coinIcon = document.querySelector('.resource-icon[data-type="coin"]');
    const gemIcon = document.querySelector('.resource-icon[data-type="gem"]');
    const starIcon = document.querySelector('.resource-icon[data-type="star"]');
    
    if (coinIcon && !coinIcon.querySelector('img')) {
        coinIcon.innerHTML = `<img src="${uiIcons.coin}" style="width:20px;height:20px;">`;
    }
    if (gemIcon && !gemIcon.querySelector('img')) {
        gemIcon.innerHTML = `<img src="${uiIcons.gem}" style="width:20px;height:20px;">`;
    }
    if (starIcon && !starIcon.querySelector('img')) {
        starIcon.innerHTML = `<img src="${uiIcons.star}" style="width:20px;height:20px;">`;
    }
}

function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(2) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return Math.floor(num).toString();
}

function checkDailyReset() {
    const now = Date.now();
    const lastDaily = gameState.lastDailyCrate || 0;
    const oneDay = 24 * 60 * 60 * 1000;
    
    if (now - lastDaily >= oneDay) {
        gameState.dailyCrateAvailable = true;
        const dailyBtn = document.getElementById('dailyCrateBtn');
        if (dailyBtn) {
            dailyBtn.disabled = false;
            dailyBtn.textContent = 'FREE';
            dailyBtn.style.opacity = '1';
        }
        
        const timerElement = document.querySelector('.daily-timer');
        if (timerElement) {
            timerElement.textContent = 'Available';
        }
    } else {
        const nextDaily = lastDaily + oneDay;
        const timeLeft = nextDaily - now;
        const hours = Math.floor(timeLeft / (60 * 60 * 1000));
        const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);
        
        const timerElement = document.querySelector('.daily-timer');
        if (timerElement) {
            timerElement.textContent = `Next: ${hours}h ${minutes}m ${seconds}s`;
        }
    }
}

function startAutoAttack() {
    if (gameState.autoAttackInterval) {
        clearInterval(gameState.autoAttackInterval);
    }
    
    gameState.autoAttackInterval = setInterval(() => {
        if (gameState.autoDamage > 0) {
            const { damage } = calculateDamage();
            const autoDamage = Math.floor(damage * 0.3);
            
            gameState.currentEnemyHP -= autoDamage;
            gameState.totalDamageDealt += autoDamage;
            
            if (gameState.currentEnemyHP <= 0) {
                enemyDefeated();
            } else {
                updateEnemyHP();
            }
        }
    }, 1000);
}

function startAutoSave() {
    setInterval(() => {
        saveGame();
    }, 30000);
}

// ======================================================
// SAVE SYSTEM
// ======================================================

function saveGame() {
    const saveData = {
        gameState,
        inventory,
        achievements,
        quests,
        lastSave: Date.now()
    };
    
    try {
        localStorage.setItem('brainrotClickerSave', JSON.stringify(saveData));
    } catch (e) {
        console.error('Failed to save game:', e);
    }
}

function loadGame() {
    const saved = localStorage.getItem('brainrotClickerSave');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            
            // Load game state
            Object.assign(gameState, data.gameState || {});
            
            // Load inventory
            inventory = data.inventory || {
                weapons: {},
                armor: {},
                pets: {},
                artifacts: {},
                activePet: null
            };
            
            // Load achievements
            if (data.achievements) {
                data.achievements.forEach(savedAchievement => {
                    const achievement = achievements.find(a => a.id === savedAchievement.id);
                    if (achievement) {
                        achievement.claimed = savedAchievement.claimed || false;
                    }
                });
            }
            
            // Load quests
            if (data.quests) {
                ['daily', 'weekly', 'special'].forEach(type => {
                    if (data.quests[type]) {
                        data.quests[type].forEach(savedQuest => {
                            const quest = quests[type].find(q => q.id === savedQuest.id);
                            if (quest) {
                                quest.progress = savedQuest.progress || 0;
                                quest.completed = savedQuest.completed || false;
                                quest.claimed = savedQuest.claimed || false;
                            }
                        });
                    }
                });
            }
        } catch (e) {
            console.error('Failed to load save:', e);
        }
    }
}

function resetGame() {
    if (confirm('Are you sure you want to reset the game? All progress will be lost!')) {
        gameState = {
            coins: 0,
            gems: 0,
            prestigePoints: 0,
            level: 1,
            enemyNumber: 1,
            maxEnemyReached: 1,
            bossCleared: {},
            baseDamagePerClick: 10,
            damageUpgrades: 0,
            autoDamage: 0,
            critChance: 5,
            critUpgrades: 0,
            autoUpgrades: 0,
            critMultiplier: 2.0,
            itemDamageMultiplier: 1,
            prestigeMultiplier: 1,
            currentEnemyHP: 100,
            maxEnemyHP: 100,
            bossTimer: 60,
            bossTimerInterval: null,
            currentBiome: 'grass',
            dailyCrateAvailable: true,
            lastDailyCrate: null,
            autoAttack: false,
            autoAttackInterval: null,
            totalDamageDealt: 0,
            totalEnemiesDefeated: 0,
            totalBossesDefeated: 0,
            totalCratesOpened: 0,
            difficultyMultiplier: 1.0,
            enteredCodes: []
        };
        
        inventory = {
            weapons: {},
            armor: {},
            pets: {},
            artifacts: {},
            activePet: null
        };
        
        achievements.forEach(a => a.claimed = false);
        
        ['daily', 'weekly', 'special'].forEach(type => {
            quests[type].forEach(q => {
                q.progress = 0;
                q.completed = false;
                q.claimed = false;
            });
        });
        
        localStorage.removeItem('brainrotClickerSave');
        location.reload();
    }
}

// ======================================================
// MESSAGE OVERLAY FUNCTIONS
// ======================================================

function showMessage(title, text) {
    const messageOverlay = document.getElementById('messageOverlay');
    const messageTitle = document.getElementById('messageTitle');
    const messageText = document.getElementById('messageText');
    
    if (messageOverlay && messageTitle && messageText) {
        messageTitle.innerHTML = title;
        messageText.innerHTML = text;
        messageOverlay.classList.add('show');
    }
}

function closeMessage() {
    const messageOverlay = document.getElementById('messageOverlay');
    if (messageOverlay) {
        messageOverlay.classList.remove('show');
    }
}

// ======================================================
// INITIALIZE GAME
// ======================================================

// Start the game when page loads
window.addEventListener('DOMContentLoaded', init);

// Export function for development
window.debugGame = () => {
    console.log('Game State:', gameState);
    console.log('Inventory:', inventory);
    console.log('Achievements:', achievements);
    console.log('Quests:', quests);
};

// Legg til disse funksjonene i window scope
window.attack = attack;
window.buyCoins = buyCoins;
window.buyCrate = buyCrate;
window.openDailyCrate = openDailyCrate;
window.buyDamageUpgrade = buyDamageUpgrade;
window.buyCritUpgrade = buyCritUpgrade;
window.buyAutoUpgrade = buyAutoUpgrade;
window.claimAchievement = claimAchievement;
window.claimQuest = claimQuest;
window.upgradeItem = upgradeItem;
window.removePet = removePet;
window.equipPet = equipPet;
window.showPrestigeModal = showPrestigeModal;
window.closeMessage = closeMessage;
window.showSimpleCrateOpening = showSimpleCrateOpening;
window.showItemModal = showItemModal;
window.closeItemModal = closeItemModal;
