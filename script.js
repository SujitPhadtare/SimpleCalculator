let string = '';
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (event) => {
        const ev = event.target;
        console.log(ev.value)
        if (ev.value == 'AC') {
            string = '';
        } else if (ev.value == '=' || ) {
            string = eval(string);
        } else {
            string = string + ev.value;
        }
        document.querySelector('input').value = string;

    })
}) 