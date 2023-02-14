
document.getElementById("bold").addEventListener("click", function () {
  getElementsById("textarea", "fw-bold");
});

document.getElementById("italic").addEventListener("click", function () {
  getElementsById("textarea", "fst-italic");
});

document.getElementById("underline").addEventListener("click", function () {
  getElementsById("textarea", "u");
});

document.getElementById("left-text").addEventListener("click", function () {
  forTextAlign("textarea", "left");
});

document.getElementById("center-text").addEventListener("click", function () {
  forTextAlign("textarea", "center");
});

document.getElementById("right-text").addEventListener("click", function () {
  forTextAlign("textarea", "right");
});

document.getElementById('fontSize').addEventListener('input', function(){
    document.getElementById('textarea').style.fontSize = parseFloat(document.getElementById('fontSize').value) + 'px';
})

document.getElementById('text-case').addEventListener('click', function(){
    getElementsById('textarea', 'textCase')
})

document.getElementById('text-case2').addEventListener('click', function(){
    getElementsById('textarea', 'textCase2')
})

document.getElementById('text-color').addEventListener('input', function(){
    document.getElementById('textarea').style.color = this.value;
})