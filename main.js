$(document).ready(function(){
	 $(document).on('click','li', function(){
        $(this).toggleClass('done');   
      });

	   $('button').click(
            function(){
                var newItem = $('.newItem').val();
                 $('ul').append('<li>' + newItem + '</li>');
            });
});