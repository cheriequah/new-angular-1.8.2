let minusbtn = document.getElementById("minus_btn");
let addbtn = document.getElementById("add_btn");
let ticketcounter = document.getElementById("ticket_count");
let count = 0;

minusbtn.addEventListener('click', ()=>{
    if (count > 0){
        count --;
        ticketcounter.innerHTML = count;
    }
})

addbtn.addEventListener('click', ()=>{
    if (count < 100){
        count ++;
        ticketcounter.innerHTML = count;
    }
})