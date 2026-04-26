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
    story: "This isn't the classic Adventure Island - it's a full metroidvania. The only Adventure Island elements are the MC having a cap, being naked with green shorts, and fighting a giant snail. But our metroidvania has lightning powers, portals, fireballs, and so much more. This project evolved from the Chrono Plasmorph Remake.",
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

const quizzes = [
  {
    id: 1,
    image: 'assets/images/quizzes/lesson_3-market-integration.webp',
    title: 'Market Integration Quiz',
    description: 'Lesson 3 of GNED07 discussing about Market Integration.',
    lessonUrl: 'quizzes/gned07/market-integration/lesson.html',
    quizUrl: 'quizzes/gned07/market-integration/quiz.html',
  },
  {
    id: 2,
    image: 'assets/images/quizzes/lesson_1-globalization.png',
    title: 'Globalization Quiz',
    description: 'Lesson 1 of GNED07 introducing the study of Globalization.',
    lessonUrl: 'quizzes/gned07/globalization/lesson.html',
    quizUrl: 'quizzes/gned07/globalization/quiz.html',
  },
  {
    id: 3,
    image: 'assets/images/quizzes/lesson_4-global-governance.png',
    title: 'Global Governance Quiz',
    description: 'Lesson 4 of GNED07 about the contemporary global governance.',
    lessonUrl: 'quizzes/gned07/global-governance/lesson.html',
    quizUrl: 'quizzes/gned07/global-governance/quiz.html',
  },
  {
    id: 4,
    image: 'assets/images/quizzes/lesson_5-global-divde.webp',
    title: 'Global Divide Quiz',
    description: 'Lesson 5 of GNED07 about the Global North and Global South divide.',
    lessonUrl: 'quizzes/gned07/global-divide/lesson.html',
    quizUrl: 'quizzes/gned07/global-divide/quiz.html',
  },
  {
    id: 5,
    image: 'assets/images/quizzes/lesson_6-asian-regionalism.webp',
    title: 'Asian Regionalism Quiz',
    description: 'Lesson 6 of GNED07 discussing Asian regionalism and ASEAN integration.',
    lessonUrl: 'quizzes/gned07/asian-regionalism/lesson.html',
    quizUrl: 'quizzes/gned07/asian-regionalism/quiz.html',
  },
  {
    id: 6,
    image: 'assets/images/quizzes/lesson_7-global-media-cultures.webp',
    title: 'Global Media Cultures Quiz',
    description: 'Lesson 7 of GNED07 covering media types, media evolution, and global media culture.',
    lessonUrl: 'quizzes/gned07/global-media-cultures/lesson.html',
    quizUrl: 'quizzes/gned07/global-media-cultures/quiz.html',
  },
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
];

const toolColors = {
  'RPG Maker': '#4ade80',
  'Unity': '#ffffff',
  'Godot': '#478cbf',
  'Python': '#fbbf24',
  'PyQt6': '#38bdf8',
  'Pygame': '#86efac',
};

// ============================================================================
// HELPERS
// ============================================================================

function isMobile() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
}

