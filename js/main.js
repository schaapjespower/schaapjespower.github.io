const button = document.querySelector('.theme-switcher');

button.addEventListener('click', function(){
    if (localStorage.getItem('Theme') === "dark-theme"){
        localStorage.setItem('Theme', "light-theme");
        document.documentElement.className = localStorage.getItem('Theme');
        button.textContent = "Mode: Light";

    }else{
        localStorage.setItem('Theme', "dark-theme");
        document.documentElement.className = localStorage.getItem('Theme');
        button.textContent = "Mode: Dark";
    }
});

document.documentElement.className = localStorage.getItem('Theme')