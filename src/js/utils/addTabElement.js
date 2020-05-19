import truncateText from './truncateText.js';

const addTabElement = (favicon, title, muted, tabId) => {
    // Favicon either doesn't exit or is another extension's icon 
    if(!favicon || !favicon.includes('http')){
        favicon = '/assets/shutup32.png';
    }
    document.querySelector('.tabs').innerHTML += `
        <div> 
            <img class="favicon" src=${favicon} alt=${title}/>
            <p> ${truncateText(title, 20)} </p>
            <img data-tab-id="${tabId}" class="volume" src=${muted ? "/assets/volume_off.svg": "/assets/volume_up.svg"} alt="Volume - Icon" />
        </div>`;
};

export default addTabElement;