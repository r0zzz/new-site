const btns = document.querySelectorAll('.skillbar button');
const skills = document.querySelectorAll('.skill');

for (let i = 1; i < skills.length; i++) {
    skills[i].classList.add('skill-hide');    
}

for (let j = 0; j < btns.length; j++) {
    // use array to store all btns
    btns[j].addEventListener('click', filter);
}

function setActiveBtn(e) {
    // remove clicked state for all btns using foreach loop(every single element under the array 'btns')
    btns.forEach(btn => {
        btn.classList.remove('button-clicked');
    });

    // set clicked btn style to clicked btn using e.target(event.target), targets btn that has event
    e.target.classList.add('button-clicked');
}

function filter(e) {

    setActiveBtn(e)
    
    skills.forEach(skill => {

        skill.classList.remove('skill-hide');
        skill.classList.add('skill-show');

        const skillcontent = parseInt(skill.dataset.skill);
        const btnskill = parseInt(e.target.dataset.icon);

        if (skillcontent != btnskill) {
            skill.classList.remove('skill-show');
            skill.classList.add('skill-hide');
        }
    });
}

btns[0].classList.add('button-clicked');