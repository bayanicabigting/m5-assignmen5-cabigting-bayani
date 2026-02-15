var hamburgerBtn = document.querySelector('.hamburger-btn');
var hamburgerMenu = document.querySelector('.hamburger-menu');

function toggleMenu() {
    var open = hamburgerMenu.classList.contains('show-menu');
        if (open) {
            hamburgerMenu.classList.remove('show-menu');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
        } else {
        hamburgerMenu.classList.add('show-menu');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        }
}

hamburgerBtn.addEventListener('click', function() {
    toggleMenu();
});

document.addEventListener('click', function(e) {
    if (
        !hamburgerMenu.contains(e.target) &&
        !hamburgerBtn.contains(e.target)
    ) {
        hamburgerMenu.classList.remove('show-menu');
        hamburgerBtn.setAttribute('aria-expanded', 'false');;
    }
});

hamburgerMenu.addEventListener('click', function (e) {
    e.stopPropagation();
});

  // Close on Escape
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && hamburgerMenu.classList.contains('show-menu')) {
        hamburgerMenu.classList.remove('show-menu');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        hamburgerBtn.focus();
    }
});
