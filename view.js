//HIHG
const addHighBody = document.getElementById('high__body');
// HIHG(Enter)
const newTaskNameHigh = document.getElementById('add__text-high');
newTaskNameHigh.addEventListener('keydown', (e) => {
    let n = 4;
    if (e.key == "Enter") {
        addTask(newTaskNameHigh.value, DEFAULT_STATUS, PRIORITY.HIGH);
        addHighBody.insertAdjacentHTML('afterbegin',
            `<div class="high__task task"><input id="custom-checkbox${++n}" type="checkbox" class="task__checkbox"><label for="custom-checkbox${n}"></label><h5 class="task__name">
            ${newTaskNameHigh.value}
            </h5><input class="task__img" src="img/close-icon (1).svg" alt="del" id="del-task" type="image"></div>`
        )
    }
    // Удаляем задачу 
    const delTaskParent = document.querySelectorAll('.task');
    const delTaskChild = document.querySelectorAll('.task__img');
    for (let elementImg of delTaskChild) {
        function clickDelTask() {
            const parentElementImg = elementImg.closest('.task');
            parentElementImg.remove();
        }
        elementImg.addEventListener('click', clickDelTask);
    }
});
// HiGH (IMG)
const addNewTaskNameHigh = document.getElementById('add__new-text-high');
function clickHighImg() {
    addTask(newTaskNameHigh.value, DEFAULT_STATUS, PRIORITY.HIGH);
    let n = 4;
    addHighBody.insertAdjacentHTML('afterbegin',
        `<div class="high__task task"><input id="custom-checkbox${++n}" type="checkbox" class="task__checkbox"><label for="custom-checkbox${n}"></label><h5 class="task__name">
        ${newTaskNameHigh.value}
        </h5><input class="task__img" src="img/close-icon (1).svg" alt="del" id="del-task" type="image"></div>`
    )
    // Удаляем задачу 
    const delTaskParent = document.querySelectorAll('.task');
    const delTaskChild = document.querySelectorAll('.task__img');
    for (let elementImg of delTaskChild) {
        function clickDelTask() {
            const parentElementImg = elementImg.closest('.task');
            parentElementImg.remove();
        }
        elementImg.addEventListener('click', clickDelTask);
    }
}
addNewTaskNameHigh.addEventListener('click', clickHighImg);


// LOW
const addLowBody = document.getElementById('low__body');
// LOW (Enter)
const newTaskNameLow = document.getElementById('add__text-low');
newTaskNameLow.addEventListener('keydown', (e) => {
    let n = 4;
    if (e.key == "Enter") {
        addTask(newTaskNameLow.value, DEFAULT_STATUS, PRIORITY.LOW);
        addLowBody.insertAdjacentHTML('afterend',
            `<div class="low__task task"><input id="custom-checkbox${++n}" type="checkbox" class="task__checkbox"><label for="custom-checkbox${n}"></label><h5 class="task__name">
             ${newTaskNameLow.value}
            </h5><input class="task__img" src="img/close-icon (1).svg" alt="del" id="del-task" type="image"></div>`
        )
    }
    // Удаляем задачу 
    const delTaskParent = document.querySelectorAll('.task');
    const delTaskChild = document.querySelectorAll('.task__img');
    for (let elementImg of delTaskChild) {
        function clickDelTask() {
            const parentElementImg = elementImg.closest('.task');
            parentElementImg.remove();
        }
        elementImg.addEventListener('click', clickDelTask);
    }
});
// LOW (IMG)
const addNewTaskNameLow = document.getElementById('add__new-text-low');
function clickLowImg() {
    addTask(newTaskNameLow.value, DEFAULT_STATUS, PRIORITY.LOW);
    let n = 4;
    addLowBody.insertAdjacentHTML('afterend',
        `<div class="low__task task"><input id="custom-checkbox${++n}" type="checkbox" class="task__checkbox"><label for="custom-checkbox${n}"></label><h5 class="task__name">
        ${newTaskNameLow.value}
        </h5><input class="task__img" src="img/close-icon (1).svg" alt="del" id="del-task" type="image"></div>`
    )
    // Удаляем задачу 
    const delTaskParent = document.querySelectorAll('.task');
    const delTaskChild = document.querySelectorAll('.task__img');
    for (let elementImg of delTaskChild) {
        function clickDelTask() {
            const parentElementImg = elementImg.closest('.task');
            parentElementImg.remove();
        }
        elementImg.addEventListener('click', clickDelTask);
    }
}
addNewTaskNameLow.addEventListener('click', clickLowImg);
console.log(list);


// Работа с high__body

// Удаляем задачу 
// const delTaskParent = document.querySelectorAll('.task');
// const delTaskChild = document.querySelectorAll('.task__img');
// for (let elementImg of delTaskChild) {
//     function clickDelTask() {
//         const parentElementImg = elementImg.closest('.task');
//         parentElementImg.remove();
//     }
//     elementImg.addEventListener('click', clickDelTask);
// }


