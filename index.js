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
// const btn =  document.querySelector('#boton');
// const input = document.querySelector('#entrada');

// btn.addEventListener('click', ()=>{
// 	if(input.value == ''){
// 		alert('Ingrese un producto.')
// 	}
// })

