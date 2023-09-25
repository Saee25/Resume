burger= document.querySelector('.burger')
fcontainer = document.querySelector('.fcontainer')
fcontainer2= document.querySelector('.fcontainer2')

burger.addEventListener('click',  ()=>{
fcontainer2.classList.toggle ('vclass-resp');
fcontainer.classList.toggle ('hnav-resp');
})