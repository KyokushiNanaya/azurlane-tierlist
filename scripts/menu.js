function changeDisplay(dataPara) {

    const buttonArrayElement = document.querySelector('[data-paramButton]');
    var buttonArray = buttonArrayElement.getAttribute('data-paramButton'); //a array for storing all the buttons clicked
    buttonArray = buttonArray.split(',');

    
    if (buttonArray.includes(dataPara)) {
        const index = buttonArray.indexOf(dataPara);
        if (index > -1) { // only splice array when item is found
            buttonArray.splice(index, 1); // 2nd parameter means remove one item only
        }
        buttonArrayElement.setAttribute("data-paramButton", buttonArray.toString());
    } else {
        buttonArray.push(dataPara);
        buttonArrayElement.setAttribute("data-paramButton", buttonArray.toString());
    }

    //button change appearence
    const buttonElement = document.querySelector('[data-option="' + dataPara + '"]');
    if (buttonElement.classList.contains("selected")) {
        buttonElement.classList.remove("selected");
    } else {
        buttonElement.classList.add("selected");
    }


    var partsArray = dataPara.split('|');
    const allCards = document.querySelectorAll('[data-param' + partsArray[0] + '="' + partsArray[1] + '"]');
    allCards.forEach((userItem) => {
        let dP5 = userItem.getAttribute('data-param6');
        dp5Array = dP5.split(',');
        if (dp5Array.includes(dataPara)) {
            const index = dp5Array.indexOf(dataPara);
            if (index > -1) { // only splice array when item is found
                dp5Array.splice(index, 1); // 2nd parameter means remove one item only
            }
            userItem.setAttribute("data-param6", dp5Array.toString());
        } else {
            dp5Array.push(dataPara);
            userItem.setAttribute("data-param6", dp5Array.toString());
        }
        if (dp5Array.length >= 2 && arrayEquals(dp5Array, buttonArray)) {
            userItem.style.display = "";
        } else {
            userItem.style.display = "none";
        }
    });
    const allActiveCards = document.querySelectorAll('[class="jntj-1 divsort"][style]');
    allActiveCards.forEach((userItem) =>{
        let dP5 = userItem.getAttribute('data-param6');
        dp5Array = dP5.split(',');
        if (dp5Array.length >= 2 && arrayEquals(dp5Array, buttonArray)) {
            userItem.style.display = "";
        } else {
            userItem.style.display = "none";
        }
    })
}


function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}