const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onelick = () => {
    navLinks.classlist.toggle('active')
}