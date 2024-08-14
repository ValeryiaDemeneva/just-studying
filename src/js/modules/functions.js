/* Проверка поддержки webp, добавление класса vebp или 'no-webp для HTML */ 
export function isWebp () {
   // Проверка поддержки webP
   function testWebP(callback) {
   let webP = new Image();
   webP.onload = webP.onerror = function () {
   callback(webP.height == 2);
   };
     webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  //добавление класса vebp или no-webp для HTML
    testWebP(function (support) {
      let className = support === true ? 'webP': 'no-webP';
      document.documentElement.classList.add(className);
    });
   }