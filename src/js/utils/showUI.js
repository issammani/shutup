import handleMuteClick from './handleMuteClick.js';

// Show the user interface
const showUI = () => {
    // hide no tabs message
    document.querySelector('.no-tabs').classList.remove('show');
    // show header
    document.querySelector('header').classList.add('show');
    // Show tabs
    document.querySelector('.tabs').classList.add('show');
    // attach click event listener to mute button
    document.querySelectorAll('.tabs .volume')
        .forEach(icon => icon.addEventListener('click', handleMuteClick));
};

export default showUI;