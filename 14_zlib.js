// zlib模块提供了数据压缩和解压的功能

const { createGzip } = require("node:zlib");
const { pipeline } = require("node:stream");
const { createReadStream, createWriteStream } = require("node:fs");

const gzip = createGzip();
const source = createReadStream("input.txt");
const destination = createWriteStream("input.txt.gz");

pipeline(source, gzip, destination, (err) => {
  if (err) {
    console.error("An error occurred:", err);
    process.exitCode = 1;
  }
});

// Or, Promisified

const { promisify } = require("node:util");
const pipe = promisify(pipeline);

async function do_gzip(input, output) {
  const gzip = createGzip();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  await pipe(source, gzip, destination);
}

do_gzip("input.txt", "input.txt.gz").catch((err) => {
  console.error("An error occurred:", err);
  process.exitCode = 1;
});
