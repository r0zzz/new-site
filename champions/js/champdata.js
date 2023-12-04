const skilltype = ["passive", "q", "w", "e", "ultimate"];

// file path to dynamically change contend depending on what card was clicked on the previous webpage
const dataarray = ["aatrox.json", "akali.json", "akshan.json"];

let file = "./json/"+ dataarray[0]; // call file based on the passed value

fetch(file)
    .then(response => { // fetch from external json
        return response.json(); // return json strings as js objects
    })
    .then(data => {
        console.log(data);

        let webpagetitle = data[0].name + ", " + data[0].title;

        // webpage title
        document.title = webpagetitle;

        // splash and bg image
        const bgsplash = document.querySelector('.splash');
        const mainsplash = document.querySelector('.mainsplash');

        bgsplash.style.backgroundImage = 'linear-gradient(to bottom, transparent, #010A13 92.5%), url('+ data[0].bg +')';
        mainsplash.style.backgroundImage = 'linear-gradient(to bottom, transparent, #010A13 92.5%), url('+ data[0].splash +')'; 

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
        const bgrole = document.getElementById("champinfo");
        const role = document.querySelector('#role');
        const roledesc = document.querySelector('#roledesc');
        const roleicon = document.querySelector('#roleicon');
        role.innerHTML = data[3]["role-name"];
        roledesc.innerHTML = data[3]["role-desc"];
        roleicon.src = data[3]["role-icon"];
        bgrole.style.backgroundImage = 'url('+ data[3]["role-bg"] +')';


        // skill
        const btns = document.querySelectorAll('.skillbar button');
        const stype = document.querySelector('#stype');
        const preview = document.querySelector('.preview video');
        const sname = document.querySelector('#sname');
        const sdesc = document.querySelector('#sdesc');

        btns[0].style.backgroundImage = 'url('+ data[4]["p-icon"] +')';
        btns[1].style.backgroundImage = 'url('+ data[5]["q-icon"] +')';
        btns[2].style.backgroundImage = 'url('+ data[6]["w-icon"] +')';
        btns[3].style.backgroundImage = 'url('+ data[7]["e-icon"] +')';
        btns[4].style.backgroundImage = 'url('+ data[8]["r-icon"] +')';


        sname.innerHTML = data[4]["p-name"];
        stype.innerHTML = skilltype[0];
        sdesc.innerHTML = data[4]["p-desc"];


        for (let j = 0; j < btns.length; j++) {
            btns[j].addEventListener('click', filter);
        }

        function setActiveBtn(e) {
            btns.forEach(btn => {
                btn.classList.remove('button-clicked');
            });
            e.target.classList.add('button-clicked');
        }

        //change content depending on btn clicked
        function filter(e) {

            setActiveBtn(e)
            
            btns.forEach(btn => {

                const btnskill = parseInt(e.target.dataset.icon);
                
                switch (btnskill) {
                    case 1:
                        sname.innerHTML = data[4]["p-name"];
                        stype.innerHTML = skilltype[0];
                        sdesc.innerHTML = data[4]["p-desc"];
                        preview.src = data[4]["p-vid"];
                        break;
                    case 2:
                        sname.innerHTML = data[5]["q-name"];
                        stype.innerHTML = skilltype[1];
                        sdesc.innerHTML = data[5]["q-desc"];
                        preview.src = data[5]["q-vid"];
                        break;
                    case 3:
                        sname.innerHTML = data[6]["w-name"];
                        stype.innerHTML = skilltype[2];
                        sdesc.innerHTML = data[6]["w-desc"];
                        preview.src = data[6]["w-vid"];
                        break;
                    case 4:
                        sname.innerHTML = data[7]["e-name"];
                        stype.innerHTML = skilltype[3];
                        sdesc.innerHTML = data[7]["e-desc"];
                        preview.src = data[7]["e-vid"];
                        break;
                    case 5:
                        sname.innerHTML = data[8]["r-name"];
                        stype.innerHTML = skilltype[4];
                        sdesc.innerHTML = data[8]["r-desc"];
                        preview.src = data[8]["r-vid"];
                        break;
                }
            });
        }

        btns[0].classList.add('button-clicked');
        preview.src = data[4]["p-vid"];
    })
    .catch(error => console.error(error));