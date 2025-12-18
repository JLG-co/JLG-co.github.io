document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
        // Mock Authentication
        localStorage.setItem('authToken', 'mock_token_123');
        localStorage.setItem('userStats', JSON.stringify({
            name: email.split('@')[0],
            xp: 1250,
            level: 5,
            badges: ['first_solve']
        }));
        
        // Show success animation or redirect
        const btn = e.target.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = "جاري الدخول...";
        btn.disabled = true;
        
        setTimeout(() => {
            window.location.href = 'gamification.html';
        }, 1000);
    }
});
