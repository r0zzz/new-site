fetch('starter.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);

        $(document).ready(function() {
            $(".item").click(function() {

                $(".item").removeClass("item-clicked");
                $(this).addClass("item-clicked");

                const itemdata = $(this).data('starter');
                const clickeditem = data[itemdata];

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


fetch('basic.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);

        $(document).ready(function() {
            $(".item").click(function() {

                $(".item").removeClass("item-clicked");
                $(this).addClass("item-clicked");

                const itemdata = $(this).data('basic');
                const clickeditem = data[itemdata];

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

fetch('epic.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);

        $(document).ready(function() {
            
            $(".item").removeClass("item-clicked");
            $(this).addClass("item-clicked");

            $(".item").click(function() {
                const itemdata = $(this).data('basic');
                const clickeditem = data[itemdata];

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

fetch('legendary.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);

        $(document).ready(function() {
            $(".item").click(function() {
                
                $(".item").removeClass("item-clicked");
                $(this).addClass("item-clicked");

                const itemdata = $(this).data('basic');
                const clickeditem = data[itemdata];

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

fetch('mythic.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);

        $(document).ready(function() {
            $(".item").click(function() {
                
                $(".item").removeClass("item-clicked");
                $(this).addClass("item-clicked");

                const itemdata = $(this).data('basic');
                const clickeditem = data[itemdata];

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