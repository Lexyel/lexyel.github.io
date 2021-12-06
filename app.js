/*fleches menus*/

const items = document.querySelectorAll('.item-menu')

items.forEach(item=> {
    item.addEventListener('click', function(){

        for(i = 0; i < items.length; i++) {
            items[i].classList.remove('active');
        }
        this.classList.add('active');
    })
})



/*changement a propos */
const button= document.querySelector('.buttonCV');
const me= document.querySelector('.me');
const retour = document.querySelector('.retour');
const cV= document.querySelector('.cv');
const presentation= document.querySelector('.presentation')

function activeClasse(){
    me.classList.add('active');
    cV.classList.remove('desactive');
    presentation.classList.add('desactive');
}

button.addEventListener('click', activeClasse);

function desactiveClasse(){
    me.classList.remove('active')
    presentation.classList.remove('desactive');
    cV.classList.add('desactive');
}

retour.addEventListener('click', desactiveClasse)

/*Changement item CV*/


const itemsCV = document.querySelectorAll('.item-cv')

itemsCV.forEach(itemCV=> {
    itemCV.addEventListener('click', function(){

        for(i = 0; i < itemsCV.length; i++) {
            itemsCV[i].classList.remove('active');
        }
        this.classList.add('active');
    })
})