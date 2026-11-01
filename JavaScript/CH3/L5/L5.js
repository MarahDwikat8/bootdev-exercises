//Functions As Values
function reformat(message, formatter) {
  let result = formatter(message);
  result = formatter(result);
  result = formatter(result);
  return `TEXTIO: ${result}`;
}

// don't touch below this line

export { reformat };
