


function alertMethod() {
    alert("Hello, Sir, Can I help you")
}

// 02 confirm method 
function confirmMethod() {

    let answer = confirm("Do you want to delete this file?");
    if (answer) {
        console.log("File deleted.");
    } else {
        console.log("Deletion canceled.");
    }
}
function promptMethod() {
    prompt("Write you name.")
}

function openMethod() {
    open()
}

function closeMethod() {
    close()
}
function setTimeOutMethod() {
    setTimeout(()=>{
alert('After 2 sec')
    }, 2000)
}