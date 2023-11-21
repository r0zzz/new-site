const skilltype = ["passive", "q", "w", "e", "ultimate"];

fetch('./json/aatrox.json') // chnage file name to whatever champion.js
    .then(response => { // fetch from external json
        return response.json(); // return json strings as js objects
    })
    .then(data => {
        console.log(data);

        // basic info
        const name = document.querySelector('#name');
        const title = document.querySelector('#title');
        const lore = document.querySelector('#lore');

        name.innerHTML = data[0].name;
        title.innerHTML = data[0].title;
        lore.innerHTML = data[0].lore;


        // stats
        const health = document.querySelector('#health');
        const healthregen = document.querySelector('#healthregen');
        const armor = document.querySelector('#armor');
        const magicresist = document.querySelector('#magicresistance');
        const movementspeed = document.querySelector('#movementspeed');

        health.innerHTML = data[1].health;
        healthregen.innerHTML = data[1]["health-regen"];
        armor.innerHTML = data[1].armor;
        magicresist.innerHTML = data[1]["magic-resist"];
        movementspeed.innerHTML = data[1]["movement-speed"];

        const resourcename = document.querySelector('#resourcename');
        const resource = document.querySelector('#resource');
        const resourceregenname = document.querySelector('#resourceregenname');
        const resourceregen = document.querySelector('#resourceregen');
        const attackdamage = document.querySelector('#attackdamage');
        const attackspeed = document.querySelector('#attackspeed');
        const attackrange = document.querySelector('#attackrange');

        resourcename.innerHTML = data[2]["resource-name"];
        resource.innerHTML = data[2].resource;
        resourceregenname.innerHTML = data[2]["resource-regen-name"];
        resourceregen.innerHTML = data[2]["resource-regen"];
        attackdamage.innerHTML = data[2]["attack-damage"];  
        attackspeed.innerHTML = data[2]["attack-speed"];
        attackrange.innerHTML = data[2]["attack-range"];


        // role
        const bgrole = document.querySelector('.champinfo');
        const role = document.querySelector('#role');
        const roledesc = document.querySelector('#roledesc');
        const roleicon = document.querySelector('#roleicon');
        bgrole.style.backgroundImage = url(data[3]["role-bg"]);
        role.innerHTML = data[3]["role-name"];
        roledesc.innerHTML = data[3]["role-desc"];
        roleicon.src = data[3]["role-icon"];


        // skill
        const btns = document.querySelectorAll('.skillbar button');
        const stype = document.querySelector('#stype');
        const preview = document.querySelectorAll('.preview')
        const sname = document.querySelector('#sname');
        const sdesc = document.querySelector('#sdesc');

        sname.innerHTML = data[4]["p-name"];
        stype.innerHTML = skilltype[0];
        sdesc.innerHTML = data[4]["p-desc"];

        preview.forEach(prev => {
            prev.classList.remove('preview-show');
            prev.classList.add('preview-hide');
        });

        for (let j = 0; j < btns.length; j++) {
            btns[j].addEventListener('click', filter);
        }

        function setActiveBtn(e) {
            btns.forEach(btn => {
                btn.classList.remove('button-clicked');
            });
            e.target.classList.add('button-clicked');
        }

        function filter(e) {

            setActiveBtn(e)
            
            preview.forEach(prev => {

                const previewdata = parseInt(prev.dataset.skill);
                const btnskill = parseInt(e.target.dataset.icon);
                
                switch (btnskill) {
                    case 1:
                        sname.innerHTML = data[4]["p-name"];
                        stype.innerHTML = skilltype[0];
                        sdesc.innerHTML = data[4]["p-desc"];
                        break;
                    case 2:
                        sname.innerHTML = data[5]["q-name"];
                        stype.innerHTML = skilltype[1];
                        sdesc.innerHTML = data[5]["q-desc"];
                        break;
                    case 3:
                        sname.innerHTML = data[6]["w-name"];
                        stype.innerHTML = skilltype[2];
                        sdesc.innerHTML = data[6]["w-desc"];
                        break;
                    case 4:
                        sname.innerHTML = data[7]["e-name"];
                        stype.innerHTML = skilltype[3];
                        sdesc.innerHTML = data[7]["e-desc"];
                        break;
                    case 5:
                        sname.innerHTML = data[8]["r-name"];
                        stype.innerHTML = skilltype[4];
                        sdesc.innerHTML = data[8]["r-desc"];
                        break;
                }

                if (previewdata === btnskill) {
                    prev.classList.remove('preview-hide');
                    prev.classList.add('preview-show');
                } else {
                    prev.classList.remove('preview-show');
                    prev.classList.add('preview-hide');
                }
            });
        }

        btns[0].classList.add('button-clicked');
        preview[0].classList.remove('preview-hide');
        preview[0].classList.add('preview.show')
    })
    .catch(error => console.error(error));