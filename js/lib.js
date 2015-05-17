/**
 * @author Administrator
 */

$(document).ready(function(){
var $var            = $('input[type="checkbox"]'),
    height          = $('.top-header').height(),
    windowHeight    = $(window).height(),
    $mailContainer  = $('.message-box-container'),
    $selectAll      = null;
$.each($var, function(index,val){
	var className = $(this).attr('class'),
	    idName    = $(this).attr('id');
	    className = (className === undefined)? '':className;
	    idName    = (idName === undefined)?'':idName;
	$('<div class="checkbox '+className+'" data-index="'+index+'" id="'+idName+'"> </div>').insertAfter(val);
});
$selectAll      = $('.selectall');
$mailContainer.css({'height':(windowHeight-56)+'px','overflow-y':'scroll','overflow-x':'hidden'});

$('.checkbox').click(function(){
	var indexVal = $(this).data('index'),count;
	$(this).toggleClass('checked');
	count = $('.checked').size();
	if($var.eq(indexVal).prop('checked')){
		$var.eq(indexVal).prop('checked',false );
		$var.eq(indexVal).parent().parent().removeClass('selected');
		
	}else{
		$var.eq(indexVal).prop('checked',true);
		$var.eq(indexVal).parent().parent().addClass('selected');		
	}
	if(count>0 && !$(this).hasClass('selectall')){
		$selectAll.addClass('multiselect');
	}else{
		$selectAll.removeClass('multiselect');
	}
});
$selectAll.click(function(){
	var checkBoxParent  = $('.message-list .checkbox'),
	    $self           = $(this),
	    checkBoxInput   = $('.message-list input[type="checkbox"]'),
	    $headerCheck    = $('.mail-option-header .checkbox'),
	    $sndHeaderCheck = $('.mail-option .checkbox');
	if($self.data('index') !== $headerCheck.data('index') && !$headerCheck.hasClass('checked')){
		$headerCheck.addClass('checked');
	}
	if($self.data('index') !== $sndHeaderCheck.data('index') && !$sndHeaderCheck.hasClass('checked')){
		$sndHeaderCheck.addClass('checked');
	}
	if(!$self.hasClass('checked')){
		//$sndHeaderCheck.removeClass('checked');
		$headerCheck.removeClass('checked');
	}
	if($self.hasClass('checked')){
		$.each(checkBoxParent,function(index,val){
			$(checkBoxParent).eq(index).addClass('checked');
			$(checkBoxParent).eq(index).parent().parent().addClass('selected');
			$(checkBoxInput).eq(index).prop('checked',true);
	    });
	}else{
		$.each(checkBoxParent,function(index,val){
			$(checkBoxParent).eq(index).removeClass('checked');
			$(checkBoxParent).eq(index).parent().parent().removeClass('selected');
			$(checkBoxInput).eq(index).prop('checked',false);
	    });
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

