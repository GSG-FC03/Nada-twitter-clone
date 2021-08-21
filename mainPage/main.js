//get the name of user form login page
window.onload = function() {
    document.getElementById('profilecardname').innerText =localStorage.getItem('name');
    document.getElementById('username').innerText =localStorage.getItem('name');
};