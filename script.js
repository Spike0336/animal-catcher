// =====================================================
// Animal Catcher - Real photos edition
// One animal at a time • Real pictures • Faster pace
// =====================================================

// Large pool of names for speech variety
const ALL_ANIMALS = [
  "pig", "cow", "horse", "sheep", "goat", "chicken", "duck", "goose", "turkey", "donkey",
  "rabbit", "hamster", "guinea pig", "mouse", "rat", "dog", "cat", "ferret", "parrot",
  "lion", "tiger", "leopard", "cheetah", "jaguar", "panther", "cougar", "lynx",
  "elephant", "giraffe", "zebra", "hippopotamus", "rhinoceros", "buffalo", "bison",
  "bear", "polar bear", "panda", "koala", "kangaroo", "wallaby", "wombat", "platypus",
  "monkey", "gorilla", "chimpanzee", "orangutan", "baboon", "lemur",
  "deer", "moose", "elk", "reindeer", "antelope", "gazelle", "impala",
  "fox", "wolf", "coyote", "dingo", "hyena", "raccoon", "skunk", "badger",
  "otter", "beaver", "squirrel", "chipmunk", "porcupine", "hedgehog",
  "bat", "sloth", "anteater", "armadillo", "aardvark", "meerkat",
  "camel", "llama", "alpaca",
  "eagle", "hawk", "falcon", "owl", "vulture", "crow", "penguin", "flamingo", "swan",
  "peacock", "pelican", "toucan", "ostrich", "emu",
  "snake", "cobra", "python", "lizard", "gecko", "iguana", "chameleon",
  "crocodile", "alligator", "turtle", "tortoise", "frog", "toad", "salamander",
  "fish", "shark", "whale", "dolphin", "seal", "octopus", "crab", "lobster", "jellyfish",
  "butterfly", "bee", "ant", "ladybug", "dragonfly", "spider", "snail", "caterpillar"
];

const UNIQUE_ANIMALS = [...new Set(ALL_ANIMALS.map(a => a.toLowerCase()))];

