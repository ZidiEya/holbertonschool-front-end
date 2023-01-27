/*
Write a new fun named createElement:
    It accepts one arg data (String)
    It creates a p element
    The content of the para is set to data
    It appends to the document body the paragraph
Create a new func named queryWikipedia:
    It accepts one arg callback (func)
    Using XMLHttpRequest, it get the article of Stack Overflow with the URL https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*
    Once the fetch is correctly executed, it calls the callback function with the extract of the API response
Call queryWikipedia with createElement as callback
Requirements:
    Use vanilla javascript to run the Ajax query (no jQuery or other framework)
    You must not call createElement within queryWikipedia directly
*/
function createElement(data) {
    const para = document.createElement('p');
    const node = document.createTextNode(data)
    para.appendChild(node);
    document.body.appendChild(para);
}

function queryWikipedia(callback) {
    let req = new XMLHttpRequest();
    req.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);
    req.onreadystatechange = function (event) {
      if(req.readyState === 4) {
            if(req.status === 200) { callback(JSON.parse(req.responseText).query.pages[21721040].extract) } 
            else {
                const error = new Error('Error');
                return callback(error, null);
                }
      }
    }
    req.send();
}

queryWikipedia(createElement);
