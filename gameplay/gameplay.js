const borderstyle = "solid";
const map = document.getElementById("map");
const mapinfo = document.getElementById("mapinfo");
let mapclicked = false;

const role = document.getElementById("role");
const roleinfo = document.getElementById("roleinfo");
let roleclicked = false;

const classdiv = document.getElementById("classdiv");
const classinfo = document.getElementById("classinfo");
let classclicked = false;

const minion = document.getElementById("minion");
const minioninfo = document.getElementById("minioninfo");
let minionclicked = false;

const junglemns = document.getElementById("junglemns");
const junglemnsinfo = document.getElementById("junglemnsinfo");
let junglemnsclicked = false;

const dragon = document.getElementById("dragon");
const dragoninfo = document.getElementById("dragoninfo");
let dragonclicked = false;

map.style.borderStyle = borderstyle;
role.style.borderStyle = borderstyle;
classdiv.style.borderStyle = borderstyle;
minion.style.borderStyle = borderstyle;
junglemns.style.borderStyle = borderstyle;
dragon.style.borderStyle = borderstyle;

$(document).ready(function() {
    $(map).click(function() { // check if header is clicked; show and hide content depending on state
        if(mapclicked == false) {
            $(mapinfo).removeClass("moreinfo-hide").addClass("moreinfo-show");
            $(this).addClass("card-clicked");
            mapclicked = true;
            
        } else {
            $(mapinfo).removeClass("moreinfo-show").addClass("moreinfo-hide");
            $(this).removeClass("card-clicked");
            mapclicked = false;
        }
    });

    $(role).click(function() { // check if header is clicked; show and hide content depending on state
        if(roleclicked == false) {
            $(roleinfo).removeClass("moreinfo-hide").addClass("moreinfo-show");
            $(this).addClass("card-clicked");
            roleclicked = true;
        } else {
            $(roleinfo).removeClass("moreinfo-show").addClass("moreinfo-hide");
            $(this).removeClass("card-clicked");
            roleclicked = false;
        }
    });

    $(classdiv).click(function() { // check if header is clicked; show and hide content depending on state
        if(classclicked == false) {
            $(classinfo).removeClass("moreinfo-hide").addClass("moreinfo-show");
            $(this).addClass("card-clicked");
            classclicked = true;
        } else {
            $(classinfo).removeClass("moreinfo-show").addClass("moreinfo-hide");
            $(this).removeClass("card-clicked");
            classclicked = false;
        }
    });

    $(minion).click(function() { // check if header is clicked; show and hide content depending on state
        if(minionclicked == false) {
            $(minioninfo).removeClass("moreinfo-hide").addClass("moreinfo-show");
            $(this).addClass("card-clicked");
            minionclicked = true;
        } else {
            $(minioninfo).removeClass("moreinfo-show").addClass("moreinfo-hide");
            $(this).removeClass("card-clicked");
            minionclicked = false;
        }
    });

    $(junglemns).click(function() { // check if header is clicked; show and hide content depending on state
        if(junglemnsclicked == false) {
            $(junglemnsinfo).removeClass("moreinfo-hide").addClass("moreinfo-show");
            $(this).addClass("card-clicked");
            junglemnsclicked = true;
        } else {
            $(junglemnsinfo).removeClass("moreinfo-show").addClass("moreinfo-hide");
            $(this).removeClass("card-clicked");
            junglemnsclicked = false;
        }
    });

    $(dragon).click(function() { // check if header is clicked; show and hide content depending on state
        if(dragonclicked == false) {
            $(dragoninfo).removeClass("moreinfo-hide").addClass("moreinfo-show");
            $(this).addClass("card-clicked");
            dragonclicked = true;
        } else {
            $(dragoninfo).removeClass("moreinfo-show").addClass("moreinfo-hide");
            $(this).removeClass("card-clicked");
            dragonclicked = false;
        }
    });
});