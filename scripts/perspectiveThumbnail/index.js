(function imageThumbnails() {
  let thumbnails = document.getElementsByClassName("thumbnail");
  let currentElement = document;

  function handleMove(moveEvent) {
    let rect = currentElement.getBoundingClientRect(),
        localMousePosX = moveEvent.clientX - rect.x,
        localMousePosY = moveEvent.clientY - rect.y;

    let yAngle = Math.floor(25 * ((localMousePosX - rect.width/2) / rect.width)) + 'deg';
    let xAngle = Math.floor(25 * ((localMousePosY - rect.height/2) / rect.height)) + 'deg';
        
    currentElement.style.transform = `rotateX(${xAngle}) rotateY(${yAngle})`;
  }
  
  for(let i = 0; i < thumbnails.length; i++) {
    (function(index) {
      thumbnails[i].onmouseover = (enterEvent) => {
        currentElement = enterEvent.currentTarget;
        document.addEventListener('mousemove', handleMove);
      }
      thumbnails[i].onmouseout = (exitEvent) => {
        document.removeEventListener('mousemove', handleMove);
        currentElement.style.removeProperty('transform');
        currentElement = document;
      }
    })(i);
  }
})();