// =====================================================
// Animal Catcher - A fun educational game for kids
// 220+ animals • Voice announcements • Touch & mouse
// =====================================================

const ANIMALS = [
  // Common & Farm
  "pig", "cow", "horse", "sheep", "goat", "chicken", "duck", "goose", "turkey", "donkey",
  "rabbit", "hamster", "guinea pig", "mouse", "rat", "dog", "cat", "ferret", "parrot", "budgie",
  // Wild mammals
  "lion", "tiger", "leopard", "cheetah", "jaguar", "panther", "cougar", "lynx", "bobcat",
  "elephant", "giraffe", "zebra", "hippopotamus", "rhinoceros", "buffalo", "bison", "yak",
  "bear", "polar bear", "panda", "koala", "kangaroo", "wallaby", "wombat", "platypus",
  "monkey", "gorilla", "chimpanzee", "orangutan", "baboon", "lemur", "gibbon",
  "deer", "moose", "elk", "reindeer", "antelope", "gazelle", "impala", "wildebeest",
  "fox", "wolf", "coyote", "dingo", "hyena", "jackal", "raccoon", "skunk", "badger",
  "otter", "beaver", "squirrel", "chipmunk", "porcupine", "hedgehog", "mole", "shrew",
  "bat", "sloth", "anteater", "armadillo", "aardvark", "meerkat", "mongoose",
  "camel", "llama", "alpaca", "okapi", "tapir",
  // Birds
  "eagle", "hawk", "falcon", "owl", "vulture", "condor", "crow", "raven", "magpie",
  "sparrow", "robin", "bluebird", "cardinal", "finch", "canary", "hummingbird", "woodpecker",
  "pelican", "seagull", "albatross", "penguin", "flamingo", "swan", "heron", "crane", "stork",
  "peacock", "pheasant", "quail", "pigeon", "dove", "toucan", "macaw", "cockatoo",
  "ostrich", "emu", "kiwi", "cassowary",
  // Reptiles & Amphibians
  "snake", "cobra", "python", "viper", "rattlesnake", "anaconda",
  "lizard", "gecko", "iguana", "chameleon", "komodo dragon", "monitor lizard",
  "crocodile", "alligator", "caiman",
  "turtle", "tortoise", "terrapin",
  "frog", "toad", "salamander", "newt", "axolotl",
  // Sea creatures
  "fish", "shark", "whale", "dolphin", "porpoise", "orca", "narwhal",
  "seal", "sea lion", "walrus", "manatee", "dugong",
  "octopus", "squid", "cuttlefish", "jellyfish", "starfish", "sea urchin",
  "crab", "lobster", "shrimp", "prawn", "clam", "oyster", "mussel",
  "seahorse", "eel", "ray", "stingray", "swordfish", "tuna", "salmon", "clownfish",
  // Insects & Bugs
  "butterfly", "moth", "bee", "wasp", "hornet", "ant", "termite",
  "beetle", "ladybug", "dragonfly", "damselfly", "grasshopper", "cricket", "locust",
  "fly", "mosquito", "firefly", "spider", "scorpion", "centipede", "millipede",
  "snail", "slug", "worm", "caterpillar",
  // Extra fun / less common but kid-friendly
  "capybara", "chinchilla", "gerbil", "sugar glider", "fossa", "binturong",
  "quokka", "numbat", "echidna", "tasmanian devil", "bilby",
  "ibex", "bighorn sheep", "mountain goat", "caribou",
  "puffin", "puffin", "kingfisher", "hornbill", "ibis", "egret",
  "newt", "axolotl", "caecilian",
  "barracuda", "piranha", "anglerfish", "blowfish", "seahorse",
  "mantis", "walking stick", "leaf insect", "cicada",
  "tarantula", "black widow", "orb weaver",
  "earthworm", "leech",
  "flamingo", "peacock", "toucan", "hornbill"
];

// Remove duplicates and ensure we have plenty
const UNIQUE_ANIMALS = [...new Set(ANIMALS.map(a => a.toLowerCase()))];
console.log(`Loaded ${UNIQUE_ANIMALS.length} unique animals`);

