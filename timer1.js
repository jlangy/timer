const args = process.argv.slice(2);

const positiveNumArgs = args.filter(input => Number(input) > 0);

positiveNumArgs.forEach((num,i) => {
  setTimeout(() => {
    process.stdout.write(`${num} second beep, `);
  }, num * 1000);
});