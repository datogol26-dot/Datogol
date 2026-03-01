alert("DatoGol JS está funcionando");
function showTab(id, el) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.atab').forEach(t => t.classList.remove('active'));
    document.getElementById('tab-' + id).classList.add('active');
    el.classList.add('active');
  }

  function setLeague(el) {
    document.querySelectorAll('.league-pill').forEach(p => p.classList.remove('active'));
    el.classList.add('active');
  }

  // Make upcoming matches clickable
  document.querySelectorAll('.upcoming-match').forEach(m => {
    m.addEventListener('click', function() {
      document.querySelectorAll('.upcoming-match').forEach(x => x.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Animate bars on load
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelectorAll('.bar-home-fill, .bar-away-fill').forEach(bar => {
        const w = bar.style.width;
        bar.style.width = '0';
        requestAnimationFrame(() => {
          setTimeout(() => { bar.style.width = w; }, 50);
        });
      });
    }, 300);
  });
