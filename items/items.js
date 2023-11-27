fetch('starter.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);

        $(document).ready(function() {
            $(".item").click(function() {
                const itemdata = $(this).data('starter');
                const clickeditem = data[itemdata];
                
                console.log(clickeditem);

                $('#icon').attr("src", clickeditem.icon); // change image depending onthe clicked item
                $('#name').text(clickeditem.name); // name
                $('#desc').text(clickeditem.desc); // description
                $('#cost').text(clickeditem.cost); // cost


                const statname = [
                    "attack-damage", "attack-speed", "critical-strike-chance", "life-steal",
                    "armor-penetration", "lethality", "ability-power", "ability-haste",
                    "mana", "mana-regeneration", "heal-and-shield-power", "omnivamp",
                    "magic-penetration", "health", "health-regeneration", "armor", "magic-resistance"
                ];
                
                const stats = document.querySelectorAll('.stat');
                const statval = document.querySelectorAll('.stat span');
                const statpos = 4;

                for (let i = 0; i < statval.length; i++) {

                    if (clickeditem[statname[i]] == 0) {
                        $(stats[i]).hide();
                    } else {
                        $(stats[i]).show();
                        $(statval[i]).text(clickeditem[statname[i]]);
                    }
                }
            });
        });
    });
