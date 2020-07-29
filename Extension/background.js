chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
    });
});
chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});
chrome.extension.onRequest.addListener(function(prediction){
    if (prediction == 1){
        alert("Warning: Phishing detected!!");
    }
    else if (prediction == -1){
        alert("No phishing detected");
    }
});