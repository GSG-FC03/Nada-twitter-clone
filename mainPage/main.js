//get the name of user form login page
window.onload = function() {
    document.getElementById('profilecardname').innerText =localStorage.getItem('name');
    document.getElementById('username').innerText =localStorage.getItem('name');
};
//display slider 
const user = document.querySelector('.user');
const sidebar = document.querySelector('.sidebar');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const xBtn = document.querySelector('.sidebar-header i');
user.addEventListener('click', () => 
{
   sidebar.classList.add('sidebar-display');
   sidebarWrapper.classList.add('sidebar-wrapper-display');
});

xBtn.addEventListener('click', () => {
   sidebar.classList.remove('sidebar-display');
   sidebarWrapper.classList.remove('sidebar-wrapper-display');
});