let overlay;

function createOverlay () {
    overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    overlay.style.backdropFilter = 'blur(5px)';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'none'; // 初始不显示
    document.body.appendChild(overlay);
}

function showOverlay () {
    overlay.style.display = 'block';
}

function hideOverlay () {
    overlay.style.display = 'none';
}

function addEventListener () {
    document.addEventListener('mouseleave', showOverlay);
    document.addEventListener('mouseenter', hideOverlay);
}

function removeEventListener () {
    document.removeEventListener('mouseleave', showOverlay);
    document.removeEventListener('mouseenter', hideOverlay);
}

chrome.runtime.onMessage.addListener((request) => {
    debugger
    console.log("recieve message: " + request);
    if (!request.blurEnabled) {
        hideOverlay();
        removeEventListener();
    } else {
        addEventListener();
    }
});

// chrome.runtime.onMessage.addListener(
//     function (request, sender, sendResponse) {
//         console.log("recieve message: " + request);
//         if (!request.blurEnabled) {
//             hideOverlay();
//             removeEventListener();
//         } else {
//             addEventListener();
//         }
// });

function checkSetting () {
    chrome.storage.sync.get('blurEnabled', (data) => {
        if (data.blurEnabled) {
            addEventListener();
        }
    });
}

createOverlay();
checkSetting();
