// Handle click on volume button
const handleMuteClick = (ev) => {
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

export default handleMuteClick;