// Real animal photos from Wikimedia Commons (stable thumbnail URLs)
// These are free to use under Creative Commons / public domain
const ANIMAL_IMAGES = {
  "pig": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Sus_scrofa_domesticus%2C_domesticus.jpg/220px-Sus_scrofa_domesticus%2C_domesticus.jpg",
  "cow": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Cow_female_black_white.jpg/220px-Cow_female_black_white.jpg",
  "horse": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dapple_grey_horse.jpg/220px-Dapple_grey_horse.jpg",
  "sheep": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flock_of_sheep.jpg/220px-Flock_of_sheep.jpg",
  "goat": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/220px-Hausziege_04.jpg",
  "chicken": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Female_and_male_chicken_sitting_together.jpg/220px-Female_and_male_chicken_sitting_together.jpg",
  "duck": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Anas_platyrhynchos_male_female.jpg/220px-Anas_platyrhynchos_male_female.jpg",
  "goose": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Domestic_goose.jpg/220px-Domestic_goose.jpg",
  "turkey": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Male_wild_turkey.jpg/220px-Male_wild_turkey.jpg",
  "donkey": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Donkey_1.jpg/220px-Donkey_1.jpg",
  "rabbit": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Oryctolagus_cuniculus_Rcdo.jpg/220px-Oryctolagus_cuniculus_Rcdo.jpg",
  "hamster": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Golden_Hamster.jpg/220px-Golden_Hamster.jpg",
  "mouse": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Mouse_white.jpg/220px-Mouse_white.jpg",
  "dog": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/220px-YellowLabradorLooking_new.jpg",
  "cat": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/220px-Cat03.jpg",
  "lion": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/220px-Lion_waiting_in_Namibia.jpg",
  "tiger": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/220px-Walking_tiger_female.jpg",
  "elephant": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/220px-African_Bush_Elephant.jpg",
  "giraffe": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Giraffe_Mikumi_National_Park.jpg/220px-Giraffe_Mikumi_National_Park.jpg",
  "zebra": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Equus_quagga_burchellii_-_Etosha%2C_2014.jpg/220px-Equus_quagga_burchellii_-_Etosha%2C_2014.jpg",
  "hippopotamus": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_pod_edit.jpg/220px-Hippo_pod_edit.jpg",
  "rhinoceros": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/White_rhino.jpg/220px-White_rhino.jpg",
  "bear": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/220px-2010-kodiak-bear-1.jpg",
  "panda": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/220px-Grosser_Panda.JPG",
  "koala": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Koala_climbing_tree.jpg/220px-Koala_climbing_tree.jpg",
  "kangaroo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Kangaroo_and_joey03.jpg/220px-Kangaroo_and_joey03.jpg",
  "monkey": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Vervet_monkey_%28Chlorocebus_pygerythrus_pygerythrus%29.jpg/220px-Vervet_monkey_%28Chlorocebus_pygerythrus_pygerythrus%29.jpg",
  "gorilla": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Gorille_des_plaines_de_l%27ouest_au_Zoo_de_la_Palmyre.jpg/220px-Gorille_des_plaines_de_l%27ouest_au_Zoo_de_la_Palmyre.jpg",
  "chimpanzee": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Schimpanse_Zoo_Leipzig.jpg/220px-Schimpanse_Zoo_Leipzig.jpg",
  "orangutan": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Orang_Utan%2C_Semenggok_Forest_Reserve%2C_Sarawak%2C_Borneo%2C_Malaysia.JPG/220px-Orang_Utan%2C_Semenggok_Forest_Reserve%2C_Sarawak%2C_Borneo%2C_Malaysia.JPG",
  "deer": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/White-tailed_deer.jpg/220px-White-tailed_deer.jpg",
  "fox": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Fox_-_British_Wildlife_Centre_%2817427893391%29.jpg/220px-Fox_-_British_Wildlife_Centre_%2817427893391%29.jpg",
  "wolf": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Kolm%C3%A5rden_Wolf.jpg/220px-Kolm%C3%A5rden_Wolf.jpg",
  "raccoon": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Raccoon_in_Central_Park_%282%29.jpg/220px-Raccoon_in_Central_Park_%282%29.jpg",
  "squirrel": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Eastern_Grey_Squirrel_I4.jpg/220px-Eastern_Grey_Squirrel_I4.jpg",
  "bat": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flying_fox_at_Botanic_Gardens.jpg/220px-Flying_fox_at_Botanic_Gardens.jpg",
  "camel": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg/220px-07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg",
  "eagle": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/About_to_Launch_%28cropped%29.jpg/220px-About_to_Launch_%28cropped%29.jpg",
  "owl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Great_Horned_Owl.jpg/220px-Great_Horned_Owl.jpg",
  "penguin": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Emperor_Penguin_Manchot_empereur.jpg/220px-Emperor_Penguin_Manchot_empereur.jpg",
  "flamingo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Caribbean_flamingo.jpg/220px-Caribbean_flamingo.jpg",
  "swan": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Swan_on_Lake_Geneva.jpg/220px-Swan_on_Lake_Geneva.jpg",
  "peacock": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Peacock_Plumage.jpg/220px-Peacock_Plumage.jpg",
  "snake": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Python_molurus_molurus_2.jpg/220px-Python_molurus_molurus_2.jpg",
  "lizard": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Emerald_Swift_Lizard.jpg/220px-Emerald_Swift_Lizard.jpg",
  "crocodile": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nile_crocodile_head.jpg/220px-Nile_crocodile_head.jpg",
  "turtle": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Turtle1.jpg/220px-Turtle1.jpg",
  "frog": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Poison_dart_frog.jpg/220px-Poison_dart_frog.jpg",
  "fish": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Goldfish_in_aquarium.jpg/220px-Goldfish_in_aquarium.jpg",
  "shark": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/White_shark.jpg/220px-White_shark.jpg",
  "whale": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Humpback_Whale_underwater_shot.jpg/220px-Humpback_Whale_underwater_shot.jpg",
  "dolphin": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tursiops_truncatus_01.jpg/220px-Tursiops_truncatus_01.jpg",
  "octopus": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Octopus2.jpg/220px-Octopus2.jpg",
  "crab": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cancer_pagurus.jpg/220px-Cancer_pagurus.jpg",
  "lobster": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Homarus_gammarus.jpg/220px-Homarus_gammarus.jpg",
  "butterfly": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Monarch_Butterfly_Danaus_plexippus_Male_2664px.jpg/220px-Monarch_Butterfly_Danaus_plexippus_Male_2664px.jpg",
  "bee": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Apis_mellifera_Western_honey_bee.jpg/220px-Apis_mellifera_Western_honey_bee.jpg",
  "ant": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Fire_ants.jpg/220px-Fire_ants.jpg",
  "spider": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Spider_February_2008-1.jpg/220px-Spider_February_2008-1.jpg",
  "snail": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Cornu_aspersum_%28Garden_Snail%29.jpg/220px-Cornu_aspersum_%28Garden_Snail%29.jpg"
};

