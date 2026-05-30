(function() {
  const user = localStorage.getItem('prompthub_user');
  if (!user) window.location.href = 'index.html';
})();