
const items = [

]

function f(){
    console.log(items);
}
f()
const ul = document.getElementById("ul")

function renderItems(){
    ul.innerHTML=""
items.map((el)=>{

    console.log(el.userAge);
    const li = document.createElement("li")
    const p = document.createElement("p")
    const p2 = document.createElement("p")

    p.innerHTML = el.userName
    p2.innerHTML = el.userAge
    li.append(p)
    li.append(p2)

    ul.append(li)

})
}
renderItems()


const inp = document.getElementById("inp")
const pass = document.getElementById("pass")
const addBtn = document.getElementById("btn")

addBtn.addEventListener("click", addText)


function addText(){
    const data = {
        userName: inp.value,
        userAge: pass.value
    }
    console.log(data);
    items.push(data)
    console.log(items);
    f()
    renderItems()
    postRequset(data)
}

let URL_FIREBASE = "https://todolist-1122b-default-rtdb.firebaseio.com/todo.json"


async function postRequset(obj){
    try {
        fetch(URL_FIREBASE, {
            method: "POST",
            body: JSON.stringify(obj)
        })
    } catch (error) {
        console.log(error);
    }
}
async function getRequset(){
    try {
        const response = await fetch(URL_FIREBASE)
        const result = await response.json()
        console.log(result);

        for(let key in result){
            console.log(result[key]);
            items.push(result[key])
        }
        renderItems()
        console.log(items);
    } catch (error) {
        console.log(error);
    }
}
getRequset()