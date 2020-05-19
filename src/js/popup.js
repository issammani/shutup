import findAudibleTabs from './utils/findAudibleTabs.js';

window.onload = () => {
    findAudibleTabs();
    chrome.tabs.onUpdated.addListener(findAudibleTabs);
};