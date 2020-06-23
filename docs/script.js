window.onload = function () {
    [...document.querySelectorAll(".bin-option")].forEach(binOption => {
        binOption.onclick = () => {
            return (binOption.innerText == '1') ? binOption.innerText = '0' : binOption.innerText = '1';
        }
    });
    document.querySelector('#result').onanimationend = () => {
        result.style.animation = 'none';
    }
}

const rightSolution = [0, 0, 0, 1].map(val => val.toString());

function resultAnimate () {
    [...document.querySelectorAll('h1, p:not(#result)')].forEach(elem => {
        elem.style.display = 'none'
    });
    const result = document.querySelector('#result');
    result.style.animation = 'result-animate 1s ease-out .2s 1 forwards';
}

function compareLists (list1, list2) {
    for (let index in list1) {
        if (list1[index] !== list2[index]) {
            return false;
        }
    }
    return true;
}

document.querySelector('#try-table').onclick = () => {
    const inputsFromTable = [...document.querySelectorAll('.bin-option')];
    const solutionByUser = [];

    for (let inputFromTable of inputsFromTable) {
        solutionByUser.push(inputFromTable.innerHTML);
    }

    if (compareLists(rightSolution, solutionByUser)) {
        console.log('Você acertou!');
        document.querySelector('#result').innerText = "Você acertou 😁";
    } else {
        console.log('Você errou!');
        document.querySelector('#result').innerText = "Você errou! 😒";
    }

    resultAnimate ();
}