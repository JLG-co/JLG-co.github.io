// Gamification Logic

// Simulate User Data
const defaultUser = {
    name: 'أنت',
    xp: 1250,
    level: 5,
    badges: ['first_solve', 'daily_streak', 'perfect_score']
};

function initDashboard() {
    const user = JSON.parse(localStorage.getItem('userStats')) || defaultUser;
    
    // Update Header
    const xpDisplay = document.getElementById('userXP');
    if (xpDisplay) xpDisplay.textContent = `${user.xp} XP`;
    
    // In a real app, this would fetch from backend
    // Since we are mocking, we just assume the static HTML is correct or we update it
}

document.getElementById('logoutBtn')?.addEventListener('click', () => {
    localStorage.removeItem('authToken');
    window.location.href = 'login.html';
});

// Check Auth
if (!localStorage.getItem('authToken')) {
    // Redirect to login if not authenticated (simple check)
    // window.location.href = 'login.html'; 
    // Commented out to allow viewing the prototype without forcing login loop during dev
}

initDashboard();
