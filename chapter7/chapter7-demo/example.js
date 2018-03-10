// window.onload = function () {
//     var testdiv = document.getElementById("testdiv");
//     var para = document.createElement("p");
//     var text = document.createTextNode("Hello World");
//     testdiv.appendChild(para);
//     para.appendChild(text);
//     var info = "nodeName: ";
//     info += para.nodeName;
//     info += " nodeType ";
//     info += para.nodeType;
//     alert(info);
// }
window.onload = function () {
    var testdiv = document.getElementById("testdiv");
    var em = document.createElement("em");
    var text1 = document.createTextNode("my");
    em.appendChild(text1);
    var text2 = document.createTextNode("This is ");
    var text3 = document.createTextNode(" content.");
    testdiv.appendChild(text2);
    testdiv.appendChild(em);
    testdiv.appendChild(text3);

}