HTMLDocument.prototype.e = document.getElementById;
var displayosname = document.e("osname");
var Name = "Not known";
if (navigator.appVersion.indexOf("Win") != -1) Name =
    "Windows";
if (navigator.appVersion.indexOf("Mac") != -1) Name =
    "Mac";
if (navigator.appVersion.indexOf("X11") != -1) Name =
    "UNIX";
if (navigator.appVersion.indexOf("Linux") != -1) Name =
    "Linux";

function osname() {
    displayosname.innerHTML = Name;
}  