// Emoji map for visual fun (fallback to 🐾)
const EMOJI_MAP = {
  pig: "🐷", cow: "🐄", horse: "🐴", sheep: "🐑", goat: "🐐", chicken: "🐔", duck: "🦆",
  goose: "🦢", turkey: "🦃", donkey: "🫏", rabbit: "🐰", hamster: "🐹", mouse: "🐭",
  rat: "🐀", dog: "🐶", cat: "🐱", ferret: "🦦", parrot: "🦜", lion: "🦁", tiger: "🐯",
  leopard: "🐆", cheetah: "🐆", elephant: "🐘", giraffe: "🦒", zebra: "🦓",
  hippopotamus: "🦛", rhinoceros: "🦏", buffalo: "🐃", bison: "🦬", bear: "🐻",
  "polar bear": "🐻‍❄️", panda: "🐼", koala: "🐨", kangaroo: "🦘", monkey: "🐵",
  gorilla: "🦍", chimpanzee: "🦧", orangutan: "🦧", deer: "🦌", moose: "🫎",
  fox: "🦊", wolf: "🐺", raccoon: "🦝", skunk: "🦨", otter: "🦦", beaver: "🦫",
  squirrel: "🐿️", bat: "🦇", sloth: "🦥", camel: "🐫", llama: "🦙", eagle: "🦅",
  owl: "🦉", penguin: "🐧", flamingo: "🦩", swan: "🦢", peacock: "🦚",
  ostrich: "🐦", snake: "🐍", lizard: "🦎", crocodile: "🐊", alligator: "🐊",
  turtle: "🐢", frog: "🐸", fish: "🐟", shark: "🦈", whale: "🐋", dolphin: "🐬",
  octopus: "🐙", crab: "🦀", lobster: "🦞", shrimp: "🦐", jellyfish: "🪼",
  starfish: "⭐", seahorse: "🦄", butterfly: "🦋", bee: "🐝", ant: "🐜",
  beetle: "🪲", ladybug: "🐞", dragonfly: "🦟", spider: "🕷️", snail: "🐌",
  worm: "🪱", caterpillar: "🐛", scorpion: "🦂"
};

function getEmoji(name) {
  return EMOJI_MAP[name] || "🐾";
}

// ========== GAME STATE ==========
let score = 0;
let caughtCount = 0;
let uniqueCaught = new Set();
let level = 1;
let isPlaying = false;
let isPaused = false;
let voiceEnabled = true;
let animals = []; // active animal objects
let spawnInterval = null;
let animationId = null;
let lastSpawn = 0;
let netX = 0;
let netY = 0;
let isNetActive = false;

// DOM elements
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

// Pointer / touch handling
playArea.addEventListener("pointermove", onPointerMove);
playArea.addEventListener("pointerdown", onPointerDown);
playArea.addEventListener("pointerup", onPointerUp);
playArea.addEventListener("pointerleave", () => { isNetActive = false; net.classList.remove("active"); });

// Prevent scrolling on mobile
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
  animals = [];
  updateHUD();
  lastSpawn = performance.now();
  // Center net initially
  const rect = playArea.getBoundingClientRect();
  netX = rect.width / 2;
  netY = rect.height / 2;
  updateNetPosition();
  requestAnimationFrame(gameLoop);
  // Spawn a few animals quickly at start
  for (let i = 0; i < 4; i++) {
    setTimeout(() => spawnAnimal(), i * 400);
  }
}

function restartGame() {
  // Clear existing animals
  animals.forEach(a => a.el.remove());
  animals = [];
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
  // Try catch immediately
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

  // Spawn logic – more animals as level increases
  const spawnRate = Math.max(600, 1800 - level * 120); // ms between spawns
  if (timestamp - lastSpawn > spawnRate && animals.length < 8 + level) {
    spawnAnimal();
    lastSpawn = timestamp;
  }

  // Move animals
  const areaW = playArea.clientWidth;
  const areaH = playArea.clientHeight;

  for (let i = animals.length - 1; i >= 0; i--) {
    const a = animals[i];
    a.x += a.vx;
    a.y += a.vy;

    // Bounce off walls
    if (a.x < 0 || a.x > areaW - a.size) {
      a.vx *= -1;
      a.x = Math.max(0, Math.min(a.x, areaW - a.size));
    }
    if (a.y < 0 || a.y > areaH - a.size) {
      a.vy *= -1;
      a.y = Math.max(0, Math.min(a.y, areaH - a.size));
    }

    a.el.style.left = a.x + "px";
    a.el.style.top = a.y + "px";

    // Soft random direction change occasionally
    if (Math.random() < 0.01) {
      a.vx += (Math.random() - 0.5) * 0.4;
      a.vy += (Math.random() - 0.5) * 0.4;
      // Keep speed reasonable
      const speed = Math.hypot(a.vx, a.vy);
      const maxSpeed = 1.2 + level * 0.25;
      if (speed > maxSpeed) {
        a.vx = (a.vx / speed) * maxSpeed;
        a.vy = (a.vy / speed) * maxSpeed;
      }
    }
  }

  // Continuous catch while holding
  if (isNetActive) {
    tryCatch();
  }

  animationId = requestAnimationFrame(gameLoop);
}

