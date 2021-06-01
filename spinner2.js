
let delay = 100;
for(let i = 0; i < 3; i ++){
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, delay);
  delay += 200;
  
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, delay);
  delay += 200;
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, delay);
  delay += 200;
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
  }, delay);
  delay += 200;
  i++
}
