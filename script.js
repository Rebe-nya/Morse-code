const text = document.getElementById("inputTextArea");
const button = document.getElementById("encodeButton");
const outputText = document.getElementById("outputText");

function morseEncode(noDiakrText){
    const morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    let morseText = "";
    for (let i = 0; i < noDiakrText.length; i++){
        if (noDiakrText.charCodeAt(i) === 32){
            morseText += "/ ";
        }
        else if (noDiakrText.charCodeAt(i) === 46){
            morseText += ".-.-.-";
        }
        else {
            morseText += morse[noDiakrText.charCodeAt(i) - 65];
            if (i < noDiakrText.length - 1) {
                morseText += " ";
            }
        }
    }
    return morseText;

}
function noDiakr(){
    const diakrZnaky = "ÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ";
    const bezDiakrZnaky = "ACDEEINORSTUUYZ";
    let upperText = text.value.toUpperCase();
    let result = "";
    let output = "";
    
    for (let i = 0; i < upperText.length; i++){
        if (diakrZnaky.indexOf(upperText[i]) !== -1){
            result = diakrZnaky.indexOf(upperText[i]);
            result = bezDiakrZnaky[result];
        } 
        else {
            result = upperText[i];
        }
        output += result; 
    }
    return output;
}

button.addEventListener("click", function() {
    outputText.innerText = morseEncode(noDiakr())
})