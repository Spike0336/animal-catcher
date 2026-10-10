// =====================================================
// Animal Catcher - Pop-up from holes edition
// Animals burst out of holes, stay only a short time!
// Big celebration + voice when you catch one.
// =====================================================

const ANIMALS = [
  "pig", "cow", "horse", "sheep", "goat", "chicken", "duck", "goose", "turkey", "donkey",
  "rabbit", "hamster", "guinea pig", "mouse", "rat", "dog", "cat", "ferret", "parrot", "budgie",
  "lion", "tiger", "leopard", "cheetah", "jaguar", "panther", "cougar", "lynx", "bobcat",
  "elephant", "giraffe", "zebra", "hippopotamus", "rhinoceros", "buffalo", "bison", "yak",
  "bear", "polar bear", "panda", "koala", "kangaroo", "wallaby", "wombat", "platypus",
  "monkey", "gorilla", "chimpanzee", "orangutan", "baboon", "lemur", "gibbon",
  "deer", "moose", "elk", "reindeer", "antelope", "gazelle", "impala", "wildebeest",
  "fox", "wolf", "coyote", "dingo", "hyena", "jackal", "raccoon", "skunk", "badger",
  "otter", "beaver", "squirrel", "chipmunk", "porcupine", "hedgehog", "mole", "shrew",
  "bat", "sloth", "anteater", "armadillo", "aardvark", "meerkat", "mongoose",
  "camel", "llama", "alpaca", "okapi", "tapir",
  "eagle", "hawk", "falcon", "owl", "vulture", "condor", "crow", "raven", "magpie",
  "sparrow", "robin", "bluebird", "cardinal", "finch", "canary", "hummingbird", "woodpecker",
  "pelican", "seagull", "albatross", "penguin", "flamingo", "swan", "heron", "crane", "stork",
  "peacock", "pheasant", "quail", "pigeon", "dove", "toucan", "macaw", "cockatoo",
  "ostrich", "emu", "kiwi", "cassowary",
  "snake", "cobra", "python", "viper", "rattlesnake", "anaconda",
  "lizard", "gecko", "iguana", "chameleon", "komodo dragon", "monitor lizard",
  "crocodile", "alligator", "caiman",
  "turtle", "tortoise", "terrapin",
  "frog", "toad", "salamander", "newt", "axolotl",
  "fish", "shark", "whale", "dolphin", "porpoise", "orca", "narwhal",
  "seal", "sea lion", "walrus", "manatee", "dugong",
  "octopus", "squid", "cuttlefish", "jellyfish", "starfish", "sea urchin",
  "crab", "lobster", "shrimp", "prawn", "clam", "oyster", "mussel",
  "seahorse", "eel", "ray", "stingray", "swordfish", "tuna", "salmon", "clownfish",
  "butterfly", "moth", "bee", "wasp", "hornet", "ant", "termite",
  "beetle", "ladybug", "dragonfly", "damselfly", "grasshopper", "cricket", "locust",
  "fly", "mosquito", "firefly", "spider", "scorpion", "centipede", "millipede",
  "snail", "slug", "worm", "caterpillar",
  "capybara", "chinchilla", "gerbil", "sugar glider", "fossa", "binturong",
  "quokka", "numbat", "echidna", "tasmanian devil", "bilby",
  "ibex", "bighorn sheep", "mountain goat", "caribou",
  "puffin", "kingfisher", "hornbill", "ibis", "egret",
  "caecilian", "barracuda", "piranha", "anglerfish", "blowfish",
  "mantis", "walking stick", "leaf insect", "cicada",
  "tarantula", "black widow", "orb weaver",
  "earthworm", "leech"
];

const UNIQUE_ANIMALS = [...new Set(ANIMALS.map(a => a.toLowerCase()))];

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
let activeAnimals = [];          // currently visible animals
let holes = [];                  // fixed hole positions
let animationId = null;
let lastSpawn = 0;
let netX = 0;
let netY = 0;
let isNetActive = false;
const NUM_HOLES = 8;

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
  activeAnimals = [];
  updateHUD();

  // Clear any old holes/animals
  playArea.querySelectorAll(".hole, .animal").forEach(el => el.remove());

  createHoles();

  const rect = playArea.getBoundingClientRect();
  netX = rect.width / 2;
  netY = rect.height / 2;
  updateNetPosition();

  lastSpawn = performance.now();
  requestAnimationFrame(gameLoop);

  // Quick initial pops
  setTimeout(() => spawnAnimal(), 300);
  setTimeout(() => spawnAnimal(), 700);
  setTimeout(() => spawnAnimal(), 1100);
}

