
// Ajax GET Request 
function dataFetchUseAjax() {
    let URL = 'https://jsonplaceholder.typicode.com/posts';
    let myConfiguration = { method: 'GET' };

    fetch(URL, myConfiguration)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log('Error:', err));
}




// Ajax POST Request
function dataPostUseAjax() {
    let url = '';

    myData = {
        name: 'Md Jasim Uddin',
        email: 'mdjasimuddin.dev@gmail.com'
    }


    let myconfiguration = {
        method: 'POST',
        Headers: { 'Accept': 'application/json', 'content-type': 'application/json' },
        body: JSON.stringify(myData)
    }


    fetch(url, myconfiguration)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

}

