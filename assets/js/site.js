// ============================================================================
// DATA
// ============================================================================

const completedGames = [
  {
    id: 8,
    src: 'assets/videos/games/008%20Godot%20-%202D%20Top%20Down%20-%20The%20only%20game%20I%20finished%20(returning%20to%20Game%20Dev%20after%20six%20months%20of%20quitting%20from%20Unity)%20-%20Trapped%20in%20a%20Nightmare.mp4',
    tool: 'Godot',
    title: 'Trapped in a Nightmare',
    description: 'A top-down adventure/puzzle game similar to Zelda or Hyper Light Drifter',
    story: "My first complete game after returning to game dev in Godot. An adventure/puzzle/hack-and-slash top-down game where you explore an abandoned facility filled with slimes. Worked non-stop for 2 months: spent 1 month on the original True Top Down version with SVG animations (too tedious, quit), then restarted with 1 month left. Learned pixel art and animation from scratch to create a complete 6-hour game.",
  },
  {
    id: 4,
    src: 'assets/videos/games/004%20Unity%20-%202D%20Platformer%20(Obstacle%20Course)%20-%20A%20Graphic%20Overhaul%20of%20Chrono%20Plasmorph%20Beta.mp4',
    tool: 'Unity',
    title: 'Chrono Plasmorph',
    description: 'My first serious attempt at game dev - a platformer obstacle course',
    story: "This is Chrono Plasmorph, my first official attempt at serious game development. It's a platformer obstacle course game. This version has a graphic overhaul from the Beta version - using better assets and a dark theme instead of the pink theme from Beta.",
  },
];

const currentProjects = [
  {
    id: 10,
    src: 'assets/videos/games/010%20Godot%20-%20Current%20Metroidvania%20Project.mp4',
    tool: 'Godot',
    title: 'Metroidvania Project',
    description: 'An attempt to create a metroidvania inspired by Adventure Island',
    story: "A metroidvania that grew out of the Chrono Plasmorph remake. It borrows a few visual cues from Adventure Island, then adds lightning powers, portals, fireballs, and a larger connected world.",
  },
  {
    id: 9,
    src: 'assets/videos/games/009%20Python%20-%20An%20attempt%20to%20recreate%20Aseprite%20in%20PyQT6%20-%20Kokesprite.mp4',
    tool: 'Python',
    title: 'Kokesprite',
    description: 'An attempt to recreate Aseprite tailored to my preferences, built with PyQt6',
    story: "A pixel art editor built from scratch using PyQt6. This is my attempt to recreate Aseprite but tailored specifically to my desires and workflow preferences. It's a non-game project that explores GUI development and tool creation.",
  },
];

