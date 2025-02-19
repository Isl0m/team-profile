document.querySelectorAll('.profile-card').forEach(card => {
    card.addEventListener('click', () => {
        alert(`Hello, I'm ${card.querySelector('h3').textContent}!`);
    });
});
