const getColor =()=>{
    let randomNumber =Math.floor(Math.random()*16777215);
    let randomCode = "#"+ randomNumber.toString(16);
    // console.log(randomCode)
    document.querySelector(".main").style.backgroundColor =randomCode;
    document.querySelector("#colorCode").innerText = randomCode;
    document.querySelector("#colorCode").style.color = randomCode;

    navigator.clipboard.writeText(randomCode);

}
getColor()
document.getElementById("btn").addEventListener("click", getColor

)
// setInterval(getColor,3000)