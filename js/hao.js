/*
 *
 * by shejidaren.com
 * Date: 2015-10-05
 *
 */


  /* ========================================================================
 * 全局
 * ======================================================================== */
$(document).ready(function () {
  $('.expand').click(function(){
    $('body').toggleClass('hide-side');
  });
  $('.left-side').css("height",$(window).height() - 51)
});
window.onresize=function(){
    $('.left-side').css("height",$(window).height() - 51)
  }

// iframe
$(function(){
  $(".logo").click(function(){
    $("#fame").css("display","none");
    $(".box-main").css("display","block");
  })
  $(".left-nav ul a,.frame-link").click(function(){
    $("#fame").attr("src",$(this).attr("href"));
    $("#fame").css("display","block");
    $("#fame").removeClass("fame-bg");
    $(".box-main").css("display","none");

        $(".left-nav .active").removeClass("active");
        $(this).parent().addClass("active");
  })
  $('.fame-bg').click(function(){
    $('#fame').addClass("fame-bg");
  });
  $(".left-nav>li>a").click(function(){
    $("#fame").css("display","none");
    $(".box-main").css("display","block");
  });
});
    $(document).ready(function ($) {
    $('.left-side .side-content').perfectScrollbar();
    });


//accordion
    $(document).ready(function() {

      // Store variables

      var accordion_head = $('.left-nav > li .open'),

        accordion_body = $('.left-nav li  ul');

      // Open the first tab on load

      accordion_head.first().addClass('fa-rotate-135').next().show('normal');

      // Click function

      accordion_head.on('click', function(event) {

        // Disable header links

        event.preventDefault();

        // Show and hide the tabs on click

        if (!$(this).hasClass('fa-rotate-135')){

          accordion_body.hide('normal');

          $(this).next().stop(true,true).show('normal');

          accordion_head.removeClass('fa-rotate-135');

          $(this).addClass('fa-rotate-135');

        }else{
          $(this).next().hide();
          $(this).removeClass('fa-rotate-135');
        }

      });

    });
/* scroll */
$(function(){
    $(".scroll,.left-nav > li > a").click(function(event){
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top - 50}, 500);
    });
});

/* dt a click flase*/

$(document).ready(function(){
 $(".panel-body dt a").click(function(){
  return false;
 })
});


/* jQuery - Easy Ticker
* https://github.com/vaakash/jquery-easy-ticker 
*/
;(function($,h,i,j){var k="easyTicker",defaults={direction:'up',easing:'swing',speed:'slow',interval:2000,height:'auto',visible:0,mousePause:1,controls:{up:'',down:'',toggle:'',playText:'Play',stopText:'Stop'}};function EasyTicker(f,g){var s=this;s.opts=$.extend({},defaults,g);s.elem=$(f);s.targ=$(f).children(':first-child');s.timer=0;s.mHover=0;s.winFocus=1;init();start();$([h,i]).off('focus.jqet').on('focus.jqet',function(){s.winFocus=1}).off('blur.jqet').on('blur.jqet',function(){s.winFocus=0});if(s.opts.mousePause==1){s.elem.mouseenter(function(){s.timerTemp=s.timer;stop()}).mouseleave(function(){if(s.timerTemp!==0)start()})}$(s.opts.controls.up).on('click',function(e){e.preventDefault();moveDir('up')});$(s.opts.controls.down).on('click',function(e){e.preventDefault();moveDir('down')});$(s.opts.controls.toggle).on('click',function(e){e.preventDefault();if(s.timer==0)start();else stop()});function init(){s.elem.children().css('margin',0).children().css('margin',0);s.elem.css({position:'relative',height:s.opts.height,overflow:'hidden'});s.targ.css({'position':'absolute','margin':0});setInterval(function(){adjHeight()},100)}function start(){s.timer=setInterval(function(){if(s.winFocus==1){move(s.opts.direction)}},s.opts.interval);$(s.opts.controls.toggle).addClass('et-run').html(s.opts.controls.stopText)}function stop(){clearInterval(s.timer);s.timer=0;$(s.opts.controls.toggle).removeClass('et-run').html(s.opts.controls.playText)}function move(a){var b,eq,appType;if(!s.elem.is(':visible'))return;if(a=='up'){b=':first-child';eq='-=';appType='appendTo'}else{b=':last-child';eq='+=';appType='prependTo'}var c=s.targ.children(b);var d=c.outerHeight();s.targ.stop(true,true).animate({'top':eq+d+"px"},s.opts.speed,s.opts.easing,function(){c.hide()[appType](s.targ).fadeIn();s.targ.css('top',0);adjHeight()})}function moveDir(a){stop();if(a=='up')move('up');else move('down')}function fullHeight(){var a=0;var b=s.elem.css('display');s.elem.css('display','block');s.targ.children().each(function(){a+=$(this).outerHeight()});s.elem.css({'display':b,'height':a})}function visHeight(a){var b=0;s.targ.children(':lt('+s.opts.visible+')').each(function(){b+=$(this).outerHeight()});if(a==1){s.elem.stop(true,true).animate({height:b},s.opts.speed)}else{s.elem.css('height',b)}}function adjHeight(){if(s.opts.height=='auto'&&s.opts.visible!=0){anim=arguments.callee.caller.name=='init'?0:1;visHeight(anim)}else if(s.opts.height=='auto'){fullHeight()}}return{up:function(){moveDir('up')},down:function(){moveDir('down')},start:start,stop:stop,options:s.opts}}$.fn[k]=function(a){return this.each(function(){if(!$.data(this,k)){$.data(this,k,new EasyTicker(this,a))}})}})(jQuery,window,document);

