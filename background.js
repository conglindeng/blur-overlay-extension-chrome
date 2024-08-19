let isBlurEnabled = false;

chrome.action.onClicked.addListener((tab) => {
    isBlurEnabled = !isBlurEnabled; // 切换状态
    chrome.storage.sync.set({ blurEnabled: isBlurEnabled }); // 保存状态
    // 发送消息到所有的tab
    chrome.tabs.query({}, (tabs) => {
        tabs.forEach((tab) => {
            
            // 向每个标签页发送消息
            chrome.tabs.sendMessage(tab.id, { blurEnabled: isBlurEnabled }, (response) => {
                if (response) {
                    console.log("success");
                }
            });
        });
    });
});
