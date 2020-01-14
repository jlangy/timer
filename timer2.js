const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
const times = [1,2,3,4,5,6,7,8,9];

process.stdin.on('data', (key) => {
  if(key === 'b'){
    console.log('BEEP');
  } if(times.includes(Number(key))){
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      console.log('BEEP');
    }, Number(key) * 1000);
  }
  if(key === '\u0003'){
    console.log('Thanks for using me, ciao!')
    process.exit();
  }
});
