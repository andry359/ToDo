// function funcStr(str) {
//     let isNotValue = str === undefined || str === " " || str === "";
//     if (!isNotValue) {
//         str = str[0].toUpperCase() + str.slice(1).toLowerCase();
//         console.log(str);
//     }
// }
// funcStr("вася");
// funcStr("пЕТЯ");
// funcStr("");
// funcStr('иВАн');
// funcStr();
// funcStr(' ');

function checkSpam(str) {
    str = str.toLowerCase();
    if (str.includes('viagra') || str.includes('xxx')) {
        console.log(true);
    } else {
        console.log(false);
    }
}
checkSpam('vIaGrA');
checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");
checkSpam("")

function truncate(str, maxlengeth) {
    if (str.lenge)    
}
let num;
num.length 