var board = {
	allCols: [
		{
			s1: false,
			s2: false, 
			s3: false,
			s4: false,
			s5: false,
			s6: false
		},
		{
			s1: false,
			s2: false, 
			s3: false,
			s4: false,
			s5: false,
			s6: false
		}, 
		{
			s1: false,
			s2: false, 
			s3: false,
			s4: false,
			s5: false,
			s6: false
		}, 
		{
			s1: false,
			s2: false, 
			s3: false,
			s4: false,
			s5: false,
			s6: false
		}, 
		{
			s1: false,
			s2: false, 
			s3: false,
			s4: false,
			s5: false,
			s6: false
		}, 
		{
			s1: false,
			s2: false, 
			s3: false,
			s4: false,
			s5: false,
			s6: false
		}, 
		{
			s1: false,
			s2: false, 
			s3: false,
			s4: false,
			s5: false,
			s6: false
		}
	]
}

var player = 1;
var color = 'red';

$('.box').mouseover(function() {
	if (player == 1){
		color = 'red';
	}

	if (player == 2){
		color = 'blue';
	}

	var col = $(this).attr('data-id');
	$('.c' + col).css("border", color + " solid 3px");


	$('.c' + col).mouseout(function() {
		$('.c' + col).css("border", "black solid 3px");
	});
});

$('.box').on('click', function(){

	if (player == 1){
		player = 2;
	} else if (player == 2){
		player = 1;
	}


	var col = $(this).attr('data-id');

	if (board.allCols[col].s6 == false){

		board.allCols[col].s6 = color
		$('.c' + col + 's6').attr('data-color' , color);
		$('.c' + col + 's6').css("background-color", color);
		checkWin(col, '6', color);

	} else if (board.allCols[col].s5 == false){

		board.allCols[col].s5 = color
		$('.c' + col + 's5').attr('data-color' , color);
		$('.c' + col + 's5').css("background-color", color);
		checkWin(col, '5', color);

	} else if (board.allCols[col].s4 == false){

		board.allCols[col].s4 = color
		$('.c' + col + 's4').attr('data-color' , color);
		$('.c' + col + 's4').css("background-color", color);
		checkWin(col, '4', color);

	} else if (board.allCols[col].s3 == false){

		board.allCols[col].s3 = color
		$('.c' + col + 's3').attr('data-color' , color);
		$('.c' + col + 's3').css("background-color", color);
		checkWin(col, '3', color);

	} else if (board.allCols[col].s2 == false){

		board.allCols[col].s2 = color
		$('.c' + col + 's2').attr('data-color' , color);
		$('.c' + col + 's2').css("background-color", color);
		checkWin(col, '2', color);

	} else if (board.allCols[col].s1 == false){

		board.allCols[col].s1 = color
		$('.c' + col + 's1').attr('data-color' , color);
		$('.c' + col + 's1').css("background-color", color);
		checkWin(col, '1', color);

	} else if (board.allCols[col].s0 == false){

		board.allCols[col].s0 = color
		$('.c' + col + 's0').attr('data-color' , color);
		$('.c' + col + 's0').css("background-color", color);
		checkWin(col, '0', color);

	} else {
		alert('Row is full!');
	};

});


function checkWin(col, spot, color){

	console.log(col, spot);

	if ($('.c' + col + 's' + spot).attr('data-color') == color && $('.c' + col + 's' + (parseInt(spot) - 1)).attr('data-color') == color && $('.c' + col + 's' + (parseInt(spot) - 2)).attr('data-color') == color && $('.c' + col + 's' + (parseInt(spot) - 3)).attr('data-color') == color){
		win();
	}

	if ($('.c' + col + 's' + spot).attr('data-color') == color && $('.c' + col + 's' + (parseInt(spot) + 1)).attr('data-color') == color && $('.c' + col + 's' + (parseInt(spot) + 2)).attr('data-color') == color && $('.c' + col + 's' + (parseInt(spot) + 3)).attr('data-color') == color){
		win();
	}

	if ($('.c' + col + 's' + spot).attr('data-color') == color && $('.c' + (parseInt(col) + 1) + 's' + spot).attr('data-color') == color && $('.c' + (parseInt(col) + 2) + 's' + spot).attr('data-color') == color && $('.c' + (parseInt(col) + 3) + 's' + spot).attr('data-color') == color){
		win();
	}

	if ($('.c' + col + 's' + spot).attr('data-color') == color && $('.c' + (parseInt(col) - 1) + 's' + spot).attr('data-color') == color && $('.c' + (parseInt(col) - 2) + 's' + spot).attr('data-color') == color && $('.c' + (parseInt(col) - 3) + 's' + spot).attr('data-color') == color){
		win();
	}

	if ($('.c' + col + 's' + spot).attr('data-color') == color && $('.c' + (parseInt(col) + 1) + 's' + (parseInt(spot) + 1)).attr('data-color') == color && $('.c' + (parseInt(col) + 2) + 's' + (parseInt(spot) + 2)).attr('data-color') == color && $('.c' + (parseInt(col) + 3) + 's' + (parseInt(spot) + 3)).attr('data-color') == color){
		win();
	}

	if ($('.c' + col + 's' + spot).attr('data-color') == color && $('.c' + (parseInt(col) - 1) + 's' + (parseInt(spot) - 1)).attr('data-color') == color && $('.c' + (parseInt(col) - 2) + 's' + (parseInt(spot) - 2)).attr('data-color') == color && $('.c' + (parseInt(col) - 3) + 's' + (parseInt(spot) - 3)).attr('data-color') == color){
		win();
	}

	if ($('.c' + col + 's' + spot).attr('data-color') == color && $('.c' + (parseInt(col) + 1) + 's' + (parseInt(spot) - 1)).attr('data-color') == color && $('.c' + (parseInt(col) + 2) + 's' + (parseInt(spot) - 2)).attr('data-color') == color && $('.c' + (parseInt(col) + 3) + 's' + (parseInt(spot) - 3)).attr('data-color') == color){
		win();
	}

	if ($('.c' + col + 's' + spot).attr('data-color') == color && $('.c' + (parseInt(col) - 1) + 's' + (parseInt(spot) + 1)).attr('data-color') == color && $('.c' + (parseInt(col) - 2) + 's' + (parseInt(spot) + 2)).attr('data-color') == color && $('.c' + (parseInt(col) - 3) + 's' + (parseInt(spot) + 3)).attr('data-color') == color){
		win();
	}

}
			
function win(){
	winDelay = setTimeout(function() {
		alert(color + ' wins!');
		location.reload();
	}, 100)
}
