// get all elements using querySelector all; (classname, tag)
const btns = document.querySelectorAll('.btns button'); // calls all <button> under the .btnctn class
const cards = document.querySelectorAll('.item'); // call all .card class
const rolename = ["ASSASSIN", "FIGHTER", "MAGE", "MARKSMAN", "SUPPORT", "TANK"];


// add click event to btns by iterating on each of them
for (let i = 1; i < btns.length; i++) {
    // use array to store all btns
    btns[i].addEventListener('click', filter);
}

//set style for clicked btn
function setActiveBtn(e) {
    // remove clicked state for all btns using foreach loop(every single element under the array 'btns')
    btns.forEach(btn => {
        btn.classList.remove('button-clicked');
    });

    // set clicked btn style to clicked btn using e.target(event.target), targets btn that has event
    e.target.classList.add('button-clicked');
}

// filter functions; display or hide elements
function filter(e) {
    // check the state of the buttons to determine what is clicked and not
    setActiveBtn(e)

    // loop through all the .class
    cards.forEach(card => {
        // remove style for hiding elements
        /*=> variable name*/card.classList.remove('card-hide'); // classList refers to the CSS selcetors; meaning, refer to the css file and not html
        // set style for showing elements
        card.classList.add('card-show');
        // get data from data attributes; data-btn/img = "1"
        // get img data using parseInt; (variable name. dataset to access data. data=n, where n is the data type e.g data-p)
        const role = parseInt(card.dataset.role);
        // get btn data of the clicked btn
        const btnrole= parseInt(e.target.dataset.btn);

        // check if the btnType and filterType have the same data values
        if (role != btnrole) {
            card.classList.remove('card-show');
            card.classList.add('card-hide');
        }
    });
}

btns[0].classList.add('button-clicked');
// show all button function
btns[0].addEventListener('click', (e) => {
    // run active btns function
    setActiveBtn(e);

    // iterate through each .card
    cards.forEach(card => {
        //show all elements
        card.classList.remove('card-hide');
        card.classList.add('card-show');
    });
})