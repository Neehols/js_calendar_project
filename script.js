let table = document.querySelector('tbody');
let i = document.querySelectorAll('i');
let maand = new Date().getMonth();
let content = "";
let maanden = ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];

i[0].addEventListener('click', () => {
    if(maand == 0) {
        maand = 11; 
        createCalender() 
    } else {
        maand--;
        createCalender()
    }
})

i[1].addEventListener('click', () => {
    if(maand == 11) {
        maand = 0;  
        createCalender()
    } else {
        maand++;
        createCalender()
    }
})

function createCalender() {
    document.querySelector('h1').textContent = maanden[maand];
    let firstDay = new Date(2019,maand,1).getDay() - 1;
    let daysInMonth = new Date(2019,maand+1,0).getDate();
    let date = 1;
    table.innerHTML = "";
    for(let i = 0; i < 6; i++) {
        content = "";
        for(let j = 0; j < 7; j++) {
            if (i == 0 && j < firstDay) {
                content += `<td></td>`;
            } else if (date > daysInMonth) {
                content += `<td></td>`;
            } else {
                content += `<td>${date}</td>`;
                date++;
            }
        }
        
        table.innerHTML += content;
    }
}

createCalender()