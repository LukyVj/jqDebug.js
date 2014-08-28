/* 
  jqDebug.js | A tiny jquery debug function.
  Author : @LukyVj
  Date : Aug 2014
*/

function debug($rule){
  var debug = $('[data-debug]');
  
  debug.each(function(){
		var $this = $(this);
		var debugColor = $this.attr('data-debug');

    if($rule == 'box-shadow'){
       $this.css($rule,'0 0 1em ' + debugColor);
    }
    else if($rule == 'border'){
       $this.css($rule,'1px solid ' + debugColor);
    }
    else{
       $this.css($rule, debugColor);
    }
  });
} 
