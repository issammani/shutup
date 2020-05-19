import flushTabs from './flushTabs.js';
import addTabElement from './addTabElement.js';
import showUI from './showUI.js';

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

export default findAudibleTabs;