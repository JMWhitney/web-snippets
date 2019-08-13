(function initCursor() {
  var cursor = document.getElementById("cursor");
  let mouseX = 0,
    mouseY = 0,
    cursorX = 0,
    cursorY = 0,
    cursorWidth = cursor.offsetWidth,
    cursorHeight = cursor.offsetHeight;

  document.onmousemove = event => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  };

  function driftCursor() {
    cursorX += (mouseX - cursorX - cursorWidth / 2) / 16;
    cursorY += (mouseY - cursorY - cursorHeight / 2) / 16;
    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";
    window.requestAnimationFrame(driftCursor);
  }

  window.requestAnimationFrame(driftCursor);
})();