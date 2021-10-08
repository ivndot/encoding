//combo box encryption / decryption
const typeAction = document.querySelector("#typeName");
//encryption button
const btnEncryption = document.querySelector("#btnEncryptDecrypt");
//input
const inputText = document.querySelector("#inputText");
//key
const keyText = document.querySelector("#keyText");
//output
const outputText = document.querySelector("#outputText");
//error message
const errorInput = document.querySelector("#errorInput");
const errorOuput = document.querySelector("#errorOutput");

/*------------------------------------------------------------------------ */

//event listener to combo box
typeAction.addEventListener("change", () => {
  //clear the inputs and output
  inputText.value = "";
  keyText.value = "";
  outputText.value = "";
  //execute the function to change la label of the button
  changeLabelButton();
});

//event listener to btnEncrypt
btnEncryption.addEventListener("click", () => {
  outputText.value = "";
  const type = typeAction.value;
  const input = inputText.value;
  const key = keyText.value;
  //validate input
  if (!isInputEmpty(input)) {
    //execute function to encrypt / decrypt
    const resultAES = encryptDecryptAES(input, key, type);
    //validate result
    if (!isResultError(resultAES)) outputText.value = resultAES;
  }
});

/*------------------------------------------------------------------------ */

/**
 *
 */
const changeLabelButton = () => {
  const action = typeAction.value;
  let word = "";
  if (action === "encrypt") {
    word = "Cifrar";
  } else {
    word = "Descifrar";
  }

  btnEncryption.innerHTML = word;
};


/**
 *
 * @param {*} input
 * @param {*} key
 * @param {*} type
 * @returns
 */
const encryptDecryptAES = (input, key, type) => {
  let res = "";

  if (type === "encrypt") {
    //encrypt
    res = CryptoJS.AES.encrypt(input, key).toString();
  } else {
    //decrypt
    const decryptedText = CryptoJS.AES.decrypt(input, key);
    res = decryptedText.toString(CryptoJS.enc.Utf8);
  }

  return res;
};


/**
 *
 * @param {*} input
 * @returns
 */
const isInputEmpty = (input) => {
  if (input === null || input === "") {
    //the input is empty
    inputText.classList.add("textArea--error");
    errorInput.classList.add("errorBox--display");

    return true;
  } else {
    //the input is not empty
    inputText.classList.remove("textArea--error");
    errorInput.classList.remove("errorBox--display");

    return false;
  }
};


/**
 * 
 * @param {*} result 
 * @returns 
 */
const isResultError = (result) => {
  if (result === null || result === "") {
    //there is an error
    outputText.classList.add("textArea--error");
    errorOuput.classList.add("errorBox--display");

    return true;
  } else {
    //there is no error
    outputText.classList.remove("textArea--error");
    errorOuput.classList.remove("errorBox--display");

    return false;
  }
};
