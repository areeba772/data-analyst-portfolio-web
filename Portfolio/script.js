(function(){
  var pages = ['home','about','skills','projects','services','resume','contact'];
  var links = document.querySelectorAll('[data-page]');

  function showPage(id){
    if(pages.indexOf(id) === -1) id = 'home';
    pages.forEach(function(p){
      document.getElementById(p).classList.toggle('active', p === id);
    });
    links.forEach(function(l){
      l.classList.toggle('active', l.getAttribute('data-page') === id);
    });
    window.scrollTo(0,0);
  }

  function fromHash(){
    var id = location.hash.replace('#','') || 'home';
    showPage(id);
  }

  window.addEventListener('hashchange', fromHash);
  fromHash();
})();