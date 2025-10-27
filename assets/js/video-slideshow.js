/**
 * Video Slideshow System
 * Cycles through videos automatically while preserving playback timestamps
 */

class VideoSlideshow {
  constructor(containerSelector, videoSources, options = {}) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) return;
    
    this.videoSources = videoSources;
    this.currentIndex = 0;
    this.timestamps = new Map(); // Store timestamp for each video
    this.intervalDuration = options.intervalDuration || 20000; // Default 20 seconds
    this.intervalId = null;
    
    this.init();
  }
  
  init() {
    // Create single video element
    this.videoElement = document.createElement('video');
    this.videoElement.className = 'slideshow-video';
    this.videoElement.muted = true;
    this.videoElement.loop = false; // We'll handle looping ourselves
    this.videoElement.playsinline = true;
    this.videoElement.autoplay = true;
    
    // Initialize timestamps to 0
    this.videoSources.forEach((src, index) => {
      this.timestamps.set(index, 0);
    });
    
    // Replace container content with single video
    this.container.innerHTML = '';
    this.container.appendChild(this.videoElement);
    
    // Load first video
    this.loadVideo(0);
    
    // Set up event listeners
    this.setupEventListeners();
    
    // Start auto-rotation
    this.startRotation();
  }
  
  setupEventListeners() {
    // Save timestamp before video ends or is switched
    this.videoElement.addEventListener('timeupdate', () => {
      this.timestamps.set(this.currentIndex, this.videoElement.currentTime);
    });
    
    // Handle video ending
    this.videoElement.addEventListener('ended', () => {
      // Reset timestamp for this video and move to next
      this.timestamps.set(this.currentIndex, 0);
      this.nextVideo();
    });
    
    // Handle errors
    this.videoElement.addEventListener('error', (e) => {
      console.error('Video error:', e);
      this.nextVideo();
    });
    
    // Pause rotation when page is hidden
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.stopRotation();
        this.videoElement.pause();
      } else {
        this.startRotation();
        this.videoElement.play().catch(e => console.log('Play failed:', e));
      }
    });
  }
  
  loadVideo(index) {
    this.currentIndex = index;
    const src = this.videoSources[index];
    const savedTime = this.timestamps.get(index) || 0;
    
    // Load video
    this.videoElement.src = src;
    
    // Set saved timestamp once metadata is loaded
    this.videoElement.addEventListener('loadedmetadata', () => {
      this.videoElement.currentTime = savedTime;
      this.videoElement.play().catch(e => console.log('Play failed:', e));
    }, { once: true });
  }
  
  nextVideo() {
    // Save current timestamp
    this.timestamps.set(this.currentIndex, this.videoElement.currentTime);
    
    // Move to next video
    this.currentIndex = (this.currentIndex + 1) % this.videoSources.length;
    this.loadVideo(this.currentIndex);
    
    // Reset rotation timer
    this.resetRotation();
  }
  
  previousVideo() {
    // Save current timestamp
    this.timestamps.set(this.currentIndex, this.videoElement.currentTime);
    
    // Move to previous video
    this.currentIndex = (this.currentIndex - 1 + this.videoSources.length) % this.videoSources.length;
    this.loadVideo(this.currentIndex);
    
    // Reset rotation timer
    this.resetRotation();
  }
  
  startRotation() {
    if (this.intervalId) return; // Already running
    
    this.intervalId = setInterval(() => {
      this.nextVideo();
    }, this.intervalDuration);
  }
  
  stopRotation() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  
  resetRotation() {
    this.stopRotation();
    this.startRotation();
  }
  
  destroy() {
    this.stopRotation();
    if (this.videoElement) {
      this.videoElement.pause();
      this.videoElement.src = '';
    }
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initVideoSlideshows);
} else {
  initVideoSlideshows();
}

function initVideoSlideshows() {
  // Game Dev page videos
  const gameDevContainer = document.querySelector('#game-video-slideshow');
  if (gameDevContainer) {
    const gameDevVideos = [
      'GameDevPortfolios/Trapped in a Nightmare.mp4',
      'GameDevPortfolios/Chrono Plasmorph.mp4',
      'GameDevPortfolios/Flabby Firth.mp4',
      'GameDevPortfolios/2D Platformer Template.mp4'
    ];
    new VideoSlideshow('#game-video-slideshow', gameDevVideos, { intervalDuration: 20000 });
  }
  
  // Art page images
  const artContainer = document.querySelector('#art-image-slideshow');
  if (artContainer) {
    const artImages = [
      'DigitalArtPortfolio/Mahiro1.jpg',
      'DigitalArtPortfolio/Mahiro2.jpg',
      'DigitalArtPortfolio/Mahiro3.jpg',
      'DigitalArtPortfolio/Angela.jpg',
      'DigitalArtPortfolio/Marnie.jpg',
      'DigitalArtPortfolio/Gaomon.jpg',
      'DigitalArtPortfolio/117313274_p0_master1200.jpg',
      'DigitalArtPortfolio/104943736-f3e130fa02dc6590a5fb05513e0ce962_p1_master1200.jpg'
    ];
    new ImageSlideshow('#art-image-slideshow', artImages, { intervalDuration: 20000 });
  }
}

/**
 * Image Slideshow System
 * Similar to video slideshow but for images
 */
class ImageSlideshow {
  constructor(containerSelector, imageSources, options = {}) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) return;
    
    this.imageSources = imageSources;
    this.currentIndex = 0;
    this.intervalDuration = options.intervalDuration || 20000;
    this.intervalId = null;
    
    this.init();
  }
  
  init() {
    // Create single image element
    this.imageElement = document.createElement('img');
    this.imageElement.className = 'slideshow-image';
    this.imageElement.loading = 'eager';
    
    // Replace container content with single image
    this.container.innerHTML = '';
    this.container.appendChild(this.imageElement);
    
    // Load first image
    this.loadImage(0);
    
    // Set up event listeners
    this.setupEventListeners();
    
    // Start auto-rotation
    this.startRotation();
  }
  
  setupEventListeners() {
    // Pause rotation when page is hidden
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.stopRotation();
      } else {
        this.startRotation();
      }
    });
  }
  
  loadImage(index) {
    this.currentIndex = index;
    const src = this.imageSources[index];
    
    // Add fade effect
    this.imageElement.style.opacity = '0';
    
    setTimeout(() => {
      this.imageElement.src = src;
      this.imageElement.alt = `Artwork ${index + 1}`;
      this.imageElement.style.opacity = '1';
    }, 300);
  }
  
  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.imageSources.length;
    this.loadImage(this.currentIndex);
  }
  
  startRotation() {
    if (this.intervalId) return;
    
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, this.intervalDuration);
  }
  
  stopRotation() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  
  destroy() {
    this.stopRotation();
    if (this.imageElement) {
      this.imageElement.src = '';
    }
  }
}
