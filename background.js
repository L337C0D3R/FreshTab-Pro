function clearData() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {code: 'localStorage.clear(); sessionStorage.clear();'});
        chrome.cookies.getAll({url: tabs[0].url}, function(cookies) {
            for (let i = 0; i < cookies.length; i++) {
                chrome.cookies.remove({url: tabs[0].url + cookies[i].path, name: cookies[i].name});
            }
        });
    });
}

chrome.browserAction.onClicked.addListener(function(tab) {
    clearData();
});