function escapeHtml(str) {
  var div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ============================================================================
// VIDEO CARD BUILDER
// ============================================================================

function createCardHTML(video, isCarousel) {
  var color = toolColors[video.tool] || '#888';
  return '<div class="card" data-video-id="' + video.id + '">' +
    '<video class="card__video" src="' + video.src + '" muted loop playsinline ' +
    'preload="' + (isCarousel ? 'auto' : 'none') + '" ' +
    'disablepictureinpicture></video>' +
    '<div class="card__overlay"></div>' +
    '<div class="card__info">' +
      '<div class="card__tags">' +
        '<span class="card__tag" style="background-color:' + color + '22;color:' + color + ';border-color:' + color + '44">' +
          escapeHtml(video.tool) +
        '</span>' +
      '</div>' +
      '<p class="card__overview">' + escapeHtml(video.description) + '</p>' +
    '</div>' +
  '</div>';
}

function createStoryHTML(video) {
  return '<div class="gallery__story">' +
    '<h3>The Story Behind This Project</h3>' +
    '<p>' + escapeHtml(video.story) + '</p>' +
  '</div>';
}

// ============================================================================
// DESKTOP GALLERY
// ============================================================================

function renderDesktopGallery() {
  var grids = {
    'grid-completed': completedGames,
    'grid-current': currentProjects,
    'grid-other': otherProjects,
  };

  Object.keys(grids).forEach(function(gridId) {
    var container = document.getElementById(gridId);
    if (!container) return;
    container.innerHTML = grids[gridId].map(function(v) { return createCardHTML(v, false); }).join('');
  });
}

// ============================================================================
// DESKTOP HOVER EFFECTS
// ============================================================================

function setupDesktopHover() {
  document.addEventListener('mouseenter', function(e) {
    var card = e.target.closest('.card');
    if (!card || isMobile()) return;
    var overlay = card.querySelector('.card__overlay');
    var info = card.querySelector('.card__info');
    if (overlay) overlay.classList.add('card__overlay--visible');
    if (info) info.classList.add('card__info--visible');
  }, true);

  document.addEventListener('mouseleave', function(e) {
    var card = e.target.closest('.card');
    if (!card || isMobile()) return;
    var overlay = card.querySelector('.card__overlay');
    var info = card.querySelector('.card__info');
    if (overlay) overlay.classList.remove('card__overlay--visible');
    if (info) info.classList.remove('card__info--visible');
  }, true);
}

// ============================================================================
// DESKTOP EXPAND/STORY ON CLICK
// ============================================================================

var expandedVideoId = null;

function setupDesktopClick() {
  document.getElementById('gallery').addEventListener('click', function(e) {
    var card = e.target.closest('.card');
    if (!card || isMobile()) return;

    var videoId = parseInt(card.getAttribute('data-video-id'), 10);

    // Remove old expanded state
    var oldExpanded = document.querySelector('.card--expanded');
    if (oldExpanded) oldExpanded.classList.remove('card--expanded');
    var oldStory = document.querySelector('.gallery__story');
    if (oldStory) oldStory.remove();

    // Toggle
    if (expandedVideoId === videoId) {
      expandedVideoId = null;
      return;
    }

    expandedVideoId = videoId;
    card.classList.add('card--expanded');

    // Find video data
    var video = allVideos.find(function(v) { return v.id === videoId; });
    if (video && video.story) {
      card.insertAdjacentHTML('afterend', createStoryHTML(video));
    }

    setTimeout(function() {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  });
}

// ============================================================================
// DESKTOP VIDEO AUTOPLAY (IntersectionObserver)
// ============================================================================

function setupDesktopVideoObserver() {
  if (isMobile()) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      var vid = entry.target;
      if (entry.isIntersecting && entry.intersectionRatio > 0.9) {
        vid.play().catch(function() {});
      } else {
        vid.pause();
      }
    });
  }, { threshold: [0, 0.9] });

  function observeAll() {
    document.querySelectorAll('.gallery .card__video').forEach(function(vid) {
      observer.observe(vid);
    });
  }

  // Re-observe when section switches
  observeAll();
  window._desktopVideoObserve = observeAll;
}

// ============================================================================
// MOBILE CAROUSEL
// ============================================================================

var currentIndex = 0;
var showStory = false;

function renderCarousel() {
  var video = allVideos[currentIndex];
  var color = toolColors[video.tool] || '#888';
  var content = document.getElementById('carouselContent');
  var info = document.getElementById('carouselInfo');
  var counter = document.getElementById('carouselCounter');

  // Video card
  content.innerHTML = createCardHTML(video, true);

  // Play the video
  var vid = content.querySelector('.card__video');
  if (vid) vid.play().catch(function() {});

  // Info
  var storyHTML = '';
  if (video.story) {
    storyHTML = '<span class="carousel__read-more" id="readMoreBtn">' +
      (showStory ? 'Read less' : 'Read more...') +
    '</span>';
    if (showStory) {
      storyHTML += '<div class="carousel__story">' + escapeHtml(video.story) + '</div>';
    }
  }

  info.innerHTML =
    '<div class="carousel__tool-tag" style="background-color:' + color + '22;color:' + color + ';border-color:' + color + '44">' +
      escapeHtml(video.tool) +
    '</div>' +
    '<p class="carousel__description">' + escapeHtml(video.description) + '</p>' +
    storyHTML;

  counter.textContent = (currentIndex + 1) + ' / ' + allVideos.length;
}

