import truncateText from './utils/truncateText.js';

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

// Handle click on volume button
const handleMuteClick = (ev) => {
    console.log('Clicked ! ');
    // Toggle volume icon
    if(ev.target.src.includes('up')){
        // Mute this tab
        chrome.tabs.update(parseInt(ev.target.dataset.tabId), {muted: true});
        ev.target.src.replace('up','off');
    }else{
        // Unmute this tab
        chrome.tabs.update(parseInt(ev.target.dataset.tabId), {muted: false});
        ev.target.src.replace('off','up');
    }
    
};

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
}

const flushTabs = () => {
    // Flush old tabs
    document.querySelector('.tabs').innerHTML = "";
};


const findAudibleTabs = () => {
    chrome.tabs.query({}, (tabs) => {
        flushTabs();
        if(tabs.length){
            tabs.forEach(tab => {
                if(tab.audible || tab.mutedInfo.muted){
                    addTabElement(tab.favIconUrl, tab.title, tab.mutedInfo.muted, tab.id);
                }
            });
            showUI();
        }
    });
}

window.onload = () => {
    findAudibleTabs();
    chrome.tabs.onUpdated.addListener(findAudibleTabs);
};