function restartGame() {
  activeAnimals.forEach(a => {
    if (a.el) a.el.remove();
    if (a.hideTimer) clearTimeout(a.hideTimer);
  });
  activeAnimals = [];
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

  // Place holes mostly in the lower 65% of the area in a loose grid
  const cols = 4;
  const rows = 2;
  const marginX = areaW * 0.08;
  const marginY = areaH * 0.35;
  const usableW = areaW - marginX * 2;
  const usableH = areaH - marginY - areaH * 0.08;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = marginX + (usableW / (cols - 1)) * c;
      const y = marginY + (usableH / (rows - 1)) * r;

      const holeEl = document.createElement("div");
      holeEl.className = "hole";
      holeEl.style.left = x + "px";
      holeEl.style.top = y + "px";
      playArea.appendChild(holeEl);

      holes.push({
        x,
        y,
        el: holeEl,
        occupied: false
      });
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

  // Spawn rate gets faster with level (but not crazy)
  const baseInterval = Math.max(450, 1100 - level * 70);
  if (timestamp - lastSpawn > baseInterval) {
    // Chance to spawn 1 or sometimes 2 at higher levels
    spawnAnimal();
    if (level >= 3 && Math.random() < 0.35) spawnAnimal();
    lastSpawn = timestamp;
  }

  if (isNetActive) tryCatch();

  animationId = requestAnimationFrame(gameLoop);
}

// ========== SPAWN FROM HOLE ==========
function spawnAnimal() {
  // Find free holes
  const freeHoles = holes.filter(h => !h.occupied);
  if (freeHoles.length === 0) return;

  const hole = freeHoles[Math.floor(Math.random() * freeHoles.length)];
  hole.occupied = true;

  const name = UNIQUE_ANIMALS[Math.floor(Math.random() * UNIQUE_ANIMALS.length)];
  const size = 62 + Math.random() * 18;

  const el = document.createElement("div");
  el.className = "animal popping";
  el.style.width = size + "px";
  el.style.height = size + "px";
  el.style.fontSize = (size * 0.55) + "px";
  el.textContent = getEmoji(name);

  const hue = Math.floor(Math.random() * 360);
  el.style.background = `hsl(${hue}, 75%, 82%)`;
  el.style.border = `4px solid hsl(${hue}, 65%, 50%)`;

  // Position centered on the hole
  el.style.left = (hole.x - size / 2) + "px";
  el.style.top = (hole.y - size / 2) + "px";

  playArea.appendChild(el);

  // How long the animal stays visible (gets shorter as level rises)
  const stayTime = Math.max(700, 1600 - level * 90) + Math.random() * 300;

  const animal = {
    name,
    el,
    hole,
    size,
    caught: false,
    hideTimer: null
  };

  // After the pop-up animation, schedule the dive-back
  setTimeout(() => {
    if (!animal.caught) {
      el.classList.remove("popping");
      el.classList.add("visible");
    }
  }, 180);

  animal.hideTimer = setTimeout(() => {
    if (!animal.caught) {
      hideAnimal(animal);
    }
  }, stayTime);

  activeAnimals.push(animal);

  // Direct tap also works
  el.addEventListener("pointerdown", (e) => {
    e.stopPropagation();
    if (!animal.caught) catchAnimal(animal);
  });
}

function hideAnimal(animal) {
  if (animal.caught) return;
  animal.el.classList.remove("visible", "popping");
  animal.el.classList.add("hiding");

  setTimeout(() => {
    if (animal.el.parentNode) animal.el.remove();
    animal.hole.occupied = false;
    activeAnimals = activeAnimals.filter(a => a !== animal);
  }, 280);
}

