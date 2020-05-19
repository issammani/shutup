# Shutup

A chrome extension to (un)mute audible tabs.

## Install 
Clone this repo and follow these steps to import an unpacked extension in chrome:

- Open the Extension Management page by navigating to chrome://extensions.
- The Extension Management page can also be opened by clicking on the Chrome menu, hovering over More Tools then selecting Extensions.
- Enable Developer Mode by clicking the toggle switch next to Developer mode.
- Click the LOAD UNPACKED button and select the extension directory.

In case of problems installing the extension consult the [official docs](https://developer.chrome.com/extensions/getstarted).

## Usage 
- If there are no audible tabs, the extension will show a default message.
- If audio is playing in one or more tabs, the popup will list the audible tabs. 
  Just click the speaker icon to (un)mute a tab.

## TODO
[] Add custom icons.
[] Inject script into tabs to detect `<audio>` and `<video>` tags.
[] Add a better UI.
[] Pause audible elements instead of muting them.
