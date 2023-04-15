const task3Element = document.getElementById('task-3');

function one() {
    alert('Ladybug')
}
// one();

function two(name) {
    // alert(name)
}
two('Ladybug Mecca');

// task3Element.addEventListener('click', one)

function three(one, two, three) {
    // alert(one +', '+ two +', and '+three + ' are amazing and talented sisters.')
     const ladies = `${one}, ${two}, and ${three}, are three amazingly talented sisters.`;
     return ladies;
}
alert(three('Erykah', 'Ladybug', 'Lauryn'))

