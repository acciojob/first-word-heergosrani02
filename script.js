function firstWord(s) {
  let s1 = s.split(" ");
  for(let i = 0; i <= s1.length; i++){
	  let fw = s1[i][0];
	  return fw;
  } 
} 
 
// Do not change the code below

/const s = prompt("Enter String:");
alert(firstWord(s));
