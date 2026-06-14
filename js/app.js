// ─── DRAWER ──────────────────────────────────────────────
const hamBtn    = document.getElementById('hamBtn');
const drawer    = document.getElementById('drawer');
const overlay   = document.getElementById('drawerOverlay');

function openDrawer() {
  hamBtn.classList.add('open');
  drawer.classList.add('open');
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  hamBtn.classList.remove('open');
  drawer.classList.remove('open');
  overlay.classList.remove('show');
  document.body.style.overflow = '';
}

hamBtn.addEventListener('click', () => {
  drawer.classList.contains('open') ? closeDrawer() : openDrawer();
});
overlay.addEventListener('click', closeDrawer);

// ─── FAQ ─────────────────────────────────────────────────
document.querySelectorAll('.faq-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer  = btn.nextElementSibling;
    const isOpen  = btn.classList.contains('open');
    // close all
    document.querySelectorAll('.faq-btn.open').forEach(b => {
      b.classList.remove('open');
      b.nextElementSibling.classList.remove('open');
    });
    if (!isOpen) {
      btn.classList.add('open');
      answer.classList.add('open');
    }
  });
});

// ─── COPY BUTTON ─────────────────────────────────────────
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const code = btn.dataset.copy;
    navigator.clipboard.writeText(code).then(() => {
      btn.textContent = '✓ Copied';
      setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
    }).catch(() => {
      btn.textContent = '✓ Copied';
      setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
    });
  });
});

// ─── ACTIVE LINK ─────────────────────────────────────────
const current = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.drawer-link').forEach(link => {
  const href = (link.dataset.href || '').split('/').pop();
  if (href === current) link.classList.add('active');
  link.addEventListener('click', closeDrawer);
});
