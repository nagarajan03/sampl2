/**
 * @author Administrator
 */

$(document).ready(function(){
var $var = $('input[type="checkbox"]');
$.each($var, function(index,val){
	$('<div class="checkbox" data-index="'+index+'"> </div>').insertAfter(val);
});


$('.checkbox').click(function(){
	var indexVal = $(this).data('index');
	$(this).toggleClass('checked');
	if($var.eq(indexVal).prop('checked')){
		$var.eq(indexVal).prop('checked',false );
		$var.eq(indexVal).parent().parent().removeClass('selected');
	}else{
		$var.eq(indexVal).prop('checked',true);
		$var.eq(indexVal).parent().parent().addClass('selected');
	}
});

});

