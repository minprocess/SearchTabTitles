#What this Extension Does
Side panel extension for Chrome and Edge browsers. Searches only the titles of open tabs for a string and lists the results as links that can be clicked. Case insensitive.

##Documentation
Starter code created by prompting GitHub Copilot with the following:
"What is the code for a Chrome extension that has a text box to enter a search string, a button to start the search, javascript to iterate through all open tabs in browser and return a list of tabs with titles that match the search term. User should be able to click on a link to open the tab"

Copilot code used popup.js instead of sidepanel.js as was prompted.

Copilot code included a background service worker to search tabs using chrome.tabs.query method. This service worker was called using from popup.js with chrome.runtime.sendmessage method.

##Wish List
Option to make search case sensitive
Option to make search for whole words only
Start search when focus is in text box and user presses Enter key
Option to ignore accent marks