// ========== SPAWN ==========
function spawnAnimal() {
  if (animals.length > 14) return;

  const name = UNIQUE_ANIMALS[Math.floor(Math.random() * UNIQUE_ANIMALS.length)];
  const size = 55 + Math.random() * 25;
  const el = document.createElement("div");
  el.className = "animal";
  el.style.width = size + "px";
  el.style.height = size + "px";
  el.style.fontSize = (size * 0.55) + "px";
  el.textContent = getEmoji(name);

  // Random pastel background
  const hue = Math.floor(Math.random() * 360);
  el.style.background = `hsl(${hue}, 70%, 85%)`;
  el.style.border = `4px solid hsl(${hue}, 60%, 55%)`;

  const areaW = playArea.clientWidth;
  const areaH = playArea.clientHeight;

  // Spawn from edges
  let x, y, vx, vy;
  const side = Math.floor(Math.random() * 4);
  const speed = 0.6 + Math.random() * 0.9 + level * 0.15;

  if (side === 0) { // top
    x = Math.random() * areaW;
    y = -size;
    vx = (Math.random() - 0.5) * speed;
    vy = speed * 0.7;
  } else if (side === 1) { // right
    x = areaW;
    y = Math.random() * areaH;
    vx = -speed * 0.7;
    vy = (Math.random() - 0.5) * speed;
  } else if (side === 2) { // bottom
    x = Math.random() * areaW;
    y = areaH;
    vx = (Math.random() - 0.5) * speed;
    vy = -speed * 0.7;
  } else { // left
    x = -size;
    y = Math.random() * areaH;
    vx = speed * 0.7;
    vy = (Math.random() - 0.5) * speed;
  }

  el.style.left = x + "px";
  el.style.top = y + "px";
  playArea.appendChild(el);

  const animal = { name, el, x, y, vx, vy, size, caught: false };
  animals.push(animal);

  // Click on animal also catches (extra friendly for kids)
  el.addEventListener("pointerdown", (e) => {
    e.stopPropagation();
    if (!animal.caught) catchAnimal(animal);
  });
}

// ========== CATCH ==========
function tryCatch() {
  const netRadius = (isNetActive ? 70 : 60);
  const netCX = netX;
  const netCY = netY;

  for (let i = animals.length - 1; i >= 0; i--) {
    const a = animals[i];
    if (a.caught) continue;

    const ax = a.x + a.size / 2;
    const ay = a.y + a.size / 2;
    const dist = Math.hypot(ax - netCX, ay - netCY);

    if (dist < netRadius + a.size / 3) {
      catchAnimal(a);
    }
  }
}

function catchAnimal(animal) {
  if (animal.caught) return;
  animal.caught = true;

  // Visual feedback
  animal.el.classList.add("caught");
  createParticles(animal.x + animal.size / 2, animal.y + animal.size / 2);

  // Score & stats
  const points = 10 + level * 2;
  score += points;
  caughtCount++;
  uniqueCaught.add(animal.name);

  // Level up every 12 catches
  if (caughtCount % 12 === 0) {
    level++;
  }

  updateHUD();
  showCatchMessage(animal.name);
  speakAnimal(animal.name);

  // Remove after animation
  setTimeout(() => {
    animal.el.remove();
    animals = animals.filter(a => a !== animal);
  }, 450);
}

function showCatchMessage(name) {
  catchMessage.textContent = `You caught a ${name}!`;
  catchMessage.classList.remove("hidden");
  // Restart animation
  catchMessage.style.animation = "none";
  catchMessage.offsetHeight; // reflow
  catchMessage.style.animation = null;

  setTimeout(() => {
    catchMessage.classList.add("hidden");
  }, 1800);
}

function speakAnimal(name) {
  if (!voiceEnabled || !window.speechSynthesis) return;

  // Cancel any previous speech so it doesn't queue up
  speechSynthesis.cancel();

  const phrases = [
    `Hi! I'm a ${name}!`,
    `You caught me! I'm a ${name}!`,
    `I'm a ${name}! Nice to meet you!`,
    `Wow! You got a ${name}!`,
    `Hello! I'm a ${name}!`
  ];
  const text = phrases[Math.floor(Math.random() * phrases.length)];

  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 0.95 + Math.random() * 0.2;
  utter.pitch = 1.0 + Math.random() * 0.4;
  utter.volume = 1;

  // Prefer a friendly voice if available
  const voices = speechSynthesis.getVoices();
  const preferred = voices.find(v => 
    v.name.includes("Google") || v.name.includes("Samantha") || 
    v.name.includes("Karen") || v.name.includes("Moira") ||
    v.lang.startsWith("en")
  );
  if (preferred) utter.voice = preferred;

  speechSynthesis.speak(utter);
}

// Preload voices
if (window.speechSynthesis) {
  speechSynthesis.getVoices();
  speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
}

function createParticles(x, y) {
  const colors = ["#ffeb3b", "#ff9800", "#e91e63", "#2196f3", "#4caf50", "#9c27b0"];
  for (let i = 0; i < 12; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = x + "px";
    p.style.top = y + "px";
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    const angle = (Math.PI * 2 * i) / 12;
    const dist = 40 + Math.random() * 50;
    p.style.setProperty("--tx", Math.cos(angle) * dist + "px");
    p.style.setProperty("--ty", Math.sin(angle) * dist + "px");
    playArea.appendChild(p);
    setTimeout(() => p.remove(), 800);
  }
}

function updateHUD() {
  scoreEl.textContent = score;
  caughtEl.textContent = caughtCount;
  uniqueEl.textContent = uniqueCaught.size;
  levelEl.textContent = level;
}

// Make sure voices are loaded on some browsers
window.addEventListener("load", () => {
  if (window.speechSynthesis) speechSynthesis.getVoices();
});
