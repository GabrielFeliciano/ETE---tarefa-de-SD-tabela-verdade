window.onload = function () {
    [...document.querySelectorAll(".bin-option")].forEach(binOption => {
        binOption.onclick = () => {
            return (binOption.innerText == '1') ? binOption.innerText = '0' : binOption.innerText = '1';
        }
    });
}

const rightSolution = [0, 0, 0, 1].map(val => val.toString());

function compareLists (list1, list2) {
    for (let index in list1) {
        if (list1[index] !== list2[index]) {
            return false;
        }
    }
    return true;
}

document.querySelector('#try-table').onclick = () => {
    // function validate () {
    //     for (i = 0; i < binOptions.length; i += 2) {
    //         if (!(binOptions[i].innerHTML * binOptions[i+1].innerHTML)) {
    //             return false;
    //         }
    //         return true;
    //     }
    // }

    // const binOptions = [...document.querySelectorAll(".bin-option")];
    // if (validate()) {
    //     console.log('noce');
    // } else {
    //     console.log('oof');
    // }
    
    const inputsFromTable = [...document.querySelectorAll('.bin-option')];
    const solutionByUser = [];
    for (let inputFromTable of inputsFromTable) {
        solutionByUser.push(inputFromTable.innerHTML);
    }
    console.log(solutionByUser);
    if (compareLists(rightSolution, solutionByUser)) {
        console.log('Você acertou!');
    } else {
        console.log('Você errou!');
    }
    return null;
}