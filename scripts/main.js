document.querySelector('body').style.textAlign = 'center';
document.querySelector('body').style.marginTop = '25%';
document.querySelector('div').style.marginBottom = '25%';

var likesEl = document.querySelector('.youLikeMe');
likesEl.style.height = '6em';
likesEl.style.width = '12em';

var resetEl = document.querySelector('.noLike');
resetEl.style.height = '6em';
resetEl.style.width = '12em';

counter = 0;
function moreLikes() {

	if (counter === 0) {
		counter = 1;
		likesEl.innerHTML = counter + ' Like';
	} else {
		counter++;
		likesEl.innerHTML = counter + ' Likes';
	}
}

likesEl.addEventListener('click', moreLikes);

function noMoreLikes() {
	counter = 0;
	likesEl.innerHTML = counter + ' Likes';
}

resetEl.addEventListener('click', noMoreLikes);