function compareNumbers(a, b) {
  return a - b;
}
function user1(cards1)
{
	var hearts_user1=[],clubs_user1=[],spades_user1=[],diams_user1=[];
	for (var i = 0 ; i < 13; i++) {
		var temp=cards1[i].split("&");
	    if (temp[1]=="hearts")
	    	hearts_user1.push(temp[0]);
        if (temp[1]=="clubs")
	    	clubs_user1.push(temp[0]);
	    if (temp[1]=="spades")
	    	spades_user1.push(temp[0]);
	    if (temp[1]=="diams")
	    	diams_user1.push(temp[0]);
	};

	
return [clubs_user1.sort(compareNumbers),spades_user1.sort(compareNumbers),hearts_user1.sort(compareNumbers),diams_user1.sort(compareNumbers)];
}

function user2(cards2)
{
	var hearts_user2=[],clubs_user2=[],spades_user2=[],diams_user2=[];
	for (var i = 0 ; i < 13; i++) {
		var temp=cards2[i].split("&");
	    if (temp[1]=="hearts")
	    	hearts_user2.push(temp[0]);
        if (temp[1]=="clubs")
	    	clubs_user2.push(temp[0]);
	    if (temp[1]=="spades")
	    	spades_user2.push(temp[0]);
	    if (temp[1]=="diams")
	    	diams_user2.push(temp[0]);
	};

	
return [clubs_user2.sort(compareNumbers),spades_user2.sort(compareNumbers),hearts_user2.sort(compareNumbers),diams_user2.sort(compareNumbers)];
}
function user3(cards3)
{
	var hearts_user3=[],clubs_user3=[],spades_user3=[],diams_user3=[];
	for (var i = 0 ; i < 13; i++) {
		var temp=cards3[i].split("&");
	    if (temp[1]=="hearts")
	    	hearts_user3.push(temp[0]);
        if (temp[1]=="clubs")
	    	clubs_user3.push(temp[0]);
	    if (temp[1]=="spades")
	    	spades_user3.push(temp[0]);
	    if (temp[1]=="diams")
	    	diams_user3.push(temp[0]);
	};

	
return [clubs_user3.sort(compareNumbers),spades_user3.sort(compareNumbers),hearts_user3.sort(compareNumbers),diams_user3.sort(compareNumbers)];
}
function user_me(cards3)
{
	var hearts_me=[],clubs_me=[],spades_me=[],diams_me=[];
	for (var i = 0 ; i < 13; i++) {
		var temp=cards3[i].split("&");
	    if (temp[1]=="hearts")
	    	hearts_me.push(temp[0]);
        if (temp[1]=="clubs")
	    	clubs_me.push(temp[0]);
	    if (temp[1]=="spades")
	    	spades_me.push(temp[0]);
	    if (temp[1]=="diams")
	    	diams_me.push(temp[0]);
	};

	
return [clubs_me.sort(compareNumbers),spades_me.sort(compareNumbers),hearts_me.sort(compareNumbers),diams_me.sort(compareNumbers)];
}
exports.user1 = user1;
exports.user2 = user2;
exports.user3 = user3;
exports.user_me = user_me;