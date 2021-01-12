const sentence = "hello there from lighthouse labs";
let delayTime = 0// where to store my delayed time
for (const char of sentence) {// iterate over the sentence for each chracter
  setTimeout(() => {// setTimeout to delay the sentence
    process.stdout.write(char)// to have it all appear in the command line all at once
  }, delayTime)//the second parameter in the arguement which is the variable box time out
  delayTime += 50 //50ms to add to my delaytime counter
}

setTimeout(() => {// I need to wait for my original /\/\ to do its thing
  console.log(`\n`)//make a new line
}, delayTime);//but delay that time because we need to have that second parameter