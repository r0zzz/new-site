$(document).ready(function() {
    $(".cardctn a").click(function(e) {
        e.preventDefault();

        const champdata = $(this).data('champ');

        window.location.href = 'profile.html?data-champ=' + champdata;
    })
})