document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const mainContent = document.querySelector('.main-content');

    // Hide loading screen and show main content after 2 seconds
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        mainContent.classList.add('visible');
    }, 2000);
}); 

document.addEventListener('click', () => {
    const button = document.querySelector(".buttonId");
    alert("w.i.p");
})