function setupCarousel() {
  document.getElementById('prevBtn').addEventListener('click', function() {
    currentIndex = currentIndex === 0 ? allVideos.length - 1 : currentIndex - 1;
    showStory = false;
    renderCarousel();
  });

  document.getElementById('nextBtn').addEventListener('click', function() {
    currentIndex = currentIndex === allVideos.length - 1 ? 0 : currentIndex + 1;
    showStory = false;
    renderCarousel();
  });

  // Read more / less (delegated)
  document.getElementById('carouselInfo').addEventListener('click', function(e) {
    if (e.target.id === 'readMoreBtn') {
      showStory = !showStory;
      renderCarousel();
    }
  });

  renderCarousel();
}

// ============================================================================
// ARTWORKS GRID
// ============================================================================

// ============================================================================
// QUIZ GRID & MODAL
// ============================================================================

function renderQuizzes() {
  var grid = document.getElementById('quizGrid');
  if (!grid) return;

  grid.innerHTML = quizzes.map(function(q) {
    return '<div class="mod-card">' +
      '<div class="mod-card__image">' +
        '<img src="' + encodeURI(q.image) + '" alt="' + escapeHtml(q.title) + '" loading="lazy" />' +
      '</div>' +
      '<div class="mod-card__content">' +
        '<h3 class="quiz-card__title" data-quiz-id="' + q.id + '">' + escapeHtml(q.title) + '</h3>' +
        '<p class="mod-card__overview">' + escapeHtml(q.description) + '</p>' +
      '</div>' +
    '</div>';
  }).join('');
}

function openQuizModal(quizId) {
  var q = quizzes.find(function(x) { return x.id === quizId; });
  if (!q) return;
  document.getElementById('quizModalTitle').textContent = q.title;
  document.getElementById('quizModalSubtitle').textContent = q.description;
  document.getElementById('quizModalLesson').href = q.lessonUrl;
  document.getElementById('quizModalQuiz').href = q.quizUrl;
  var modal = document.getElementById('quizModal');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeQuizModal() {
  document.getElementById('quizModal').style.display = 'none';
  document.body.style.overflow = '';
}

function setupQuizModal() {
  // Open on title click (delegated)
  document.getElementById('quizGrid').addEventListener('click', function(e) {
    var title = e.target.closest('.quiz-card__title');
    if (!title) return;
    openQuizModal(parseInt(title.getAttribute('data-quiz-id'), 10));
  });

  // Close on X or backdrop
  document.getElementById('quizModalClose').addEventListener('click', closeQuizModal);
  document.getElementById('quizModalBackdrop').addEventListener('click', closeQuizModal);

  // Close on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeQuizModal();
  });
}

function renderArtworks() {
  var grid = document.getElementById('artworkGrid');
  if (!grid) return;

  grid.innerHTML = artworks.map(function(art) {
    return '<div class="masonry__item">' +
      '<img src="' + art.src + '" alt="" loading="lazy" />' +
      (art.isGif ? '<div class="masonry__gif-badge">GIF</div>' : '') +
    '</div>';
  }).join('');
}

// ============================================================================
// MODS GRID
// ============================================================================

function renderSoftware() {
  var grid = document.getElementById('softwareGrid');
  if (!grid) return;

  grid.innerHTML = softwareProjects.map(function(sw) {
    var tagsHTML = '';
    if (sw.tags && sw.tags.length) {
      tagsHTML = '<div class="mod-card__tags">' +
        sw.tags.map(function(tag) {
          var color = toolColors[tag] || '#888';
          return '<span class="card__tag" style="background-color:' + color + '22;color:' + color + ';border-color:' + color + '44">' +
            escapeHtml(tag) +
          '</span>';
        }).join('') +
      '</div>';
    }
    return '<div class="mod-card">' +
      '<div class="mod-card__image">' +
        '<img src="' + encodeURI(sw.image) + '" alt="' + escapeHtml(sw.title) + '" loading="lazy" />' +
      '</div>' +
      '<div class="mod-card__content">' +
        '<h3 class="mod-card__title">' + escapeHtml(sw.title) + '</h3>' +
        tagsHTML +
        '<p class="mod-card__overview">' + escapeHtml(sw.overview) + '</p>' +
      '</div>' +
    '</div>';
  }).join('');
}

