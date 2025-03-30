// Fix 100vh on mobile
function setVhUnit() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  // Initial call
  setVhUnit();
  
  // Update on resize/orientation change
  window.addEventListener('resize', setVhUnit);