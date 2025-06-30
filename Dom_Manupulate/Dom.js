
// element find by Id, css, tag 

const DomDescrip = document.getElementById('domId').innerHTML = "This is Dom Title Description."
let index = 0
const MyData = document.getElementsByClassName('myId')[index].innerHTML = "Sorry."
const myChange = document.getElementsByTagName('h3')[index].innerHTML = `This is a heading Tag Text ${index}`

// Show Browser cookie in web page 
const CookieData = document.cookie;
const CookieFind = document.getElementById('cookieShow').innerHTML = CookieData

// show doamin 
const domainData = document.domain;
const FindDomain = document.getElementById('domainFind').innerHTML = domainData

// show Last Modified 
const lastModified = document.lastModified;
const LastEdit = document.getElementById('LastEditFile').innerHTML = lastModified

// show Doc Title 
const DocTitle = document.title;
document.getElementById('DocTitle').innerHTML = DocTitle

// show Doc Size 
const DocURL = document.URL;
document.getElementById('DocURL').innerHTML = DocURL


// Replace Content
function replaceContent() {
    document.open('text/html', 'replace')
    document.write("Replace Content.")
    document.close()
}

// Open New Tab
function openNewTab() {
    var w = window.open()
    w.document.open()
    w.document.write('Open New Tab Successful.')
    w.document.close()
}


// Add two Number
function TwoNumber() {
    const firstValue = document.getElementById('num1').value
    const SecondValue = document.getElementById('num2').value

    const sum = parseInt(firstValue) + parseInt(SecondValue)
    document.getElementById('total').innerHTML = sum;
}


// Dynamic Style Add Use JavaScript 
function AddStyle() {
    let styleDiv = document.getElementById('myStyle')
    styleDiv.classList.add('highlight')
}

function RemoveStyle() {
    let styleDiv = document.getElementById('myStyle')
    styleDiv.classList.remove('highlight')
}


// Dynamic Todo List Create 

function AddList() {
    let getInputValue = document.getElementById('inputTag').value
    let listTag = document.createElement('li')
    listTag.innerHTML = getInputValue;

    const listData = document.getElementById('MyItems')
    listData.append(listTag)
    getInputValue = ''

}

// Dynamic Img Change by JS 

function changeImage() {
    let imageSrc = document.getElementById('imgSrc')
    imageSrc.src = 'https://i.ibb.co/zWhspmFx/IMG-8088.jpg'
}






