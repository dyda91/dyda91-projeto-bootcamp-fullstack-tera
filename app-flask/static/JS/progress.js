const progressValue = document.getElementsByClassName("percent")

const input = document.getElementsByClassName("valueInput").value

changeProgress = () => {
    progressValue.setAttribute("style", "width"+ input +"%")
}
