const galleryImages = document.querySelectorAll('.card img'); 
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-image');
const closeModal = document.querySelector('.close');
const downloadButton = document.querySelector('#modal-download-btn'); 
const modalTitle = document.querySelector('.modal-title'); 

galleryImages.forEach((image) => {
  image.addEventListener('click', () => {
    const imageUrl = image.getAttribute('src'); 
    const imageName = image.getAttribute('data-name'); 
    modalImage.src = imageUrl;
    modalTitle.textContent = imageName; 
    
    downloadButton.href = imageUrl; 
    downloadButton.download = imageName;
    modal.classList.remove('hidden'); 
  });
});


downloadButton.addEventListener('click', (e) => {
   ف
  e.preventDefault();
  const imageUrl = downloadButton.href;
  

  window.open(imageUrl, '_blank');
 
  // downloadButton.click();
});


closeModal.addEventListener('click', () => {
  modal.classList.add('hidden'); 
});

function searchImages() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.images .card'); /
  cards.forEach((card) => {
    const imageName = card.querySelector('img').getAttribute('data-name').toLowerCase(); 
    
    if (imageName.indexOf(searchTerm) !== -1) {
      card.style.display = '';
    } else {
      card.style.display = 'none'; // 
    }
  });
}