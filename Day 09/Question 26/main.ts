// |||||||||||Question 26|||||||||||||

// CREATE IF BLOCKS AND CREATE ELSE BLOCK
// IF BLOCKS STATEMENTS
let alienColor: string = "Green";
if(alienColor == "Green"){
   console.log('\n WELLCOME TO THE ALIEN SHOOTER GAME!!!');
   console.log('\n you just earned 5 points\n for shooting the alien!!\n');
}else{
    console.log('you just earned 10 points.');
}
// ELSE BLOCK STATEMENTS
alienColor = "Green";
if(alienColor == "Yellow"){
   console.log('\n WELLCOME TO THE ALIEN SHOOTER GAME!!!');
   console.log('\n you just earned 5 points\n for shooting the alien!!\n');
}else{
    console.log('you just earned 10 points\n Because your statement is False.\n');
}