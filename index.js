$(function(){
	$('#boton').on('click', function(){
		var enter = $('#entrada').val();
		if(enter !== ''){

			var element = $('<li></li>').text(enter);
			$(element).append("____<button class= 'rem'>X</button>");
			$('#mostrar').append(element);
			$('#entrada').val('');
			$('.rem').on('click', function(){
				$(this).parent().remove();
			});
		}else{
			alert('Ingrese un producto.')
		}
		
	})

});


