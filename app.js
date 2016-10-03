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
		$('.c' + col + 's6').css("background-color", color);
		checkWin(col, 's6');

	} else if (board.allCols[col].s5 == false){

		board.allCols[col].s5 = color
		$('.c' + col + 's5').css("background-color", color);
		checkWin(col, 's5');

	} else if (board.allCols[col].s4 == false){

		board.allCols[col].s4 = color
		$('.c' + col + 's4').css("background-color", color);
		checkWin(col, 's4');

	} else if (board.allCols[col].s3 == false){

		board.allCols[col].s3 = color
		$('.c' + col + 's3').css("background-color", color);
		checkWin(col, 's3');

	} else if (board.allCols[col].s2 == false){

		board.allCols[col].s2 = color
		$('.c' + col + 's2').css("background-color", color);
		checkWin(col, 's2');

	} else if (board.allCols[col].s1 == false){

		board.allCols[col].s1 = color
		$('.c' + col + 's1').css("background-color", color);
		checkWin(col, 's1');

	} else if (board.allCols[col].s0 == false){

		board.allCols[col].s0 = color
		$('.c' + col + 's0').css("background-color", color);
		checkWin(col, 's0');

	} else {
		alert('Row is full!');
	};

	checkWin();

});


function checkWin(col, spot){
	var up1 = spot - 1;
	var up2 = spot - 2;
	var up3 = spot - 3;

	var left1 = col - 1
	var left2 = col - 2;
	var left3 = col - 3;

	var right1 = col + 1;
	var right2 = col + 2;
	var right3 = col + 3;

	var lower1 = spot + 1;
	var lower2 = spot + 2;
	var lower3 = spot + 3;

	var diagUpperLeftCol1 = col - 1;
	var diagUpperLeftCol2 = col - 2;
	var diagUpperLeftCol3 = col - 3;
	var diagUpperLeftSpot1 = spot - 1;
	var diagUpperLeftSpot2 = spot - 2;
	var diagUpperLeftSpot3 = spot - 3;

	var diagUpperRightCol1 = col + 1;
	var diagUpperRightCol2 = col + 2;
	var diagUpperRightCol3 = col + 3;
	var diagUpperRightSpot1 = spot - 1;
	var diagUpperRightSpot2 = spot - 2;
	var diagUpperRightSpot3 = spot - 3;

	var diagLowerLeftCol1 = col - 1;
	var diagLowerLeftCol2 = col - 2;
	var diagLowerLeftCol3 = col - 3;
	var diagLowerLeftSpot1 = spot + 1;
	var diagLowerLeftSpot2 = spot + 2;
	var diagLowerLeftSpot3 = spot + 3;

	var diagLowerRightCol1 = col + 1;
	var diagLowerRightCol2 = col + 2;
	var diagLowerRightCol3 = col + 3;
	var diagLowerRightSpot1 = spot + 1;
	var diagLowerRightSpot2 = spot + 2;
	var diagLowerRightSpot3 = spot + 3;


	winDelay = setTimeout(function() {
		if(
		(board.allCols[0].s6 && board.allCols[0].s5 && board.allCols[0].s4 && board.allCols[0].s3) ||
		(board.allCols[0].s5 && board.allCols[0].s4 && board.allCols[0].s3 && board.allCols[0].s2) ||
		(board.allCols[0].s4 && board.allCols[0].s3 && board.allCols[0].s2 && board.allCols[0].s1) == ('red')){
			alert(color + " wins!")
		}
	}, 100);
}