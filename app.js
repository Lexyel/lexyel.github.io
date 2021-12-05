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
