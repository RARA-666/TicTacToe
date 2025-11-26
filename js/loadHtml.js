class loadHead{
    constructor() {
        etch("../header.html")
        .then(r => r.text())
        .then(t => document.getElementById("target").innerHTML = t);
    }
}

class loadBottom{
    constructor() {
        etch("../bottom.html")
        .then(r => r.text())
        .then(t => document.getElementById("target").innerHTML = t);
    }
}

