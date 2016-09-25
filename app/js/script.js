(function($){
    $(window).load(function(){
        $("a[rel='m_PageScroll2id']").mPageScroll2id({
				    offset:100,
				    highlightClass:"left-nav-el-active"
				});
    });
 })(jQuery);

$(document).ready(function(){
	/* ###### For only ies  ######*/
	//if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)){
	//	//code
	//}

	//message for old IE
	function isIE () {
	  var myNav = navigator.userAgent.toLowerCase();
	  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
	}

	if (isIE() < 10 &&  isIE()) {
		$('body').empty();
		$('body').prepend('<div class="old-browser"><div class="old-browser-text"> Браузер не поддерживается =(</div></div>');
	}


	$('.main-form').validate({
				rules:{ //правила для полей 
					name:{
						required:true,
						minlength:5 //минимальное значение поля
					},
					phone:{
						required:true,
						number:true
					},
					email:{
						required:true,
						email:true
					}
				},
				messages:{
					name:{
						required: 'Это поле обязатлеьно для заполнения', //какое сообщение будет выводиться
						minlength:'Имя должно быть не меньше 5 символов'
					},
					phone:{
						required: 'Это поле обязатлеьно для заполнения',
						number:'Введите правильный телефон'
					},
					email:{
						required: 'Это поле обязатлеьно для заполнения',
						email:'Введите правильный e-mail'
					},
					
				},
				submitHandler : function(form){ //выполнять если все валидно
						form.submit();
						$('.form__send').hide();
						$('.sucsses').show();
					}
		})
	
	$('.main-form').submit(function() { //обрабатываем событие отправки формы
	    	var name =  $(".form__name").val(), // Собираем все значение полей для отправки 
	            email = $(".form__email").val(),
	            phone = $('.form__phone').val();
	            allData = 'name=' + name + '&email=' + email+'&phone='+phone; // формируем строку для предачи в бработчик
	          $.ajax({
	            type: "POST",
	            url: "sender.php",
	            data: allData,
	            success: function () { // выполняется при успешном отправлении
	            	
	            }
	          });
			})
	
	/* ###### For SlideToggle Elements  ######*/
	/*var hideToggle = function(targetClick,toggleEl) {
		$(targetClick).click(function(event){
				event.stopPropagation();
				$(toggleEl).slideToggle("fast");
		});
		$(toggleEl).on("click", function (event) {
			event.stopPropagation();
		});
		$(document).on("click", function () {
				$(toggleEl).hide();
		});
	}
	hideToggle('.icon-bars','.top-menu_link');*/


	/* ###### init RangeSLider  ######*/
	/* ###### bower i --save-dev nouislider  ######*/
	/* ###### https://gist.github.com/fantazer/2bdc4e6a63708e143718ffa7c32eae17  ######*/

	/*var slider = document.getElementById('rangeSlider'); //Элемент

	noUiSlider.create(slider, {
		start: [0, 100],
		connect: true,
		step: 10,
		range: {
			'min': 0,
			'max': 100,
		},
		pips: { // Show a scale with the slider
			mode: 'steps',
			density: 4
		}
	});*/
	

	
})