const otherProjects = [
  {
    id: 11,
    src: 'assets/videos/games/Godot%20-%20Chrono%20Plasmorph%20Remake.mp4',
    tool: 'Godot',
    title: 'Chrono Plasmorph Remake',
    description: 'A remake with full-body sprites and smoother movements',
    story: "Unlike the original which used premade chibi assets, this remake features full-body sprites with smoother movements. Development only reached the platformer movement stage before evolving into the current Metroidvania project. This was the bridge between my Unity past and my Godot future.",
  },
  {
    id: 12,
    src: 'assets/videos/games/Godot%20-%20Heavy%20Knight.mp4',
    tool: 'Godot',
    title: 'Heavy Knight',
    description: "A quick game where your heavy knight can't jump and destroys floors when falling",
    story: "An attempt at making a quick game with a unique twist: your knight is so heavy that it can't jump, and when it falls, it destroys the floor beneath it. A simple concept exploring physics-based platforming challenges.",
  },
  {
    id: 13,
    src: 'assets/videos/games/Godot%20-%20True%20Top%20Down%20Demo.mp4',
    tool: 'Godot',
    title: 'True Top Down Demo',
    description: 'A true top-down shooter similar to Intravenous with shoot, roll, knife, and hide mechanics',
    story: "The original version of Trapped in a Nightmare, but instead of pixel art, this one used original hand-drawn animation retraced in SVG for high-quality sprites. A true top-down game similar to Intravenous. So far it has shoot, roll, knife attack, and hide mechanics. I abandoned this version because SVG animations were too tedious, and restarted the project as pixel art.",
  },
  {
    id: 14,
    src: 'assets/videos/games/Godot%20-%20Yet%20Another%20Platformer.mp4',
    tool: 'Godot',
    title: 'Yet Another Platformer',
    description: 'An attempt to recreate Chrono Plasmorph in Godot',
    story: "This was my attempt to recreate (not remake) Chrono Plasmorph from Unity to Godot when I first started learning the engine. Eventually abandoned it in favor of other projects.",
  },
  {
    id: 7,
    src: 'assets/videos/games/007%20Unity%20-%20The%20last%20straw%20for%20Unity%20(I%20quit%20Game%20Dev)%20-%20Flappy%20Bird%20Compilation.mp4',
    tool: 'Unity',
    title: 'Flappy Bird Compilation',
    description: 'My Unity game dev journey demonstrated in Flappy Bird',
    story: "This compilation contains 3 Flappy Bird games showing my Unity learning progression. First: a tutorial-based version where I learned the basics. Second: a personal attempt without tutorials, featuring my first try at animation. Third: the final attempt using a pixel art tool for the first time, with real personal assets and proper animations. This was the start of my game dev journey.",
  },
  {
    id: 2,
    src: 'assets/videos/games/002%20Unity%20-%202D%20Platformer%20(Obstacle%20Course)%20-%20My%20first%20ever%202D%20Game%20-%20Chrono%20Plasmorph%20Beta.mp4',
    tool: 'Unity',
    title: 'Chrono Plasmorph Beta',
    description: 'A pink-themed platformer using downloaded assets',
    story: "This is the original Chrono Plasmorph Beta - essentially the same game as the remastered version, but using downloaded assets instead of custom ones. Features a pink theme instead of the dark theme you see in the remake.",
  },
  {
    id: 3,
    src: 'assets/videos/games/003%20Unity%20-%203D%20-%20My%20first%20and%20last%203D%20Game%20(an%20attempt%20that%20resulted%20to%20reality%20check).mp4',
    tool: 'Unity',
    title: '3D Reality Check',
    description: 'My first and last 3D game - a massive mistake after learning Flappy Bird',
    story: "Right after learning how to make Flappy Bird, I jumped straight into 3D game development. This was a massive mistake and a harsh reality check. It was my first and last 3D game - I quickly realized I needed to master 2D first.",
  },
  {
    id: 5,
    src: 'assets/videos/games/005%20-%20RPG%20Maker%20-%20An%20attempt%20to%20reenter%20Pokemon%20Fan%20Game%20scene%20but%20this%20time%20through%20RMMXP%20and%20not%20Rom%20Hacking.mp4',
    tool: 'RPG Maker',
    title: 'Pokemon Fan Game',
    description: 'A Pokemon Essentials game featuring 6 choosable characters from BW, BW2, and HeartGold',
    story: "An attempt to reenter the Pokemon fan game scene, but this time through RPG Maker and Pokemon Essentials instead of ROM hacking. The main feature I'm proud of: 6 choosable characters all together in one game, pulled from Pokemon Black/White, Black/White 2, and HeartGold/SoulSilver.",
  },
  {
    id: 1,
    src: 'assets/videos/games/001%20RPG%20Maker%20-%20Trying%20Game%20Development%20for%20the%20First%20Time%20using%20RPG%20Maker.mp4',
    tool: 'RPG Maker',
    title: 'First Steps in Game Dev',
    description: 'My first game dev attempt with intro, cutscenes, and quest lists (2022)',
    story: "Actually my very first attempt at game development, though I don't consider it official. Made in 2022, I created the intro, cutscenes, and quest lists for this mystery RPG Maker game. But it sucked and didn't progress beyond that. I resumed serious game dev in 2024 to learn Unity.",
  },
  {
    id: 6,
    src: 'assets/videos/games/006%20Unity%20-%20A%20quick%20project%20for%20a%20refresher%20-%20A%20simple%20platformer.mp4',
    tool: 'Unity',
    title: 'Platformer Refresher',
    description: 'A basic platformer with box sprites - my last Unity project before quitting for 6 months',
    story: "A basic platformer where the sprites are just boxes with faces. This was my last Unity project before I quit game dev for 6 months. After this, I had a game dev program/course in college (second semester, 3rd year as a Computer Science student), which reignited my passion and led me to switch to Godot.",
  },
];