// Prefer animals that have real photos
const PHOTO_ANIMALS = Object.keys(ANIMAL_IMAGES);

// ========== GAME STATE ==========
let score = 0;
let caughtCount = 0;
let uniqueCaught = new Set();
let level = 1;
let isPlaying = false;
let isPaused = false;
let voiceEnabled = true;
let currentAnimal = null;   // only one at a time
let holes = [];
let animationId = null;
let lastSpawn = 0;
let netX = 0;
let netY = 0;
let isNetActive = false;
const NUM_HOLES = 6;

// DOM
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const playArea = document.getElementById("play-area");
const net = document.getElementById("net");
const catchMessage = document.getElementById("catch-message");
const scoreEl = document.getElementById("score");
const caughtEl = document.getElementById("caught-count");
const uniqueEl = document.getElementById("unique-count");
const levelEl = document.getElementById("level");
const muteBtn = document.getElementById("mute-btn");
const pauseBtn = document.getElementById("pause-btn");
const pauseOverlay = document.getElementById("pause-overlay");

// ========== INIT ==========
document.getElementById("start-btn").addEventListener("click", startGame);
document.getElementById("resume-btn").addEventListener("click", resumeGame);
document.getElementById("restart-btn").addEventListener("click", () => {
  pauseOverlay.classList.add("hidden");
  restartGame();
});
muteBtn.addEventListener("click", toggleVoice);
pauseBtn.addEventListener("click", pauseGame);

playArea.addEventListener("pointermove", onPointerMove);
playArea.addEventListener("pointerdown", onPointerDown);
playArea.addEventListener("pointerup", onPointerUp);
playArea.addEventListener("pointerleave", () => {
  isNetActive = false;
  net.classList.remove("active");
});

document.body.addEventListener("touchmove", (e) => {
  if (isPlaying) e.preventDefault();
}, { passive: false });

function startGame() {
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  isPlaying = true;
  isPaused = false;
  score = 0;
  caughtCount = 0;
  uniqueCaught.clear();
  level = 1;
  currentAnimal = null;
  updateHUD();

  playArea.querySelectorAll(".hole, .animal").forEach(el => el.remove());
  createHoles();

  const rect = playArea.getBoundingClientRect();
  netX = rect.width / 2;
  netY = rect.height / 2;
  updateNetPosition();

  lastSpawn = performance.now();
  requestAnimationFrame(gameLoop);

  // First animal appears quickly
  setTimeout(() => spawnAnimal(), 500);
}

function restartGame() {
  if (currentAnimal) {
    if (currentAnimal.hideTimer) clearTimeout(currentAnimal.hideTimer);
    if (currentAnimal.el) currentAnimal.el.remove();
  }
  currentAnimal = null;
  startGame();
}

function pauseGame() {
  if (!isPlaying) return;
  isPaused = true;
  pauseOverlay.classList.remove("hidden");
  cancelAnimationFrame(animationId);
}

function resumeGame() {
  isPaused = false;
  pauseOverlay.classList.add("hidden");
  lastSpawn = performance.now();
  requestAnimationFrame(gameLoop);
}

function toggleVoice() {
  voiceEnabled = !voiceEnabled;
  muteBtn.textContent = voiceEnabled ? "🔊 Voice On" : "🔇 Voice Off";
}

// ========== HOLES ==========
function createHoles() {
  holes = [];
  const areaW = playArea.clientWidth;
  const areaH = playArea.clientHeight;

  const cols = 3;
  const rows = 2;
  const marginX = areaW * 0.12;
  const marginY = areaH * 0.32;
  const usableW = areaW - marginX * 2;
  const usableH = areaH - marginY - areaH * 0.1;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = marginX + (usableW / (cols - 1)) * c;
      const y = marginY + (usableH / (rows - 1)) * r;

      const holeEl = document.createElement("div");
      holeEl.className = "hole";
      holeEl.style.left = x + "px";
      holeEl.style.top = y + "px";
      playArea.appendChild(holeEl);

      holes.push({ x, y, el: holeEl, occupied: false });
    }
  }
}

