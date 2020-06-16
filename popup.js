document.getElementById("add").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, "addEvents", function (response) {
            document.getElementById("events").innerText = `${response} events in total`;
        });
    });
});

document.getElementById("download").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, "download", function (response) {
        });
    });
})

document.getElementById("reset").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, "reset", function (response) {
            document.getElementById("events").innerText = `0 events in total`;
        });
    });
})