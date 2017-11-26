var a = prompt("podaj a");
	b = prompt("podaj b");
	c = (a*a)-(2*a*b)+(b*b);

	if (c>0) {
		alert('wynik dodatni');
		console.log('wynik dodatni');
	} 

	else if (c<0){
		alert('wynik ujemny');
		console.log('wynik ujemny');
	}

	else if (c==0){
		alert('wynik równy 0');
		console.log('wynik równy 0');
	}