// ========== POINTER ==========
function onPointerMove(e) {
  if (!isPlaying || isPaused) return;
  const rect = playArea.getBoundingClientRect();
  netX = e.clientX - rect.left;
  netY = e.clientY - rect.top;
  updateNetPosition();
}

function onPointerDown(e) {
  if (!isPlaying || isPaused) return;
  isNetActive = true;
  net.classList.add("active");
  tryCatch();
}

function onPointerUp() {
  isNetActive = false;
  net.classList.remove("active");
}

function updateNetPosition() {
  net.style.left = netX + "px";
  net.style.top = netY + "px";
}

// ========== GAME LOOP ==========
function gameLoop(timestamp) {
  if (!isPlaying || isPaused) return;

  // Only spawn if no animal is currently out
  // Faster pace: shorter gap between animals as level rises
  const gap = Math.max(380, 900 - level * 55);

  if (!currentAnimal && timestamp - lastSpawn > gap) {
    spawnAnimal();
    lastSpawn = timestamp;
  }

  if (isNetActive) tryCatch();

  animationId = requestAnimationFrame(gameLoop);
}

// ========== SPAWN (one at a time) ==========
function spawnAnimal() {
  if (currentAnimal) return;

  const freeHoles = holes.filter(h => !h.occupied);
  if (freeHoles.length === 0) return;

  const hole = freeHoles[Math.floor(Math.random() * freeHoles.length)];
  hole.occupied = true;

  // Prefer animals that have real photos (about 80% of the time)
  let name;
  if (Math.random() < 0.82 && PHOTO_ANIMALS.length) {
    name = PHOTO_ANIMALS[Math.floor(Math.random() * PHOTO_ANIMALS.length)];
  } else {
    name = UNIQUE_ANIMALS[Math.floor(Math.random() * UNIQUE_ANIMALS.length)];
  }

  const size = 78;

  const el = document.createElement("div");
  el.className = "animal popping";
  el.style.width = size + "px";
  el.style.height = size + "px";

  // Real photo or nice fallback
  const imgUrl = ANIMAL_IMAGES[name];
  if (imgUrl) {
    const img = document.createElement("img");
    img.src = imgUrl;
    img.alt = name;
    img.draggable = false;
    img.onerror = () => {
      // Fallback if image fails to load
      el.innerHTML = "";
      el.textContent = name.charAt(0).toUpperCase();
      el.style.fontSize = "2rem";
      el.style.fontWeight = "bold";
      el.style.color = "#5d4037";
      el.style.background = "#fff9c4";
    };
    el.appendChild(img);
    el.style.background = "#fff";
  } else {
    // Clean text fallback for animals without a photo mapping
    el.textContent = name.charAt(0).toUpperCase() + name.slice(1, 3);
    el.style.fontSize = "1.1rem";
    el.style.fontWeight = "bold";
    el.style.color = "#5d4037";
    el.style.background = `hsl(${Math.random()*360}, 70%, 85%)`;
  }

  el.style.left = (hole.x - size / 2) + "px";
  el.style.top = (hole.y - size / 2 - 8) + "px";
  playArea.appendChild(el);

  // Stay time – shorter and gets quicker with level
  const stayTime = Math.max(650, 1350 - level * 70) + Math.random() * 200;

  const animal = {
    name,
    el,
    hole,
    size,
    caught: false,
    hideTimer: null
  };

  setTimeout(() => {
    if (!animal.caught) {
      el.classList.remove("popping");
      el.classList.add("visible");
    }
  }, 160);

  animal.hideTimer = setTimeout(() => {
    if (!animal.caught) hideAnimal(animal);
  }, stayTime);

  currentAnimal = animal;

  // Direct tap also works
  el.addEventListener("pointerdown", (e) => {
    e.stopPropagation();
    if (!animal.caught) catchAnimal(animal);
  });
}

function hideAnimal(animal) {
  if (animal.caught || !animal.el) return;
  animal.el.classList.remove("visible", "popping");
  animal.el.classList.add("hiding");

  setTimeout(() => {
    if (animal.el && animal.el.parentNode) animal.el.remove();
    animal.hole.occupied = false;
    if (currentAnimal === animal) currentAnimal = null;
    lastSpawn = performance.now(); // allow next one soon
  }, 260);
}

