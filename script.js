
// open ContextMenu
function showContextMenu(e) {

    //
    e.preventDefault();

    //
    var menu = e.currentTarget.querySelector('menu');
    var top = e.pageY  
    var left = e.pageX -30
    
    //
    menu.style = `
    display: inline-block;
    position: absolute;
    top: ${top}px;
    left: ${left}px
    `;

}

// close ContextMenu
document.querySelector('html').onclick = function() {
    document.querySelector('.contextmenu').style = "display: none"
}