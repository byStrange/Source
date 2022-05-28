$(function() {
	$('body').css({overflow: 'hidden',height : '100vh'})
	$('h1#h1').text('hello from jquery')
	// $('h1').wrap(`<button></button>`)
	// $('h1').wrap(`<button></button>`)
	// $('h1').wrap(`<button></button>`)
	// $('h1').wrap(`<button></button>`)
	// $('h1').unwrap()
	// $('h1').unwrap()
	// $('h1').unwrap()
	// $('div').eq(1).css({
	// 	border : `1px solid red`,
	// 	background : 'red',
	// 	position: 'absolute',
	// 	top: '25%',
	// 	left : '30%'
	// })
	// $('div').eq(1).width(500);
	// $('div').eq(1).height(400);
	// $(`<button class='btn'>Salom</button>`).clone().appendTo('body');
	// $('.btn').css({
	// 	background  : 'red',
	// })
	// $('.btn').on('click' , function() {
	// 	$('div').slideToggle(1500)
	// })
	console.log($(window).innerHeight())
	$('.pos').click(function() {
		$('.inputfield').animate({
			// width : '-=150px',
			// height : '-=15px',
			opacity: 0.5,
			background : 'red',
			transform : 'scale(5,5)',
			scale : 5,
			position : 'absolute',
			zIndex : -1,
			border: '1px solid red',
			top : Math.random() * $(window).innerHeight() - 100,
			left : Math.random () * $(window).innerWidth() -100
		}, 500)
	})
	var tags = [
	'telegram', 'what`s up', 'nurillo' , 'amazing'
				]
	$('input').autocomplete({
		source : tags
	})	
	let arr = ['ui-icon ui-icon-circle-triangle-n', 'ui-icon ui-icon-circle-triangle-e' , 'ui-icon ui-icon-circle-triangle-s' , 'ui-icon ui-icon-circle-triangle-w']
	$('span').click(function() {
		$(this).removeClass(arr[0]);
		$(this).addClass(arr[1]);
		$(this).click(function() {
		$(this).removeClass(arr[1]);
		$(this).addClass(arr[2]);
		$(this).click(function() {
			$(this).removeClass(arr[2]);
		$(this).addClass(arr[3]);
		})
		// $(this).click(function() {
		// $(this).addClass(arr[3]);
		// })
		})
	})
})