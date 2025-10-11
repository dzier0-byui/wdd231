document.querySelectorAll('.info-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const modal = document.getElementById(link.dataset.modal);
    modal.showModal();
  });
});

document.querySelectorAll('.closeModal').forEach(btn => {
  btn.addEventListener('click', () => btn.closest('dialog').close());
});