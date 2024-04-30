const serviceDiv = document.querySelectorAll('.service');

serviceDiv.forEach(div =>{
    div.addEventListener('mouseover',()=>{
        div.lastElementChild.classList.add('hovered');
        div.lastElementChild.setAttribute('title', 'Start Now');
    })
    
    div.addEventListener('mouseout',()=>{
        div.lastElementChild.classList.remove('hovered');
    })
})