function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gally = document.getElementById("imagegallery");
    var links = gally.getElementsByTagName("a");
    for(var i = 0 ; i<links.length ; i++){
        links[i].onclick = function () {
            return showPic(this) ? false : true;
        }
    }
}
function showPic(whichpic) {
    if(!document.getElementById("placeholder")){
        return false;
    }
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if(placeholder.nodeName != "IMG"){
        return false;
    }
    placeholder.setAttribute("src",source);
    if(document.getElementById("description")){
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : null;
        var description = document.getElementById("description");
        if (description.firstChild.nodeType == 3){
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}
// function countBodyChildren() {
//     var body_element = document.getElementsByTagName("body")[0];
//     var element_sum = body_element.childNodes.length;
//     alert(element_sum);
//     alert(body_element.nodeType);
//     alert(description.childNodes[0].nodeValue);
// }
// window.onload = countBodyChildren;
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function'){
        window.onload = func;
    }else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
addLoadEvent(prepareGallery);
