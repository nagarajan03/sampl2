/**
 * @author Administrator
 */

$(document).ready(function(){
var $var            = $('input[type="checkbox"]'),
    height          = $('.top-header').height(),
    windowHeight    = $(window).height(),
    $mailContainer  = $('.message-box-container');
$.each($var, function(index,val){
	$('<div class="checkbox" data-index="'+index+'"> </div>').insertAfter(val);
});

$mailContainer.css({'height':(windowHeight-height)+'px','overflow-y':'scroll','overflow-x':'hidden'});

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
$mailContainer.scroll(function(){
	var scrolTop   = $mailContainer.scrollTop(),
	    $body      = $('body');
	if(scrolTop >= 100){
		$body.addClass('scorll');
	}else{
		$body.removeClass('scorll');
	}
});

});

