var icondark = document.getElementById("icondark");

if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");

if (localData == "light") {
        icondark.src = "images/sun.svg";
        document.body.classList.remove("dark-theme");
}
else if (localData == "dark") {
        icondark.src = "images/moon.svg";
        document.body.classList.add("dark-theme");
}

icondark.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        icondark.src = "images/moon.svg";
        localStorage.setItem("theme", "dark");
    } else{
        icondark.src = "images/sun.svg";
        localStorage.setItem("theme", "light");
    }
}