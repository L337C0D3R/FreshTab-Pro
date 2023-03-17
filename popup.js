document.getElementById('clear').addEventListener('click', function() {
    chrome.extension.getBackgroundPage().clearData();
});