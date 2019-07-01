// Regular Expressions with ES6

//----------------------
const testWordRegex = () => {
  const string = "Where's Waldo";
  const regex = /Waldo/;
  const result = regex.test(string);
  return result;
};

//-----------------------

const testMultWordsRegex = () => {
  const string = "I have a pet dog";
  const regex = /dog|cat|bird|fish/;
  const result = regex.test(string);
  return result;
};

//-----------------------

const testIgnoreCaseRegex = () => {
  const string = "Cookies";
  // an i after the "/" ignores case in the text
  const regex = /cookies/i;
  const result = regex.test(string);
  return result;
};

//-----------------------

const extractWordRegex = () => {
  const string = "Extract word from string";
  const regex = /word/;
  const result = string.match(regex);
  return result;
};

//-----------------------

const extractAllWordRegex = () => {
  const string = "Extract word word word word word from string";
  // add the g flag after the closing "/"
  // add an i flag before the g to ignore case
  const regex = /word/g;
  const result = string.match(regex);
  return result;
};

//-----------------------

const extractStartsWithRegex = () => {
  const string = "Extract the word dog from string";
  // add a . as a wildcard
  const regex = /do./;
  const result = string.match(regex);
  return result;
};
