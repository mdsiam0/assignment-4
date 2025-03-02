document.getElementById('glassdoar-btn')
.addEventListener('click', function() {
    alert('Board Updated Successfully');
    const shopEaseCompletd = document.getElementById('glassdoar-btn');
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
    
    const problemText = document.getElementById('task-six').innerText;
   
    const historyText = document.createElement('p');

    historyText.innerText = `You have Complete The Task ${problemText} at ${time}`;

    
    document.getElementById('log-history').appendChild(historyText);

    historyText.className = 'history-p';

})


document.getElementById('clear-history').addEventListener('click', function(){
    document.getElementById('log-history').innerHTML = '';
})
