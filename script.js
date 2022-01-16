const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)


checkBoxes();

function checkBoxes(){
    const triggerBottom = (window.innerHeight/5) * 4

    // dividing the innerheight by 5 parts , taking 4 part as bottom line
boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top
    //describe a size and position of rectangle relative to screen

    if(boxTop < triggerBottom){
        box.classList.add('show')

    }
    else{
        box.classList.remove('show')
    }
})

}