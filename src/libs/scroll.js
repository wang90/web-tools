let clickCount = 0;
let clickDownTimer = null;
export  function scrollPage(callback) {
    clickCount += 1;
    if (clickDownTimer) {
        if (clickCount === 2) {
            callback();
        }
        clearTimeout(clickDownTimer);
        clickDownTimer = null;
    }
    clickDownTimer = setTimeout(() => {
        clickDownTimer = null;
        clickCount  = 0;
    },300);
}