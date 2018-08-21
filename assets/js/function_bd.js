$(function(){

	// Cadastrar clientes
	$.post( 'cadastrar.php' ).done( function(resposta){
        
        var el_name = $(this).val();
        var el_cpf = $(this).val();
        var el_email = $(this).val();
        var el_phone[] = $(this).val();
        var status = $(this).val();
        
		$( '#form-edit-client' ).html( resposta );
	});

	// Editar registro de cliente
	$.post( 'edit.php' ).done( function(resposta){
        
        var el_name = $(this).val();
        var el_cpf = $(this).val();
        var el_email = $(this).val();
        var el_phone[] = $(this).val();
        var status = $(this).val();
    
		$( '#form-edit-client' ).html( resposta );
	});
	
	// Excluir registro	
	$.post( 'delete.php' ).done( function(resposta){
        
        var el_name = $(this).val();
        
		$( '#form-edit-client' ).html( resposta );
	});
})
