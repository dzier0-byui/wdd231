 const urlParams = new URLSearchParams(window.location.search);

  document.getElementById('firstName').textContent = urlParams.get('firstName') || '';
  document.getElementById('lastName').textContent = urlParams.get('lastName') || '';
  document.getElementById('email').textContent = urlParams.get('email') || '';
  document.getElementById('mobile').textContent = urlParams.get('mobile') || '';
  document.getElementById('organization').textContent = urlParams.get('organization') || '';
  document.getElementById('timestamp').textContent = urlParams.get('timestamp') || '';