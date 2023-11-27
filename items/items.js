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

                $('#itemimg').attr("src", clickeditem.icon); // change image depending onthe clicked item
                $('#name').text(clickeditem.name); // name
                $('#desc').text(clickeditem.desc); // description
                $('#cost').text(clickeditem.cost); // cost

                const stats = document.querySelectorAll('.stat');
                const statval = document.querySelectorAll('.stat span');
                let statpos = 4;

                for (let i = 0; i < statval.length; i++) {
                    if (clickeditem[statpos + i] == 0) {
                        stats[i].classList.remove('stat-show');
                        stats[i].classList.add('stat-hide');
                    } else {
                        stats.classList.remove('stat-hide');
                        stats.classList.add('stat-show');
                        statval[i].textContent = clickeditem[statpos + i];
                    }
                }
            });
        });
    });
