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
    { name: "create a new practice", status: STATUS.IN_PROGRESS, priority: PRIORITY.HIGH },
    { name: "make a bed", status: STATUS.DONE, priority: PRIORITY.LOW },
    { name: "write a post", status: STATUS.TO_DO, priority: PRIORITY.LOW },
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


addTask('call home', 'done', 'HIGH');
addTask('Go to the gym', 'to do', 'low');
addTask('Go to work', 'to do', 'high');
addTask('Read a book', 'in progress', 'low');
addTask('takE out the trash', 'Done', 'hIGh');
changeStatus("make a bed", "to do")
changeStatus("Make a bed", "done")
changeStatus("reAD a bOOk", "donE")
deleteTask('write A post')
deleteTask('create a new practice')
deleteTask('go to work')
showList('To Do')