const allVideos = [...completedGames, ...currentProjects, ...otherProjects];

const artworks = [
  { id: 1, src: 'assets/images/artworks/104943736_f3e130fa02dc6590a5fb05513e0ce962_p1_master1200.jpg-375w-2x.jpg', isGif: false },
  { id: 2, src: 'assets/images/artworks/angela_from_mobile_legends_by_codekokeshi_dk10mpu-414w-2x.jpg', isGif: false },
  { id: 3, src: 'assets/images/artworks/dk10p2j-fb4f8030-7fa9-49c2-ae12-dc6b6a7ac79d.gif', isGif: true },
  { id: 4, src: 'assets/images/artworks/dlany1o-d686d2b3-3b63-4ddf-abba-8f507f144845.gif', isGif: true },
  { id: 5, src: 'assets/images/artworks/gaomon_contest_submission_by_codekokeshi_dk10mw3-375w-2x.jpg', isGif: false },
  { id: 6, src: 'assets/images/artworks/Mahiro2.jpg-375w-2x.jpg', isGif: false },
  { id: 7, src: 'assets/images/artworks/marnie_by_codekokeshi_dk10n2n-fullview.jpg', isGif: false },
  { id: 8, src: 'assets/images/artworks/oyama_mahiro_recolored_by_codekokeshi_dk10mfz-375w-2x.jpg', isGif: false },
  { id: 9, src: 'assets/images/artworks/suyarisu_kaymin_by_codekokeshi_dk10n9d-375w-2x.jpg', isGif: false },
  { id: 10, src: 'assets/images/artworks/takahama_reiko_fully_colorized_by_codekokeshi_dk10lby-pre.jpg', isGif: false },
];

