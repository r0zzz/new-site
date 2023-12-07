const runeinfo = document.querySelectorAll('.runectn');
const runeheader = document.querySelectorAll('.runeheader');
let clicked = false;

$(document).ready(function() {
    $(runeheader).click(function() {
        const itemdata = $(this).data('header');

        runeinfo.forEach(rune => {
            const data = parseInt(rune.dataset.info);

            if (condition) {
                
            }
        });
    });
});

runeinfo.forEach(rune => {
    rune.classList.remove('runectn-show');
    rune.classList.add('runectn-hide');
});