// ========== CATCH ==========
function tryCatch() {
  const netRadius = isNetActive ? 68 : 58;

  for (let i = activeAnimals.length - 1; i >= 0; i--) {
    const a = activeAnimals[i];
    if (a.caught) continue;

    const ax = a.hole.x;
    const ay = a.hole.y;
    const dist = Math.hypot(ax - netX, ay - netY);

    if (dist < netRadius + a.size * 0.35) {
      catchAnimal(a);
    }
  }
}

function catchAnimal(animal) {
  if (animal.caught) return;
  animal.caught = true;

  if (animal.hideTimer) clearTimeout(animal.hideTimer);

  // Big visual celebration on the animal
  animal.el.classList.remove("popping", "visible", "hiding");
  animal.el.classList.add("caught");

  // Massive confetti
  createBigConfetti(animal.hole.x, animal.hole.y);

  // Score
  const points = 15 + level * 3;
  score += points;
  caughtCount++;
  uniqueCaught.add(animal.name);

  if (caughtCount % 10 === 0) level++;

  updateHUD();
  showBigCelebration(animal.name);
  speakCatch(animal.name);
  playFanfare();

  // Clean up
  setTimeout(() => {
    if (animal.el.parentNode) animal.el.remove();
    animal.hole.occupied = false;
    activeAnimals = activeAnimals.filter(a => a !== animal);
  }, 600);
}

// ========== CELEBRATION ==========
function showBigCelebration(name) {
  catchMessage.innerHTML = `
    <div class="celebrate-title">🎉 You caught a ${name}! 🎉</div>
    <div class="celebrate-sub">Great job!</div>
  `;
  catchMessage.classList.remove("hidden");
  catchMessage.classList.add("big-celebrate");

  // Force reflow to restart animation
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
  utter.rate = 0.92 + Math.random() * 0.15;
  utter.pitch = 1.05 + Math.random() * 0.3;
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

// Simple triumphant fanfare using Web Audio API
function playFanfare() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5 E5 G5 C6
    const now = ctx.currentTime;

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.25, now + 0.02 + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35 + i * 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + i * 0.09);
      osc.stop(now + 0.4 + i * 0.09);
    });

    // Little sparkle at the end
    setTimeout(() => {
      const osc2 = ctx.createOscillator();
      const g2 = ctx.createGain();
      osc2.type = "sine";
      osc2.frequency.value = 1318.5;
      g2.gain.setValueAtTime(0.15, ctx.currentTime);
      g2.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.3);
      osc2.connect(g2);
      g2.connect(ctx.destination);
      osc2.start();
      osc2.stop(ctx.currentTime + 0.3);
    }, 380);
  } catch (e) {
    // Audio not available – silent fail
  }
}

function createBigConfetti(x, y) {
  const colors = ["#ffeb3b", "#ff9800", "#e91e63", "#2196f3", "#4caf50", "#9c27b0", "#00bcd4", "#ff5722", "#ffc107"];
  const shapes = ["circle", "rect", "triangle"];

  for (let i = 0; i < 28; i++) {
    const p = document.createElement("div");
    p.className = "confetti";
    const size = 8 + Math.random() * 10;
    p.style.width = size + "px";
    p.style.height = size + "px";
    p.style.left = x + "px";
    p.style.top = y + "px";
    p.style.background = colors[Math.floor(Math.random() * colors.length)];

    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    if (shape === "circle") p.style.borderRadius = "50%";
    else if (shape === "triangle") {
      p.style.width = "0";
      p.style.height = "0";
      p.style.background = "transparent";
      p.style.borderLeft = size/2 + "px solid transparent";
      p.style.borderRight = size/2 + "px solid transparent";
      p.style.borderBottom = size + "px solid " + colors[Math.floor(Math.random() * colors.length)];
    }

    const angle = (Math.PI * 2 * i) / 28 + (Math.random() - 0.5) * 0.5;
    const dist = 60 + Math.random() * 120;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist - 40; // bias upward a bit

    p.style.setProperty("--tx", tx + "px");
    p.style.setProperty("--ty", ty + "px");
    p.style.setProperty("--rot", (Math.random() * 720 - 360) + "deg");

    playArea.appendChild(p);
    setTimeout(() => p.remove(), 1100);
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
