# Neon Highway Survival

This folder contains a rebuilt HTML5 canvas survival game inspired by top-down action shooters.

## Files
- `index.html` – HTML shell hosting the canvas and HUD overlays.
- `style.css` – Atmosphere-heavy styling for the game backdrop and UI panels.
- `game.js` – Complete gameplay logic (input, camera, physics, player, vehicles, enemies, bullets, HUD).

## How to run
1. Open `index.html` in any modern desktop browser (Chrome, Edge, Firefox, Safari).
2. Click anywhere on the canvas so keyboard and mouse input is captured.
3. Survive as long as possible!

## Controls
- **Move**: WASD or Arrow Keys
- **Aim**: Mouse cursor
- **Shoot**: Hold Left Mouse Button
- **Enter / Exit Vehicle**: `E`
- **Restart Run**: `R`

## Gameplay overview
- You are represented by a two-circle avatar with a floating HP bar. Approach vehicles and press `E` to hop in/out.
- Driving provides extra speed, protection, and a rapid-fire turret. Vehicles take damage and can be destroyed.
- Eliminating enemies awards XP. Level-ups pause the action and let you choose from three permanent “major” upgrades.
- Every 30 seconds a timed “flash card” boost appears—pick one of two temporary buffs with spicy trade-offs.
- Major unlocks now include options like the Arc Spitter Array (multishot fanfire) and the Sentinel Drone (auto-lock firing partner).
- Bullets collide with enemies, vehicles, and map obstacles (which block both players and cars). Some upgrades grant piercing shots.
- When player health reaches zero the run ends. Press `R` to reset instantly.

## Extending the game
- Add audio cues, particle effects, or screen shake for extra feedback.
- Expand the upgrade pools with new synergies, enemy types, or boss events.
- Replace placeholder shapes with sprite art and add meta-progression, map variety, or missions.

Have fun surviving the neon highway!
