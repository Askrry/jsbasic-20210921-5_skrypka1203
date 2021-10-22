function toggleText() {

  const btn1 = document.querySelector('.toggle-text-button');

  btn1.onclick = function() {
  
    const showText = document.querySelector('#text');
  
    showText.hidden = true;

    btn1.onclick = function() {
  
      const showText = document.querySelector('#text');
    
      showText.hidden = false;
    };
  };
}
