class LoadHead {
    constructor() {
        fetch("html/temp/header.html")
            .then(r => r.text())
            .then(t => document.getElementById("head_target").innerHTML = t);
    }
}

class LoadBottom {
    constructor() {
        fetch("html/temp/bottom.html")
            .then(r => r.text())
            .then(t => document.getElementById("bottom_target").innerHTML = t);
    }
}
