document.getElementById("bold").addEventListener("click", function () {
  getElementsById('textarea', 'fw-bold');
});

document.getElementById("italic").addEventListener("click", function () {
    getElementsById('textarea', 'fst-italic');
  });

document.getElementById("underline").addEventListener("click", function () {
    getElementsById('textarea', 'u');
  });

document.getElementById("left-text").addEventListener('click', function(){
    forTextAlign ('textarea', 'left');
})

document.getElementById("center-text").addEventListener('click', function(){
    forTextAlign ('textarea', 'center');
})

document.getElementById("right-text").addEventListener('click', function(){
    forTextAlign ('textarea', 'right');
})
