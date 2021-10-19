//combo box encode / decode
const typeAction = document.querySelector("#typeName");
//encoding button
const btnEncoding = document.querySelector("#btnEncodeDecode");
//input
const inputText = document.querySelector("#inputText");
//output
const outputText = document.querySelector("#outputText");

/*--------------------------------------------------------------------------*/

//base64 typeAction listener to change the label of the button
typeAction.addEventListener("change", () => {
  //clear input and output text areas
  inputText.value = "";
  outputText.value = "";
  //execute function to change the label of the button
  changeLabelButton();
});

// base64 encode / decode
btnEncoding.addEventListener("click", () => {
  //clean the output
  outputText.value = "";
  //get the input value
  const input = inputText.value;
  //get type encode or decode
  const type = typeAction.value;

  if (input === null || input === "") {
    //the input is empty
    inputText.classList.add("textArea--error");
  } else {
    //the input is not empty
    inputText.classList.remove("textArea--error");
    //execute function and get the strings encoded or decoded
    const resultBase64 = encodeDecodeBase64(input, type);
    //show the result
    resultBase64.forEach((item) => {
      outputText.value += item + "\n";
    });
  }
});

/*--------------------------------------------------------------------------*/

/**
 * Change the label of the base64 button
 */
const changeLabelButton = () => {
  const action = typeAction.value;
  let word = "Decodificar";

  if (action === "encode") word = "Codificar";

  btnEncodeDecode.innerHTML = `${word} <i class="fas fa-long-arrow-alt-right"></i>`;
};

/**
 * Encode or decode a string in base64
 * @param {string} input String to convert
 * @param {string} type Action to do (encode/decode)
 * @returns {array}
 */
const encodeDecodeBase64 = (input, type) => {
  //split input when get line break
  const arrayInput = input.split("\n");
  //result
  let res = [];

  if (type === "encode") {
    //encode
    res = arrayInput.map((item) => {
      return btoa(item);
    });
  } else {
    //decode
    res = arrayInput.map((item) => {
      return atob(item);
    });
  }

  return res;
};
