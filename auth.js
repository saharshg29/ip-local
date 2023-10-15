document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem('currentUser')) {
        window.location.href = 'index.html';
    }
});