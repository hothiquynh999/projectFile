document.addEventListener("DOMContentLoaded",function() {
    var menu = document.querySelectorAll('div.header');
    var menu = menu[0];
        //Truy xuất div menu
        var trangthai="duoi200";
    window.addEventListener("scroll",function(){
        var x = pageYOffset;
        if(x > 150){
            if(trangthai == "duoi200")
            {
                trangthai="tren200";
                menu.classList.add('menutora');
            }
        }
        else{
            if(trangthai=="tren200"){
            menu.classList.remove('menutora');
            trangthai="duoi200";}
        }
    
    })
})