const mods = [
  {
    id: 1,
    image: 'assets/images/mods/stardew/Helpful Pets.webp',
    title: 'Helpful Pets',
    overview: "Useful pets. Helpful pets. Worker pets. Working pets\u2014call them whatever you want. Your pets can clear debris, chop trees, break boulders, forage, or follow you around. Open Pet Manager with V (configurable in GMCM), or use pet interaction directly on mobile. You can even rename your pets. Available in English and Japanese.",
    link: 'https://www.nexusmods.com/stardewvalley/mods/41161'
  },
  {
    id: 2,
    image: 'assets/images/mods/stardew/CK Better Cheats Menu.webp',
    title: 'CK Better Cheats Menu',
    overview: "An Ultimate Trainer with 91+ Cheats. Teleport everywhere. Till or water 11x11 soil. One hit trees with axe or boulders with pickaxe. Instantly grow crops and trees. Unlock all recipes for crafting and cooking. Craft without materials. Add gold without causing discrepancies. Instant Fish Bite? Skip Fishing Minigame? Health Regen? One Hit Kill? every cheat is here.",
    link: 'https://www.nexusmods.com/stardewvalley/mods/42088'
  },
  {
    id: 3,
    image: 'assets/images/mods/stardew/Pet Adopter.webp',
    title: 'Pet Adopter',
    overview: "Instantly adopt any pet breed for free! Browse cats and dogs with a sleek UI, name them, and add them to your farm. Press LShift + V to open.",
    link: 'https://www.nexusmods.com/stardewvalley/mods/42945'
  },
  {
    id: 4,
    image: 'assets/images/mods/stardew/Fix Museum Inventory.webp',
    title: 'Fix Museum Inventory',
    overview: "Rewrote the vanilla museum inventory code to fix various issues like inventory UI covering the museum slots. Added a move button to move the inventory UI around and removed the inventory on the arrangement mode.",
    link: 'https://www.nexusmods.com/stardewvalley/mods/41132'
  },
  {
    id: 5,
    image: 'assets/images/mods/stardew/Max Quality Items.webp',
    title: 'Max Quality Items',
    overview: "Turn all your items to iridium quality by pressing the hotkey (F9) or use the auto version to automatically turn your items to iridium.",
    link: 'https://www.nexusmods.com/stardewvalley/mods/41507'
  },
  {
    id: 6,
    image: 'assets/images/mods/stardew/Bountiful Foraging.webp',
    title: 'Bountiful Foraging',
    overview: "Make forageables bountiful literally, like in the Beach alone you'll get 50 shells or something. Or on the way to the mountains you'll get 100 grapes on the way. But that depends on your multiplier. Let's say that this is a forage items amount multiplier.",
    link: 'https://www.nexusmods.com/stardewvalley/mods/41289'
  },
  {
    id: 7,
    image: 'assets/images/mods/stardew/Instant Fish Bite.webp',
    title: 'Instant Fish Bite',
    overview: "Fish instantly bites eliminating the waiting game.",
    link: 'https://www.nexusmods.com/stardewvalley/mods/41102'
  },
  {
    id: 8,
    image: 'assets/images/mods/stardew/Bypass All Doors.webp',
    title: 'Bypass All Doors',
    overview: "Access every doors! Friendship locked? Schedule? Ignore all that!",
    link: 'https://www.nexusmods.com/stardewvalley/mods/41105'
  },
  {
    id: 9,
    image: 'assets/images/mods/stardew/Infinite Stamina.webp',
    title: 'Infinite Stamina',
    overview: "Keeps the stamina at max value basically making it infinite.",
    link: 'https://www.nexusmods.com/stardewvalley/mods/41065'
  },
  {
    id: 10,
    image: 'assets/images/mods/stardew/Buy Animals Fully Mature.webp',
    title: 'Buy Animals Fully Mature',
    overview: "Purchased barn/coop animals are instantly fully matured and ready to produce products.",
    link: 'https://www.nexusmods.com/stardewvalley/mods/41509'
  },
];

const rpgMakerPlugins = [
  {
    id: 1,
    image: 'assets/images/mods/rmmz_plugins/QuestSystem.png',
    title: 'Quest System',
    overview: 'Create a complete quest log for your game with built-in quest UI. Add, update, and remove quests during gameplay, organize them by category, and track progress statuses (like Not Started, In Progress, Completed, Failed).',
    link: 'https://codekokeshi.itch.io/codekokeshis-rpg-maker-mz-plugins'
  },
  {
    id: 2,
    image: 'assets/images/mods/rmmz_plugins/JournalLogSystem.png',
    title: 'Journal System',
    overview: 'A flexible entry log system for lore, clues, archives, notes, and story records. Similar to Quest System, but focused on informational entries without progress status tracking.',
    link: 'https://codekokeshi.itch.io/codekokeshis-rpg-maker-mz-plugins'
  },
  {
    id: 3,
    image: 'assets/images/mods/rmmz_plugins/MenuCustomizationSystem.png',
    title: 'Menu Customization System',
    overview: 'Full control over your in-game menu layout and behavior. Show/hide options, rename commands, reorder menu entries, inject Continue/Load, patch Game End to To Title, and auto-place custom plugin commands (like Quest/Journal) into your preferred order range.',
    link: 'https://codekokeshi.itch.io/codekokeshis-rpg-maker-mz-plugins'
  },
];

