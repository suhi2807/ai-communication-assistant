const API = "http://127.0.0.1:8000";

async function improve() {

let text = document.getElementById("text").value;

let response = await fetch(API + "/improve", {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify({
text: text
})

});

let data = await response.json();

document.getElementById("result").innerText = data.result;

}


async function analyze() {

let text = document.getElementById("text").value;

let response = await fetch(API + "/analyze", {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify({
text: text
})

});

let data = await response.json();

document.getElementById("result").innerText = data.result;

}


async function reply() {

let text = document.getElementById("text").value;

let response = await fetch(API + "/reply", {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify({
text: text
})

});

let data = await response.json();

document.getElementById("result").innerText = data.result;

}