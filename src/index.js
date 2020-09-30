import { scrollPage} from "./libs/scroll.js";
(function(){ 
    console.log("is running");
    const defCode = [ 38, 40];
    document.onkeydown = function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode && defCode.indexOf(e.keyCode) > -1){
            scrollPage(() => {
                if (e.keyCode ===40) {
                    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
                }else if (e.keyCode === 38) {
                    window.scrollTo(0,0);
                }
            });
        }
    };
})();