var activeModsCat = 'stardew';

const softwareProjects = [
  {
    id: 1,
    image: 'assets/images/software_web/Kokesprite Editor.png',
    title: 'Kokesprite Editor',
    tags: ['Python', 'PyQt6'],
    overview: 'An attempt to fully recreate Aseprite on Python using PyQT6.',
  },
  {
    id: 2,
    image: 'assets/images/software_web/Water Meter Digit Extractor.jpg',
    title: 'Water Meter Digit Extractor',
    tags: ['Python', 'PyQt6'],
    overview: 'Extract 5-digit water meter readings into MNIST-style 28\u00d728 digit images with a fast desktop tool. Load meter photos, mark 4 points, auto-warp and segment into 5 digits, then save labeled datasets ready for ML training.',
  },
  {
    id: 3,
    image: 'assets/images/software_web/Koke16-bit Studio.png',
    title: 'Koke16-Bit Studio',
    tags: ['Python', 'PyQt6', 'Pygame'],
    overview: 'A lightweight DAW designed for composing 8-bit and 16-bit retro game music. Instead of using generative AI, it utilizes algorithmic, rule-based music theory to procedurally generate themes (towns, caves, dungeons) and automatically correct user compositions.',
  },
  {
    id: 4,
    image: 'assets/images/software_web/Water Meter Digit Extractor.jpg',
    title: 'METEREAD',
    tags: ['Android', 'LeNet-5 CNN'],
    overview: 'An Android-Based Analog Water Meter Reading Application Using LeNet-5 CNN for Carmona Water District Customers',
    link: 'software/meteread.html',
  },
];

const toolColors = {
  'RPG Maker': '#4ade80',
  'Unity': '#ffffff',
  'Godot': '#478cbf',
  'Python': '#fbbf24',
  'PyQt6': '#38bdf8',
  'Pygame': '#86efac',
  'Android': '#3ddc84',
  'LeNet-5 CNN': '#22d3ee',
};

// ============================================================================
// PORTFOLIO INTERACTIONS
// ============================================================================

function escapeHtml(value) {
  var div = document.createElement('div');
  div.textContent = String(value);
  return div.innerHTML;
}

var activeVideoIndex = 0;
var previewPaused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var activeModsCat = 'stardew';
var knownSections = ['games', 'arts', 'software', 'mods', 'about'];

function gameStatus(video) {
  if (completedGames.indexOf(video) !== -1) return 'Completed game';
  if (currentProjects.indexOf(video) !== -1) return 'Current build';
  return 'Experiment';
}

function padNumber(number) {
  return String(number).padStart(2, '0');
}

function updatePreviewControl() {
  var button = document.getElementById('togglePreview');
  button.textContent = previewPaused ? 'Play' : 'Pause';
  button.setAttribute('aria-label', previewPaused ? 'Play preview' : 'Pause preview');
}

