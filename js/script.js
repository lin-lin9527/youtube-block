
function skipAd() {
    const videoContainer = document.getElementById("movie_player");
    const isAd = videoContainer?.classList.contains("ad-interrupting") || videoContainer?.classList.contains("ad-showing");
    if (isAd) {
        // 加速廣告
        const videoPlayer = document.getElementsByClassName("video-stream")[0];
        videoPlayer.muted = true;
        console.log("@@@@@@@@@@@@@@@@@",videoPlayer.currentTime,videoPlayer.duration)
        videoPlayer.currentTime = videoPlayer.duration - 0.1;
        videoPlayer.paused && videoPlayer.play()

        // 廣告略過按鈕點擊
        if (document.querySelector(".ytp-ad-skip-button"))
            document.querySelector(".ytp-ad-skip-button")?.click();

        if (document.querySelector(".ytp-ad-skip-button"))
            document.querySelector(".ytp-ad-skip-button-modern")?.click();

        if (document.querySelector('.ytp-ad-skip-button-modern.ytp-button')) 
            document.querySelector('.ytp-ad-skip-button-modern.ytp-button')?.click();

        if (document.querySelector('.ytp-ad-text.ytp-ad-skip-button-text'))
            document.querySelector('.ytp-ad-text.ytp-ad-skip-button-text')?.click();

    }
    
    // var ad_list = document.querySelectorAll(".ytd-display-ad-renderer")
    // if (ad_list.length != 0) {
    //     for (let i in ad_list) {
    //         console.log(ad_list[i])
    //         // ad_list[i].style["display"] = "none"
    //     }
    // } 

}

setInterval(() => {
    skipAd();
}, 1000);


// const taimuRipu = async () => {
//     await new Promise((resolve, _reject) => {
//         const videoContainer = document.getElementById("movie_player");

//         const setTimeoutHandler = () => {
//             const isAd = videoContainer?.classList.contains("ad-interrupting") || videoContainer?.classList.contains("ad-showing");
//             const skipLock = document.querySelector(".ytp-ad-preview-text")?.innerText;
//             const surveyLock = document.querySelector(".ytp-ad-survey")?.length > 0;

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

//             const staticAds = [".ytd-companion-slot-renderer", ".ytd-action-companion-ad-renderer", // in-feed video ads
//                 ".ytd-watch-next-secondary-results-renderer.sparkles-light-cta", ".ytd-unlimited-offer-module-renderer", // similar components
//                 ".ytp-ad-overlay-image", ".ytp-ad-text-overlay", // deprecated overlay ads (04-06-2023)
//                 "div#root.style-scope.ytd-display-ad-renderer.yt-simple-endpoint", "div#sparkles-container.style-scope.ytd-promoted-sparkles-web-renderer",
//                 ".ytd-display-ad-renderer", ".ytd-statement-banner-renderer", ".ytd-in-feed-ad-layout-renderer", // homepage ads
//                 "div#player-ads.style-scope.ytd-watch-flexy, div#panels.style-scope.ytd-watch-flexy", // sponsors
//                 ".ytd-banner-promo-renderer", ".ytd-video-masthead-ad-v3-renderer", ".ytd-primetime-promo-renderer" // subscribe for premium & youtube tv ads
//             ];

//             staticAds.forEach((ad) => {
//                 document.hideElementsBySelector(ad);
//             });

//             resolve();
//         };

//         // RUN IT ONLY AFTER 100 MILLISECONDS
//         setTimeout(setTimeoutHandler, 100);
//     });

//     taimuRipu();
// };


// const init = async () => {
//     Document.prototype.hideElementsBySelector = (selector) =>
//         [...document.querySelectorAll(selector)].forEach(
//             (el) => (el.style.display = "none")
//         );

//     taimuRipu();
// };

// init();