// ========== CATCH ==========
function tryCatch() {
  if (!currentAnimal || currentAnimal.caught) return;

  const netRadius = isNetActive ? 70 : 60;
  const a = currentAnimal;
  const dist = Math.hypot(a.hole.x - netX, a.hole.y - netY);

  if (dist < netRadius + a.size * 0.4) {
    catchAnimal(a);
  }
}

function catchAnimal(animal) {
  if (animal.caught) return;
  animal.caught = true;

  if (animal.hideTimer) clearTimeout(animal.hideTimer);

  animal.el.classList.remove("popping", "visible", "hiding");
  animal.el.classList.add("caught");

  createBigConfetti(animal.hole.x, animal.hole.y);

  const points = 15 + level * 3;
  score += points;
  caughtCount++;
  uniqueCaught.add(animal.name);

  if (caughtCount % 8 === 0) level++;

  updateHUD();
  showBigCelebration(animal.name);
  speakCatch(animal.name);
  playFanfare();

  setTimeout(() => {
    if (animal.el && animal.el.parentNode) animal.el.remove();
    animal.hole.occupied = false;
    currentAnimal = null;
    lastSpawn = performance.now();
  }, 550);
}

// ========== CELEBRATION ==========
function showBigCelebration(name) {
  catchMessage.innerHTML = `
    <div class="celebrate-title">🎉 You caught a ${name}! 🎉</div>
    <div class="celebrate-sub">Great job!</div>
  `;
  catchMessage.classList.remove("hidden");
  catchMessage.classList.add("big-celebrate");

  catchMessage.style.animation = "none";
  catchMessage.offsetHeight;
  catchMessage.style.animation = null;

  setTimeout(() => {
    catchMessage.classList.add("hidden");
    catchMessage.classList.remove("big-celebrate");
  }, 2200);
}

function speakCatch(name) {
  if (!voiceEnabled || !window.speechSynthesis) return;

  speechSynthesis.cancel();

  const phrases = [
    `I'm a ${name}. You caught me!`,
    `I'm a ${name}! You caught me!`,
    `You got me! I'm a ${name}!`,
    `I'm a ${name}. Nice catch!`
  ];
  const text = phrases[Math.floor(Math.random() * phrases.length)];

  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 0.92 + Math.random() * 0.12;
  utter.pitch = 1.05 + Math.random() * 0.25;
  utter.volume = 1;

  const voices = speechSynthesis.getVoices();
  const preferred = voices.find(v =>
    v.name.includes("Google") || v.name.includes("Samantha") ||
    v.name.includes("Karen") || v.name.includes("Moira") ||
    (v.lang.startsWith("en") && v.name.toLowerCase().includes("female"))
  ) || voices.find(v => v.lang.startsWith("en"));

  if (preferred) utter.voice = preferred;
  speechSynthesis.speak(utter);
}

function playFanfare() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99, 1046.50];
    const now = ctx.currentTime;

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.22, now + 0.02 + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.32 + i * 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + i * 0.09);
      osc.stop(now + 0.38 + i * 0.09);
    });
  } catch (e) {}
}

function createBigConfetti(x, y) {
  const colors = ["#ffeb3b", "#ff9800", "#e91e63", "#2196f3", "#4caf50", "#9c27b0", "#00bcd4", "#ff5722"];
  for (let i = 0; i < 26; i++) {
    const p = document.createElement("div");
    p.className = "confetti";
    const size = 8 + Math.random() * 9;
    p.style.width = size + "px";
    p.style.height = size + "px";
    p.style.left = x + "px";
    p.style.top = y + "px";
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.borderRadius = Math.random() > 0.4 ? "50%" : "2px";

    const angle = (Math.PI * 2 * i) / 26 + (Math.random() - 0.5) * 0.4;
    const dist = 55 + Math.random() * 110;
    p.style.setProperty("--tx", Math.cos(angle) * dist + "px");
    p.style.setProperty("--ty", (Math.sin(angle) * dist - 35) + "px");
    p.style.setProperty("--rot", (Math.random() * 700 - 350) + "deg");

    playArea.appendChild(p);
    setTimeout(() => p.remove(), 1000);
  }
}

function updateHUD() {
  scoreEl.textContent = score;
  caughtEl.textContent = caughtCount;
  uniqueEl.textContent = uniqueCaught.size;
  levelEl.textContent = level;
}

// Preload voices
if (window.speechSynthesis) {
  speechSynthesis.getVoices();
  speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
}
window.addEventListener("load", () => {
  if (window.speechSynthesis) speechSynthesis.getVoices();
});
