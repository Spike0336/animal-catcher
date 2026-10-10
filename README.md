# 🦋 Animal Catcher

**A fun, colorful children's game where kids catch animals in a net and learn their names!**

Each animal announces itself with a friendly voice:  
*"Hi! I'm a pig!"* • *"You caught me! I'm a wolf!"* • and more.

---

## ✨ Features

- **220+ different animals** – farm animals, wild animals, birds, sea creatures, insects and more
- **Voice announcements** – animals tell you their names using the browser’s built-in speech
- **Big friendly net** – move it with mouse or finger, click/tap to catch
- **Touch-friendly** – works great on tablets and phones
- **Score, unique animals, levels** – difficulty gently increases
- **Bright, playful design** with bouncing animals, particles and animations
- **No installs, no accounts** – just open and play
- **100% offline** after first load (pure HTML/CSS/JS)

---

## 🎮 How to Play

1. Click **Start Catching!**
2. Move the green net with your mouse or finger
3. Click or tap when an animal is inside the net (or just tap the animal)
4. Listen to the animal tell you its name!
5. Catch as many as you can and try to discover lots of different animals

---

## 🚀 Running the Game

### Option 1 – Just open it
Double-click `index.html` or open it in any modern browser (Chrome, Firefox, Edge, Safari).

### Option 2 – Local server (recommended for best speech support)
```bash
# If you have Python
python -m http.server 8000

# Or with Node
npx serve .
```
Then open http://localhost:8000

---

## 📤 Putting it on GitHub

1. Create a new repository on GitHub (for example `animal-catcher`)
2. Upload all the files in this folder:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. (Optional) Enable **GitHub Pages**:
   - Go to the repo → Settings → Pages
   - Source: Deploy from a branch → `main` / root
   - Your game will be live at `https://yourusername.github.io/animal-catcher/`

That’s it! Kids can play it anywhere.

---

## 🛠️ Project Structure

```
animal-catcher/
├── index.html      # Main page
├── style.css       # All the colorful styling & animations
├── script.js       # Game logic + 220+ animals + voice
└── README.md       # This file
```

---

## 🎤 Voice Notes

- Works in Chrome, Edge, Safari and most modern browsers
- Uses the Web Speech API (no internet needed after page load)
- You can turn the voice on/off with the button at the bottom
- Some browsers need a user click before they allow speech

---

## 🎨 Customization Ideas

Want to make it your own?
- Add more animals in the `ANIMALS` array in `script.js`
- Change colors in `style.css`
- Add animal facts or sounds
- Add a “collection book” of all animals you’ve caught

---

## 📄 License

MIT License – feel free to use, share, modify and put it in your own projects or classrooms.

Made with ❤️ for curious kids who love animals.