// мой на половину рабочий вариант
// const delTaskBody = document.querySelector('.high__body');
// function clickDelTask() {
//     const getElem = document.querySelector('.task__img')
//     const parentElement = getElem.closest('.high__task');
//     parentElement.remove();
// }

// delTaskBody.addEventListener('click', clickDelTask);


// const delTaskParent = document.querySelectorAll('.high__body');
// const delTaskChild = document.querySelector('.task__img')
// function clickDelTask() {
//     const parentElement = delTaskChild.closest('.high__task');
//     parentElement.remove();
// }
// delTaskChild.addEventListener('click', clickDelTask);

// вариант через перебор
// const delTaskParent = document.querySelectorAll('.task');
// const delTaskChild = document.querySelectorAll('.task__img');
// for (let elementImg of delTaskChild) {
//     function clickDelTask() {
//         const parentElementImg = elementImg.closest('.task');
//         parentElementImg.remove();
//     }
//     elementImg.addEventListener('click', clickDelTask);
// }

// function clickDelTask() {
//     const parentElement = delTaskChild.closest('.high__task');
//     parentElement.remove();
// }
// delTaskChild.addEventListener('click', clickDelTask);

// console.log(delTaskBody);

// Меняем статус задачи
const changeStatusTask = document.getElementById('custom-checkbox1');
// console.log(changeStatusTask);




// Добавляем новую задачу

// if (clickHighImg() !== undefined && clickHighImg() !== '' && clickHighImg() !== null) {
//     let n = 4;
//     addHighBody.insertAdjacentHTML('afterend',
//         `<div class="high__task task"><input id="custom-checkbox${++n}" type="checkbox" class="task__checkbox"><label for="custom-checkbox${n}"></label><h5 class="task__name">
//     ${clickHighImg()}
//     </h5><img class="task__img" src="img/close-icon (1).svg" alt="del"></div>`
//     )
// }

// ${list.push({ name: newName, status: newStatus, priority: newPriority })}



// функция для добавления текста из textarea в list и создания элемента html

// const addHighBody = document.getElementById('high__body');
// function addElement() {
//     let n = 4;
//     addHighBody.insertAdjacentHTML('afterend',
//         `<div class="high__task task"><input id="custom-checkbox${++n}" type="checkbox" class="task__checkbox"><label for="custom-checkbox${n}"></label><h5 class="task__name">
//     ${newTaskNameHigh.value}
//     </h5><img class="task__img" src="img/close-icon (1).svg" alt="del"></div>`
//     )
// }
// addNewTaskNameHigh.addEventListener('click', addElement);



// const newTaskNameHigh = document.getElementById('add__text-high');
// newTaskNameHigh.addEventListener('keydown', addNewTask);
// function addNewTask() {
//     // добавление при нажатии на enter текста из textarea в list
//     (e) => {
//         if (e.key == "Enter") {
//             addTask(newTaskNameHigh.value, DEFAULT_STATUS, PRIORITY.HIGH);
//         }
//     }
//     // создания элемента html с текстом этого нового значения
//     const addHighBody = document.getElementById('high__body');
//     if (newTaskNameHigh.value !== undefined && newTaskNameHigh.value !== '' && newTaskNameHigh.value !== null) {
//         let n = 4;
//         addHighBody.insertAdjacentHTML('afterend',
//             `<div class="high__task task"><input id="custom-checkbox${++n}" type="checkbox" class="task__checkbox"><label for="custom-checkbox${n}"></label><h5 class="task__name">
//     ${newTaskNameHigh.value}
//     </h5><img class="task__img" src="img/close-icon (1).svg" alt="del"></div>`
//         )
//     }
// }


// не верно
// const newTaskNameHigh = document.getElementById('add__text-high');
// newTaskNameHigh.addEventListener('keydown', addNewTask);
// function addNewTask() {
//     // добавление при нажатии на enter текста из textarea в list
//     (e) => {
//         switch (e.key) {
//             case "Enter":
//                 addTask(newTaskNameHigh.value, DEFAULT_STATUS, PRIORITY.HIGH);
//                 const addHighBody = document.getElementById('high__body');
//                 if (newTaskNameHigh.value !== undefined && newTaskNameHigh.value !== '' && newTaskNameHigh.value !== null) {
//                     let n = 4;
//                     addHighBody.insertAdjacentHTML('afterend',
//                         `<div class="high__task task"><input id="custom-checkbox${++n}" type="checkbox" class="task__checkbox"><label for="custom-checkbox${n}"></label><h5 class="task__name">
//                         ${newTaskNameHigh.value}
//                         </h5><img class="task__img" src="img/close-icon (1).svg" alt="del"></div>`
//                     )

//                     break;
//                 }
//         }
//     }
// }    