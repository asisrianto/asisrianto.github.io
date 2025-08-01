document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'light' ? '🌞' : '🌙';
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        themeToggle.textContent = newTheme === 'light' ? '🌞' : '🌙';
    });

    const chatLink = document.querySelector('.chat-link');
    if (chatLink) {
        chatLink.addEventListener('click', (e) => {
            e.preventDefault();
            const countryCode = '628';
            const subscriberNumber = '3130131383' 
            window.location.href = `https://wa.me/${countryCode}${subscriberNumber}`;
        });
    }

    const mailLink = document.querySelector('.mail-link');
    if (mailLink) {
        mailLink.addEventListener('click', (e) => {
            e.preventDefault();
            const username = 'asisrianto.business';
            const domain = 'gmail.com';
            window.location.href = `mailto:${username}@${domain}`;
        });
    }

});