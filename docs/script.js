const rightSolution = [0, 0, 0, 1].map(val => val.toString());

function compareLists (list1, list2) {
    for (let index in list1) {
        if (list1[index] !== list2[index]) {
            return false
        }
    }
    return true;
}

document.querySelector('#try-table').onclick = () => {
    const inputsFromTable = [...document.querySelectorAll('#binary-table input')];
    const solutionByUser = [];
    for (let inputFromTable of inputsFromTable) {
        solutionByUser.push(inputFromTable.value);
    }
    console.log(solutionByUser)
    if (solutionByUser.every(val => (val == '1' || val == '0')) && solutionByUser.length == 4) {
        if (compareLists(rightSolution, solutionByUser)) {
            console.log('Você acertou!');
        } else {
            console.log('Você errou!');
        }
    } else {
        console.log('Valores Inválido')
    }
    return null;
}