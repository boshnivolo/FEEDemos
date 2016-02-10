var clicks = 0;

function voteUp() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
}

function voteDown() {
  if (clicks > 0){
    clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;
  } else {
    clicks = 0;
  }
}
