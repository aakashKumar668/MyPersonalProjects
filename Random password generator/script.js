const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "!@#$%^&*()_+/";

let passBox=document.getElementById("passBox");
let totalCharacter = document.getElementById("totalCharacter");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let number = document.getElementById("number");
let symbols = document.getElementById("symbols");

const getRandomData = (dataset) => {
  return dataset[Math.floor(Math.random() * dataset.length)]
};


const genratedPass=(password="")=>{
    if(uppercase.checked){
        password+=getRandomData(upperSet)
    }
    if(lowercase.checked){
        password+=getRandomData(lowerSet)
    }
    if(number.checked){
        password+=getRandomData(numberSet)
    }
    if(symbols.checked){
        password+=getRandomData(symbolSet)
    }
    if(password.length<totalCharacter.value){
        return genratedPass(password)

    }
    passBox.innerText =passTrim(password, totalCharacter.value)
}


document.getElementById("btn").addEventListener("click",
    function(){
        genratedPass();
    }
)

function passTrim(str, num){
    if(str.length>num){
        let subStr=str.substring(0,num);
        return subStr
    }else{
        return str;
    }

}