function renderMods() {
  var grid = document.getElementById('modsGrid');
  if (!grid) return;

  var items = (activeModsCat === 'rpgmaker') ? rpgMakerPlugins : mods;

  grid.innerHTML = items.map(function(mod) {
    return '<div class="mod-card">' +
      '<div class="mod-card__image">' +
        '<img src="' + encodeURI(mod.image) + '" alt="' + escapeHtml(mod.title) + '" loading="lazy" />' +
      '</div>' +
      '<div class="mod-card__content">' +
        '<h3 class="mod-card__title"><a href="' + escapeHtml(mod.link) + '" target="_blank" rel="noopener noreferrer" class="mod-card__title-link">' + escapeHtml(mod.title) + '</a></h3>' +
        '<p class="mod-card__overview">' + escapeHtml(mod.overview) + '</p>' +
      '</div>' +
    '</div>';
  }).join('');
}

function setupModsCategory() {
  var modsPanel = document.getElementById('section-mods');
  if (!modsPanel) return;
  modsPanel.addEventListener('click', function(e) {
    var btn = e.target.closest('.mods-cat-btn');
    if (!btn) return;
    var cat = btn.getAttribute('data-cat');
    if (cat === activeModsCat) return;
    activeModsCat = cat;
    modsPanel.querySelectorAll('.mods-cat-btn').forEach(function(b) {
      b.classList.toggle('mods-cat-btn--active', b === btn);
    });
    renderMods();
  });
}

// ============================================================================
// NAVIGATION
// ============================================================================

var activeSection = null;
var knownSections = ['games', 'arts', 'software', 'mods', 'quiz', 'about'];

function _applySection(sectionId) {
  // Hide all panels, show the target
  document.querySelectorAll('.section-panel').forEach(function(panel) {
    panel.style.display = 'none';
  });
  var target = document.getElementById('section-' + sectionId);
  if (target) target.style.display = 'block';

  // Update desktop nav
  document.querySelectorAll('.header__nav-btn').forEach(function(btn) {
    btn.classList.toggle('header__nav-btn--active', btn.getAttribute('data-section') === sectionId);
  });

  // Update bottom nav
  document.querySelectorAll('.bottom-nav__btn').forEach(function(btn) {
    btn.classList.toggle('bottom-nav__btn--active', btn.getAttribute('data-section') === sectionId);
  });

  // Re-observe videos if switching to games on desktop
  if (sectionId === 'games' && !isMobile() && window._desktopVideoObserve) {
    setTimeout(window._desktopVideoObserve, 100);
  }

  // Pause all videos when leaving games section
  if (sectionId !== 'games') {
    document.querySelectorAll('video').forEach(function(v) { v.pause(); });
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchSection(sectionId) {
  if (sectionId === activeSection) return;
  activeSection = sectionId;

  // Update URL
  var url = (sectionId === 'games') ? '/' : '/' + sectionId;
  history.pushState({ section: sectionId }, '', url);

  _applySection(sectionId);
}

function setupNavigation() {
  // Desktop nav
  document.querySelectorAll('.header__nav-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      switchSection(this.getAttribute('data-section'));
    });
  });

  // Mobile bottom nav
  document.querySelectorAll('.bottom-nav__btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      switchSection(this.getAttribute('data-section'));
    });
  });

  // Browser back/forward
  window.addEventListener('popstate', function(e) {
    var section = (e.state && e.state.section) || 'games';
    if (section === activeSection) return;
    activeSection = section;
    _applySection(section);
  });
}

// ============================================================================
// INIT
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
  // Set year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Render all sections
  renderDesktopGallery();
  renderArtworks();
  renderSoftware();
  renderMods();
  renderQuizzes();

  // Setup interactions
  setupNavigation();
  setupDesktopHover();
  setupDesktopClick();
  setupDesktopVideoObserver();
  setupCarousel();
  setupQuizModal();
  setupModsCategory();

  // Determine initial section from URL path
  var rawPath = window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
  var initialSection = (knownSections.indexOf(rawPath) !== -1) ? rawPath : 'games';

  // Stamp the history entry with the section so popstate works on first back
  history.replaceState({ section: initialSection }, '', window.location.pathname);

  // Show the correct section
  activeSection = initialSection;
  _applySection(initialSection);
});
