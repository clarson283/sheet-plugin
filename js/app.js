$(document).ready(function() {

   $('span').on('click', function(e) {
      e.preventDefault();

      $(this).createSheet({
         text        : 'hello worlddddd',
         color       : '#005dff',
         fontStyle   : 'italic'
      });
   });

});