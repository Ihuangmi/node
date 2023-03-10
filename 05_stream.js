var fs = require("fs");
var data = "今天天气真好，就是穿厚了有点热";

// ##从流中读取数据
// 创建可读流
// var readerStream = fs.createReadStream("input.txt");

// // 设置编码为 utf8
// readerStream.setEncoding("UTF8");

// // 处理流事件 --> data, end, and error
// readerStream.on("data", function (chunk) {
//   data += chunk;
// });

// readerStream.on("end", function () {
//   console.log(data);
// });

// readerStream.on("error", function (err) {
//   console.log(err.stack);
// });

// console.log("程序执行完毕");

// ##写入流
// var writerStream = fs.createWriteStream("output.txt");
// writerStream.write(data, "utf-8");
// writerStream.end();
// writerStream.on("finish", function () {
//   console.log("写入数据完成");
// });
// writerStream.on("error", function (err) {
//   console.log(err.stack);
// });
// console.log("程序执行完毕");

// ##管道流 -- 大文件拷贝
// 创建一个可读流
var readerStream = fs.createReadStream("input.txt");

// 创建一个可写流
var writerStream = fs.createWriteStream("output.txt");

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");
