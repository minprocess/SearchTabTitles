document.addEventListener('DOMContentLoaded', function () {

  document.getElementById('searchButton').addEventListener('click', () => {
    let searchTerm = document.getElementById('searchTerm').value;
    searchTerm = searchTerm.toLowerCase();

    /*
    chrome.runtime.sendMessage({ type: 'SEARCH_TABS', searchTerm }, (response) => {
      const resultsDiv = document.getElementById('results');
      if (!response.tabs) {
        resultsDiv.textContent = 'No matching tabs found';
        return; 
      }
    */
      const queryOptions = { currentWindow: true };
      chrome.tabs.query(queryOptions, (tabs) => {
        if (!tabs) {
          console.log('no tabs found');
          sendResponse({ tabs: [] });
          return;
        }
        const matchingTabs = tabs.filter(tab => tab.title.toLowerCase().includes(searchTerm));
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';
        matchingTabs.forEach(tab => {
          const link = document.createElement('a');
          link.href = '#';
          link.textContent = tab.title;
          link.addEventListener('click', () => {
            chrome.tabs.update(tab.id, { active: true });
          });
          resultsDiv.appendChild(link);
          resultsDiv.appendChild(document.createElement('br'));
        });
      });

    });

/*
  document.getElementById('searchButton').addEventListener('click', () => {
    const searchTerm = document.getElementById('searchTerm').value;
    console.log('searchTerm:', searchTerm);
    chrome.runtime.sendMessage({ type: 'SEARCH_TABS', searchTerm }, (response) => {
      const resultsDiv = document.getElementById('results');
      if (!response.tabs) {
        resultsDiv.textContent = 'No matching tabs found';
        return; 
      }
      resultsDiv.innerHTML = '';
      response.tabs.forEach(tab => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = tab.title;
        link.addEventListener('click', () => {
          chrome.tabs.update(tab.id, { active: true });
        });
        resultsDiv.appendChild(link);
        resultsDiv.appendChild(document.createElement('br'));
      });
    });
  });

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'SEARCH_TABS') {
      console.log('runtime.message:', message);
      const searchTerm = message.searchTerm.toLowerCase();
      const queryOptions = { currentWindow: true };
      chrome.tabs.query(queryOptions, (tabs) => {
        if (!tabs) {
          console.log('no tabs found');
          sendResponse({ tabs: [] });
          return;
        }
        console.log('number of tabs:', tabs.length);
        console.log('tabs[0].title:', tabs[0].title);
        const matchingTabs = tabs.filter(tab => tab.title.toLowerCase().includes(searchTerm));
        sendResponse({ tabs: matchingTabs });
      });
      return true; // Indicates that the response will be sent asynchronously
    }
  });
*/
});