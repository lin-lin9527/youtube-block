

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    const forbiddenKeywords = ["youtube", "netflix", "disney"];
    const isPageForbidden = forbiddenKeywords.some((keyword) => 
        tab.url.includes(keyword)
    );
    if (isPageForbidden) {
        // 呼叫script檔案、function
        chrome.scripting.executeScript(
            {
                target: { tabId: tabId, allFrames: true },
                function: otherInfo
            },
        )
    }
});

function otherInfo() {
    setTimeout(() => {
        // 隱藏影片列表最上面的廣告
        if (document.querySelector(".ytd-item-section-renderer .ytd-ad-slot-renderer")) {
            console.log("SSSSSSSSSSSSS",document.querySelector(".ytd-item-section-renderer .ytd-ad-slot-renderer"))
            document.querySelector(".ytd-item-section-renderer .ytd-ad-slot-renderer").style["display"] = "none"
        }
    }, 200);
}















// // RELOAD ALL YOUTUBE TABS WHEN THE EXTENSION IS FIRST INSTALLED, DO NOTHING ON UPDATED
// chrome.runtime.onInstalled.addListener((details) => {
//     console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!",details,details.reason);
//     switch (details.reason) {
//         case "install":
//             console.info("EXTENSION INSTALLED");
//             chrome.tabs.query({}, (tabs) => {
//                 tabs
//                     .filter((tab) => tab.url.startsWith("https://www.youtube.com/"))
//                     .forEach(({ id }) => {
//                         chrome.tabs.reload(id);
//                     });
//             });
//             break;
//         case "update":
//             console.info("EXTENSION UPDATED");
//             break;
//         case "chrome_update":
//         case "shared_module_update":
//         default:
//             console.info("BROWSER UPDATED");
//             break;
//     }
// });

// const taimuRipu = async () => {
//     await new Promise((resolve, _reject) => {
//         const videoContainer = document.getElementById("movie_player");

//         const setTimeoutHandler = () => {
//             const isAd = videoContainer?.classList.contains("ad-interrupting") || videoContainer?.classList.contains("ad-showing");
//             const skipLock = document.querySelector(".ytp-ad-preview-text")?.innerText;
//             const surveyLock = document.querySelector(".ytp-ad-survey")?.length > 0;
//             console.log("GGGGGGGGGGGGGGGGGGGGG",isAd,skipLock,surveyLock)
//             if (isAd && skipLock) {
//                 const videoPlayer = document.getElementsByClassName("video-stream")[0];
//                 videoPlayer.muted = true; // videoPlayer.volume = 0;
//                 videoPlayer.currentTime = videoPlayer.duration - 0.1;
//                 videoPlayer.paused && videoPlayer.play()
//                 // CLICK ON THE SKIP AD BTN
//                 document.querySelector(".ytp-ad-skip-button")?.click();
//                 document.querySelector(".ytp-ad-skip-button-modern")?.click();
//             } else if (isAd && surveyLock) {
//                 // CLICK ON THE SKIP SURVEY BTN
//                 document.querySelector(".ytp-ad-skip-button")?.click();
//                 document.querySelector(".ytp-ad-skip-button-modern")?.click();
//             }

//             resolve();
//         };

//         // RUN IT ONLY AFTER 100 MILLISECONDS
//         setTimeout(setTimeoutHandler, 100);
//     });

//     taimuRipu();
// };

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//     if (
//         changeInfo.status === "complete" &&
//         String(tab.url).includes("https://www.youtube.com/watch")
//     ) {
//         chrome.scripting.executeScript({
//             target: { tabId: tabId },
//             function: taimuRipu,
//         });
//     }
// });