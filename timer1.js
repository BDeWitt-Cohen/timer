
let args = process.argv.slice(2);

const timer = (times) => {
  let newArr = times.filter(n => n > 0 && n !== "");
  for (const time of newArr) {
    setTimeout(() => {
      process.stdout.write('\x07');

    }, time); //

  }
};


timer(args);
