// console.log("Testing!");

module.exports = function print(text) {
  const frame_char = "*";
  const frame = frame_char.repeat(text.length);
  console.log(
`${frame}
${text}
${frame}`
  );
}
