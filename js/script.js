function changeColor() {

    // document.getElementById("nav-about").style.opacity = 0.5;
    // document.getElementById("nav-experience").style.opacity = 0.5;
    // document.getElementById("nav-education").style.opacity = 0.5;
    // document.getElementById("nav-skills").style.opacity = 0.5;
    // document.getElementById("nav-awards").style.opacity = 0.5;

    const el = document.getElementById("navbar-nav");
    el.addEventListener('click', function (e) {
        target = e.target.id;

        // document.getElementById(target).style.opacity = 1;
        // document.getElementById(target).style.color = "#fff";
    });
}