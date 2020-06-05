window.onload = function() {
    var odiv = document.getElementById("antzone");
    var obt = document.getElementById("bt");
    var count = 0;
    obt.onclick = function() {
        count = count + 1;
        odiv.innerHTML = count;
    }
}