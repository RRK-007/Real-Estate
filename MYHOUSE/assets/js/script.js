'use strict';

/**
 * Element toggle function
 */
const elemToggleFunc = function(elem) {
  elem.classList.toggle("active");
};

/**
 * Navbar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * Close navbar when clicking on any navbar link or buttons
 */
navbarLinks.forEach(link => navElemArr.push(link));

/**
 * Add event listeners to toggle navbar and overlay
 */
navElemArr.forEach(elem => {
  elem.addEventListener("click", function() {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
});

/**
 * Header active state on scroll
 */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function() {
  if (window.scrollY >= 400) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/**
 * Property list scroll functionality
 */
function scrollPropertyList(direction) {
  const propertyList = document.querySelector('.property-list');
  const cardWidth = document.querySelector('.property-card').offsetWidth;
  propertyList.scrollLeft += direction * cardWidth;
}

/**
 * Show images popup for a specific property
 */
function showImages(propertyId) {
  const images = {
    'property-1': [
      './assets/images/property-1.jpg',
      './assets/images/property-1-1.jpg',
      './assets/images/property-1-2.jpg',
    ],
    'property-2': [
      './assets/images/property-2.jpg',
      './assets/images/property-2-1.jpg',
      './assets/images/property-2-2.jpg',
    ],
    // Add more properties as needed
  };
  
  const popupImages = document.getElementById('popup-images');
  popupImages.innerHTML = images[propertyId].map(src => `<img src="${src}" class="w-100">`).join('');
  document.getElementById('image-popup').style.display = 'block';
}

/**
 * Show videos popup for a specific property
 */
function showVideos(propertyId) {
  const videos = {
    'property-1': [
      './assets/videos/property-1.mp4',
      './assets/videos/property-1-1.mp4',
    ],
    'property-2': [
      './assets/videos/property-2.mp4',
      './assets/videos/property-2-1.mp4',
    ],
    // Add more properties as needed
  };
  
  const popupVideos = document.getElementById('popup-videos');
  popupVideos.innerHTML = videos[propertyId].map(src => `<video controls class="w-100"><source src="${src}" type="video/mp4"></video>`).join('');
  document.getElementById('video-popup').style.display = 'block';
}

/**
 * Close popup for images or videos
 */
function closePopup(popupId) {
  document.getElementById(popupId).style.display = 'none';
}

/**
 * Initialize popups with close button functionality
 */
document.querySelectorAll('.popup .close-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const popupId = this.closest('.popup').id;
    closePopup(popupId);
  });
});

/**
 * Initialize property card actions (images and videos)
 */
document.querySelectorAll('.property-card .banner-actions-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const propertyId = this.closest('.property-card').id;
    const actionType = this.dataset.action;
    
    if (actionType === 'images') {
      showImages(propertyId);
    } else if (actionType === 'videos') {
      showVideos(propertyId);
    }
  });
});

/**
 * Event listener for property list navigation buttons
 */
document.querySelectorAll('.property-controls button').forEach(btn => {
  btn.addEventListener('click', function() {
    const direction = this.dataset.direction === 'next' ? 1 : -1;
    scrollPropertyList(direction);
  });
});

/**
 * Open Google Maps with a specific address
 */
function openGoogleMaps() {
  window.open('https://www.google.com/maps?q=232/20+Joka,+Kolkata-700104', '_blank');
}
