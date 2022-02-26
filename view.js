const STATUS = {
    TO_DO: "to do",
    DONE: "done",
    IN_PROGRESS: "in progress",
}
const DEFAULT_STATUS = STATUS.TO_DO;
const PRIORITY = {
    HIGH: "high",
    LOW: "low",
}
const DEFAULT_PRIORITY = PRIORITY.LOW;


const list = [
    { name: "Вот вам и супер интересная тема. Вы наверняка заметили что ваши файлы с кодом становятся все объемнее, что хочется вынести некоторые вещи куда-то за пределы основной программы.", status: STATUS.DONE, priority: PRIORITY.HIGH },
    { name: "Сверстать этот TODO list", status: STATUS.DONE, priority: PRIORITY.HIGH },
    { name: "Начать делать задачу", status: STATUS.TO_DO, priority: PRIORITY.HIGH },
    { name: "Посмотреть ютубчик.", status: STATUS.DONE, priority: PRIORITY.LOW },
]


function addTask(newName, newStatus = DEFAULT_STATUS, newPriority = DEFAULT_PRIORITY) {
    newName = newName.toLowerCase();
    newStatus = newStatus.toLowerCase();
    newPriority = newPriority.toLowerCase();

    list.push({ name: newName, status: newStatus, priority: newPriority })
}

function changeStatus(name, newStatus) {
    name = name.toLowerCase();
    newStatus = newStatus.toLowerCase();

    let findStatus = list.findIndex(item => item.name === name);
    list[findStatus].status = newStatus;
}

function deleteTask(name) {
    name = name.toLowerCase();

    let findDeleteName = list.findIndex(item => item.name === name);
    list.splice(findDeleteName, 1);
}

function showList(choiceShow = DEFAULT_STATUS) {
    choiceShow = choiceShow.toLowerCase();

    console.log(`${STATUS.TO_DO}:`);
    for (let listItem of list) {
        console.log(`\t${listItem.name}`);
    }

    let resultStatus = choiceShow === STATUS.TO_DO || choiceShow === STATUS.IN_PROGRESS || choiceShow === STATUS.DONE;
    let resultBy = choiceShow === PRIORITY.HIGH || choiceShow === PRIORITY.LOW;

    if (resultStatus) {
        function showStatus() {
            console.log(`${STATUS.IN_PROGRESS}:`);
            for (let listItem of list) {
                if (listItem.status !== STATUS.DONE) {
                    console.log(`\t${listItem.name}`);
                }
            }
            console.log(`${STATUS.DONE}:`);
            for (let listItem of list) {
                if (listItem.status === STATUS.DONE) {
                    console.log(`\t${listItem.name}`);
                }
            }
        }
        showStatus()

    } else if (resultBy) {
        function showBy() {
            console.log(`${PRIORITY.HIGH}:`);
            for (listItem of list) {
                if (listItem.priority === PRIORITY.HIGH) {
                    console.log(`\t${listItem.name}`);
                }
            }
            console.log(`${PRIORITY.LOW}:`);
            for (listItem of list) {
                if (listItem.priority === PRIORITY.LOW) {
                    console.log(`\t${listItem.name}`);
                }
            }
        }
        showBy()

    } else
        console.log('ERROR!');
}

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
