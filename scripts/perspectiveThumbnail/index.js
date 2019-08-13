(function imageThumbnails() {
  let thumbnails = document.getElementsByClassName("thumbnail");
  console.log(thumbnails);
  
  for(let i = 0; i < thumbnails.length; i++) {

    let currentElement = document;

    function handleMove(moveEvent) {
      moveEvent.stopPropagation();
      let rect = currentElement.getBoundingClientRect(),
          localMousePosX = moveEvent.clientX - rect.x,
          localMousePosY = moveEvent.clientY - rect.y;

      let xAngle = Math.floor(25 * (localMousePosX / rect.width)) + 'deg';
      let yAngle = Math.floor(25 * (localMousePosX / rect.height)) + 'deg';
      console.log(`rotateX(${xAngle}) rotateY(${yAngle})`);
          
      currentElement.style.transform = `rotateX(${xAngle}) rotateY(${yAngle})`;
      console.log(currentElement.style.transform);
    }

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