function selectGame(index, focusChoice, revealPreview) {
  activeVideoIndex = (index + allVideos.length) % allVideos.length;
  var video = allVideos[activeVideoIndex];
  var preview = document.getElementById('featuredVideo');
  var choices = document.querySelectorAll('.game-choice');

  choices.forEach(function(choice, choiceIndex) {
    var selected = choiceIndex === activeVideoIndex;
    choice.setAttribute('aria-pressed', selected ? 'true' : 'false');
    if (selected) {
      choice.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      if (focusChoice) choice.focus();
    }
  });

  preview.pause();
  preview.poster = 'assets/images/game-posters/' + video.id + '.webp';
  preview.src = video.src;
  preview.setAttribute('aria-label', video.title + ' preview');
  preview.onloadedmetadata = function() {
    if (video.id === 8 && preview.duration > 21) preview.currentTime = 20;
    if (!previewPaused) {
      preview.play().catch(function() {
        previewPaused = true;
        updatePreviewControl();
      });
    }
  };
  preview.load();

  document.getElementById('featuredMeta').textContent = gameStatus(video) + '  /  ' + video.tool;
  document.getElementById('featuredTitle').textContent = video.title;
  document.getElementById('featuredDescription').textContent = video.description;
  document.getElementById('featuredIndex').textContent = padNumber(activeVideoIndex + 1);
  document.getElementById('stepperCount').textContent = padNumber(activeVideoIndex + 1) + ' / ' + padNumber(allVideos.length);

  var playLink = document.getElementById('featuredPlay');
  playLink.hidden = video.id !== 8;

  var moreButton = document.getElementById('featuredMore');
  var story = document.getElementById('featuredStory');
  story.textContent = video.story || '';
  story.hidden = true;
  moreButton.setAttribute('aria-expanded', 'false');
  moreButton.hidden = !video.story;
  updatePreviewControl();
  if (revealPreview && window.matchMedia('(max-width: 760px)').matches) {
    document.querySelector('.stage-screen').scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start'
    });
  }
}

function setupGames() {
  var selector = document.getElementById('gameSelector');
  document.getElementById('gameCount').textContent = allVideos.length + ' builds';
  selector.innerHTML = allVideos.map(function(video, index) {
    return '<button type="button" class="game-choice" data-game-index="' + index + '" aria-pressed="false">' +
      '<span class="game-choice__number">' + padNumber(index + 1) + '</span>' +
      '<span><span class="game-choice__name">' + escapeHtml(video.title) + '</span>' +
      '<span class="game-choice__tool">' + escapeHtml(video.tool) + '</span></span></button>';
  }).join('');

  selector.addEventListener('click', function(event) {
    var choice = event.target.closest('.game-choice');
    if (choice) selectGame(Number(choice.dataset.gameIndex), false, true);
  });
  selector.addEventListener('keydown', function(event) {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp' && event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    var choice = event.target.closest('.game-choice');
    if (!choice) return;
    event.preventDefault();
    var step = (event.key === 'ArrowDown' || event.key === 'ArrowRight') ? 1 : -1;
    selectGame(Number(choice.dataset.gameIndex) + step, true, false);
  });

  document.getElementById('prevProject').addEventListener('click', function() { selectGame(activeVideoIndex - 1, false, true); });
  document.getElementById('nextProject').addEventListener('click', function() { selectGame(activeVideoIndex + 1, false, true); });
  document.getElementById('togglePreview').addEventListener('click', function() {
    var preview = document.getElementById('featuredVideo');
    previewPaused = !previewPaused;
    if (previewPaused) preview.pause();
    else preview.play().catch(function() { previewPaused = true; updatePreviewControl(); });
    updatePreviewControl();
  });
  document.getElementById('featuredMore').addEventListener('click', function() {
    var story = document.getElementById('featuredStory');
    story.hidden = !story.hidden;
    this.setAttribute('aria-expanded', story.hidden ? 'false' : 'true');
  });

  selectGame(0, false);
}

var artworkLabels = [
  'Digital character illustration', 'Angela character illustration', 'Animated character study',
  'Animated artwork', 'Gaomon contest illustration', 'Mahiro character illustration',
  'Marnie character illustration', 'Mahiro recolor', 'Suyarisu and Kaymin illustration',
  'Reiko color study'
];

function renderArtworks() {
  document.getElementById('artworkGrid').innerHTML = artworks.map(function(art, index) {
    var label = artworkLabels[index] || 'Artwork';
    return '<figure class="art-piece"><a href="' + encodeURI(art.src) + '" target="_blank" rel="noopener noreferrer" aria-label="Open ' + escapeHtml(label) + '">' +
      '<img src="' + encodeURI(art.src) + '" alt="' + escapeHtml(label) + '" loading="eager"></a>' +
      (art.isGif ? '<span class="art-piece__motion">Animation</span>' : '') +
      '<figcaption>' + escapeHtml(label) + '</figcaption></figure>';
  }).join('');
}

