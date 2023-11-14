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
        const role = document.querySelector('#role');
        const roledesc = document.querySelector('#roledesc');
        role.innerHTML = data[3]["role-name"];
        roledesc.innerHTML = data[3]["role-desc"];


        // skill
        const pname = document.querySelector('#pname');
        const pdesc = document.querySelector('#pdesc');

        pname.innerHTML = data[4]["p-name"];
        pdesc.innerHTML = data[4]["p-desc"];

        const qname = document.querySelector('#qname');
        const qdesc = document.querySelector('#qdesc');
        qname.innerHTML = data[5]["q-name"];
        qdesc.innerHTML = data[5]["q-desc"];

        const wname = document.querySelector('#wname');
        const wdesc = document.querySelector('#wdesc');

        wname.innerHTML = data[6]["w-name"];
        wdesc.innerHTML = data[6]["w-desc"];

        const ename = document.querySelector('#ename');
        const edesc = document.querySelector('#edesc');

        ename.innerHTML = data[7]["e-name"];
        edesc.innerHTML = data[7]["e-desc"];

        const rname = document.querySelector('#rname');
        const rdesc = document.querySelector('#rdesc');

        rname.innerHTML = data[8]["r-name"];    
        rdesc.innerHTML = data[8]["r-desc"];

    })
    .catch(error => console.error(error));