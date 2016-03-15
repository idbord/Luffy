/**
 * Created by idbord on 3/14/16.
 */
var set_doms_display = function(arr, attr){
    for(var i= 0, len=arr.length; i<len; i++){
        arr[i].style.display = attr;
    }
};

var set_doms_hidden = function(arr){
    for(var i= 0, len=arr.length; i<len; i++){
        arr[i].classList.remove("showing");
        arr[i].classList.add("hidden");
    }
};

(function(){
    //重复的代码，好恶心。。。回头再想想更好的解决办法
    var switch_menu = document.getElementById("switch-menu");
    var menu_to_show = document.getElementsByClassName("menu-to-show");
    switch_menu.onmouseover = function(){
        set_doms_display(menu_to_show, "block");
    };
    switch_menu.onmouseout = function(){
        set_doms_display(menu_to_show, "none");
    };
    menu_to_show[0].onmouseover = function(){
        set_doms_display(menu_to_show, "block");
    };
    menu_to_show[1].onmouseover = function(){
        set_doms_display(menu_to_show, "block");
    };
    menu_to_show[1].onmouseout = function(){
        set_doms_display(menu_to_show, "none");
    };

    var menu_items = menu_to_show[1].getElementsByTagName('li'),
        content_wrapper = document.getElementsByClassName("content-wrapper"),
        nav = document.getElementById("nav"),
        categories = document.getElementById("categories"),
        tags = document.getElementById("tags"),
        about = document.getElementById("about");

    menu_items[0].onclick = function(){
        set_doms_hidden(content_wrapper);
        nav.classList.remove("hidden");
        nav.classList.add("showing");
        set_doms_display(menu_to_show, "none");
    };
    menu_items[1].onclick = function(){
        set_doms_hidden(content_wrapper);
        categories.classList.remove("hidden");
        categories.classList.add("showing");
        set_doms_display(menu_to_show, "none");
    };
    menu_items[2].onclick = function(){
        set_doms_hidden(content_wrapper);
        tags.classList.remove("hidden");
        tags.classList.add("showing");
        set_doms_display(menu_to_show, "none");
    };
    menu_items[3].onclick = function(){
        set_doms_hidden(content_wrapper);
        about.classList.remove("hidden");
        about.classList.add("showing");
        set_doms_display(menu_to_show, "none");
    };
})();