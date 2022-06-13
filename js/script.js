window.onload = function () {
    const about = document.getElementById("nav-about")
    about.className = "nav-link actived"
}

function changeColor() {

    const about = document.getElementById("nav-about")
    about.className = "nav-link"

    const experience = document.getElementById("nav-experience")
    experience.className = "nav-link"

    const education = document.getElementById("nav-education")
    education.className = "nav-link"

    const skills = document.getElementById("nav-skills")
    skills.className = "nav-link"

    const awards = document.getElementById("nav-awards")
    awards.className = "nav-link"

    const el = document.getElementById("navbar-nav");
    el.addEventListener('click', function (e) {
        target = e.target.id;
        el2 = document.getElementById(target)
        el2.className = "nav-link actived";
    });
}