function renderSoftware() {
  document.getElementById('softwareGrid').innerHTML = softwareProjects.map(function(project, index) {
    var textOnly = project.title === 'METEREAD';
    var tags = (project.tags || []).map(function(tag) { return '<span>' + escapeHtml(tag) + '</span>'; }).join('');
    return '<article class="software-item' + (textOnly ? ' software-item--text' : '') + '">' +
      (textOnly ? '' : '<div class="software-item__image"><img src="' + encodeURI(project.image) + '" alt="' + escapeHtml(project.title) + ' screenshot" loading="lazy"></div>') +
      '<div class="software-item__copy"><h2>' + escapeHtml(project.title) + '</h2><p>' + escapeHtml(project.overview) + '</p>' +
      '<div class="software-item__tags">' + tags + '</div>' +
      (project.link ? '<a class="software-item__link" href="' + escapeHtml(project.link) + '">Open project <span class="icon" aria-hidden="true"></span></a>' : '') +
      '</div></article>';
  }).join('');
}

function renderMods() {
  var items = activeModsCat === 'rpgmaker' ? rpgMakerPlugins : mods;
  document.getElementById('modsGrid').innerHTML = items.map(function(mod) {
    return '<article class="mod-item">' +
      '<a class="mod-item__image" href="' + escapeHtml(mod.link) + '" target="_blank" rel="noopener noreferrer" aria-label="Open ' + escapeHtml(mod.title) + '">' +
      '<img src="' + encodeURI(mod.image) + '" alt="' + escapeHtml(mod.title) + ' preview" loading="lazy"></a>' +
      '<div class="mod-item__copy"><h2><a href="' + escapeHtml(mod.link) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(mod.title) + '</a></h2>' +
      '<p>' + escapeHtml(mod.overview) + '</p></div></article>';
  }).join('');
}

function setupMods() {
  document.querySelectorAll('.mods-cat-btn').forEach(function(button) {
    button.addEventListener('click', function() {
      activeModsCat = button.dataset.cat;
      document.querySelectorAll('.mods-cat-btn').forEach(function(item) {
        var selected = item === button;
        item.classList.toggle('mods-cat-btn--active', selected);
        item.setAttribute('aria-pressed', selected ? 'true' : 'false');
      });
      renderMods();
    });
  });
}

function sectionFromPath() {
  var path = window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
  if ((path === 'index.html' || path === '') && knownSections.indexOf(window.location.hash.slice(1)) !== -1) return window.location.hash.slice(1);
  return knownSections.indexOf(path) !== -1 ? path : 'games';
}

function showSection(section, pushHistory) {
  if (knownSections.indexOf(section) === -1) section = 'games';
  document.querySelectorAll('.panel').forEach(function(panel) { panel.hidden = panel.id !== 'section-' + section; });
  document.querySelectorAll('.site-nav a').forEach(function(link) {
    if (link.dataset.section === section) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  if (pushHistory) history.pushState({ section: section }, '', section === 'games' ? '/' : '/' + section);
  var preview = document.getElementById('featuredVideo');
  if (section !== 'games') preview.pause();
  else if (!previewPaused) preview.play().catch(function() {});
  window.scrollTo(0, 0);
}

function setupNavigation() {
  document.querySelectorAll('.site-nav a').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      showSection(link.dataset.section, true);
    });
  });
  window.addEventListener('popstate', function() { showSection(sectionFromPath(), false); });
  var initialSection = sectionFromPath();
  history.replaceState({ section: initialSection }, '', window.location.pathname);
  showSection(initialSection, false);
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('year').textContent = new Date().getFullYear();
  setupGames();
  renderArtworks();
  renderSoftware();
  renderMods();
  setupMods();
  setupNavigation();
});
