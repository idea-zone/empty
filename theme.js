
function renderAll(params) {
    console.warn("你好，mini-vlook");
} 

(() => {
    try {

        window.onload = setTimeout(renderAll, 0);

    } catch (err) {
        console.error(err);
    }
})();
