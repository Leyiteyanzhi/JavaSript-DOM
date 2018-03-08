function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
}
function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    var element_sum = body_element.childNodes.length;
    alert(element_sum);
}
window.onload = countBodyChildren;
