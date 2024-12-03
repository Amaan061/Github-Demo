let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');  

let string = "";

let arr = Array.from(buttons);
arr.forEach(button => {
   button.addEventListener('click', (e) => {
      if (e.target.innerHTML == '=') {
         string = eval(string);  // Evaluate the expression
         input.value = string;
      } 
      else if (e.target.innerHTML == 'AC') {
         string = "";  // Clear input
         input.value = string;
      } 
      else if (e.target.innerHTML == 'DEL') {
         string = string.substring(0, string.length - 1);  // Delete last character
         input.value = string;
      } 
      else {
         string += e.target.innerHTML;  
         input.value = string;
      }
   });
});
