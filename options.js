/*
const enableBlurCheckbox = document.getElementById('enableBlur');

// 加载设置
chrome.storage.sync.get('enableBlur', (data) => {
    enableBlurCheckbox.checked = data.enableBlur !== undefined ? data.enableBlur : true; // 默认启用
});

// 保存设置
enableBlurCheckbox.addEventListener('change', () => {
    chrome.storage.sync.set({ enableBlur: enableBlurCheckbox.checked });
});
*/