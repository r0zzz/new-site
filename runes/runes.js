const runeinfo = document.querySelectorAll('.runectn');

const pheader = document.getElementById("precision");
const pinfo = document.getElementById("precisioninfo");
const dheader = document.getElementById("domination");
const dinfo = document.getElementById("dominationinfo");
const sheader = document.getElementById("sorcery");
const sinfo = document.getElementById("sorceryinfo");
const rheader = document.getElementById("resolve");
const rinfo = document.getElementById("resolveinfo");
const iheader = document.getElementById("inspiration");
const iinfo = document.getElementById("inspirationinfo");

let pclicked = false;
let dclicked = false;
let sclicked = false;
let rclicked = false;
let iclicked = false;

$(document).ready(function() {
    $(pheader).click(function() { // check if header is clicked; show and hide content depending on state

        if(pclicked == false) {
            $(pinfo).removeClass("runectn-hide").addClass("runectn-show");
            pclicked = true;
        } else {
            $(pinfo).removeClass("runectn-show").addClass("runectn-hide");
            pclicked = false;
        }
    });

    $(dheader).click(function() {

        if(dclicked == false) {
            $(dinfo).removeClass("runectn-hide").addClass("runectn-show");
            dclicked = true;
        } else {
            $(dinfo).removeClass("runectn-show").addClass("runectn-hide");
            dclicked = false;
        }
    });

    $(sheader).click(function() {

        if(sclicked == false) {
            $(sinfo).removeClass("runectn-hide").addClass("runectn-show");
            sclicked = true;
        } else {
            $(sinfo).removeClass("runectn-show").addClass("runectn-hide");
            sclicked = false;
        }
    });

    $(rheader).click(function() {

        if(rclicked == false) {
            $(rinfo).removeClass("runectn-hide").addClass("runectn-show");
            rclicked = true;
        } else {
            $(rinfo).removeClass("runectn-show").addClass("runectn-hide");
            rclicked = false;
        }
    });

    $(iheader).click(function() {

        if(iclicked == false) {
            $(iinfo).removeClass("runectn-hide").addClass("runectn-show");
            iclicked = true;
        } else {
            $(iinfo).removeClass("runectn-show").addClass("runectn-hide");
            iclicked = false;
        }
    });
});

runeinfo.forEach(rune => {
    rune.classList.remove('runectn-show');
    rune.classList.add('runectn-hide');
});



