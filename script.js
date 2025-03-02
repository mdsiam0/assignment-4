// main date set

function realDate() {
    const time = new Date();
    const weekdayElement = document.getElementById('weekday');
    const dateElement = document.getElementById('date');
    const weekdayOptions = { weekday: 'short'};
    const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};
    weekdayElement.innerText = time.toLocaleDateString(undefined, weekdayOptions);
    dateElement.innerText = time.toLocaleDateString(undefined, dateOptions);
}
realDate();

// button code

// card-1



document.getElementById('shop-ease-btn')
.addEventListener('click', function() {
    alert('Board Updated Successfully');
    const shopEaseCompletd = document.getElementById('shop-ease-btn');
    shopEaseCompletd.disabled = true;
    if(shopEaseCompletd.disabled) {
        shopEaseCompletd.style.opacity ='0.1';
    }
    const tastCounts = document.getElementById('task-number').innerText;
    const tastCount = parseInt(tastCounts);
    const sub = tastCount - 1;
    if(tastCount === 1 ){
        alert('congrate You have completed all the current task')
    }
    document.getElementById('task-number').innerText = sub;
    const navNums = document.getElementById('nav-number').innerText;
    const navNum = parseInt(navNums);
    const sum = navNum + 1;
    document.getElementById('nav-number').innerText = sum;
    
     
    const now = new Date();
    const time = now.toLocaleTimeString();
    
    const problemText = document.getElementById('task-one').innerText;
   
    const historyText = document.createElement('p');

    historyText.innerText = `You have Complete The Task ${problemText} at ${time}`;

    
    document.getElementById('log-history').appendChild(historyText);

    historyText.className = 'history-p';

})


document.getElementById('clear-history').addEventListener('click', function(){
    document.getElementById('log-history').innerHTML = '';
})

const body = document.body;
function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        
    }
    return color;
    
}

document.getElementById('theme-change-btn').addEventListener('click', function() {
    body.style.backgroundColor = randomColor();
});