// setting easy ticker 
$(function () {
  $('.slogan').easyTicker({
    visible: 1,
    interval: 3000
  });
});

/*   END Easy Ticker   */


/* search */

var mtSearch = function(){
    var fm = $('form');
    var kw = $('#search-text');
    var types = $('.search-list input');

    var changeType = function(i){
        //alert(i);
        var $this = types.eq(i);
        fm[0].action = $this.val();
        kw[0].placeholder = $this.data('placeholder');
        kw[0].focus();
        markType($this.data('i'));
    };

    var getType = function(){
        return localStorage.getItem('searchType');
    };
    var restoreType = function(){
        var i = getType();
        if(i > 0){
            changeType(i);
            types.eq(i).prop('checked', true);
        }else{
            changeType(0);
            types.eq(0).prop('checked', true);
        }
    };
    /*var markSearchTx = function(tx){
        localStorage.setItem('searchTx', tx);
    };

    var getSearchTx = function(){
        var tx = localStorage.getItem('searchTx');
        if(!tx){
            return '';
        }
        return tx;
    };*/

    var eventChecked = function(){
        changeType(jQuery(this).data('i'));
    };

    var eventSubmit = function(e){
        e.preventDefault();
        //markSearchTx(kw.val());
        location.href = this.action + kw[0].value;
    };

    var markType = function(i){
        localStorage.setItem('searchType', i);
    };

    var initChangeType = function(){
        restoreType();
    };

    /*var initPlaceholder = function(){
        if(getSearchTx()){
            kw.val(getSearchTx());
        }
    }*/
    types.each(function(){
        jQuery(this).on('change', eventChecked);
    });

    fm.on('submit', eventSubmit);
    initChangeType();
    initPlaceholder();
};

jQuery(document).ready(function(){
    mtSearch();

});




/* AJAX LOAD MORE LINKS
$(function(){

  $('.appen-text').click(function appendText(){
    var txt2=$("<div class='more-content'>加载失败...</div>");  // 以 jQuery 创建新元素

    $(this).parents('.panel').find('.panel-body').prepend(txt2);        // 追加新元素
    $(this).addClass('none');
    $(this).next().removeClass('none');
  });

  bind();
  function bind(){
    var $a = $('.load-button');
    if(!$a[0]) return;

    function ajax(e){
      var $this = jQuery(this);
        $container = $(this).parents('.panel').find('.more-content');


      jQuery.ajax({
        url : $this[0].href,

        success : function(data){
          var $dom = jQuery(data),
            content = $dom.find($this.data('node'));

          $container.html(content);
          $('.more-content').hide();
          $('.more-content').slideDown();

        },
        error : function(){
          alert('error');
        }
      });
      return false;
    }
    $a.on('click',ajax);
  }

  //remove .more-content
  $('.remove-more-content').click(function appendText(){
    if($(this).parents('.panel').children('.panel-body').children().hasClass('more-content')){
      var txt = $('.more-content').is(':visible') ? 'MORE' : 'LESS';
      $(this).text(txt)
      $(this).parents('.panel').find('.more-content').slideToggle()
    }else{
    }
  });

});
*/
