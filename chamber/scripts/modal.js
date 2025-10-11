const modal = document.querySelector('#npModal');
const closeModal = document.querySelector('#closeModal');
modal.showModal();

closeModal.addEventListener('click', () => {
  modal.close();
});