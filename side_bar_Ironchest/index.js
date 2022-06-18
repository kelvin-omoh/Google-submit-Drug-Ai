const container = document.querySelector('.container');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => { 
    container.classList.toggle('open');
})

// code for each icon color

const list = document.querySelectorAll('.list');
function activeList () { 
    list.forEach((item) => 
        item.classList.remove('active'));
        this.classList.add('active'); 
}

list.forEach((item) => 
    item.addEventListener('click', activeList)
)