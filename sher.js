const inp = document.getElementById("inp")
const inp1 = document.getElementById("inp1")
const addBtn = document.getElementById("button")
// const div = document.getElementById("div")
const ul = document.getElementById("ul")

addBtn.addEventListener("click",addText)

// function addText() {
//     const Text = inp.value
//     const h1 = document.createElement("h1")
//     h1.innerHTML = Text
//     div.append(h1)

//     console.log(Text);
// }

const items = [
    {
      userName: "Asam",
      userAge: 23,
    },
    {
      userName: "Uson",
      userAge: 33,
    },
    {
      userName: "Erkin",
      userAge: 44,
    },
]

function renderItems(){
    ul.innerHTML = ""
items.map((el)=>{

    const li = document.createElement("li");
    const p = document.createElement("p")
    const p2 = document.createElement("p")
    
    p.innerHTML = el.userName
    p2.innerHTML = el.userAge
    li.append(p)
    li.append(p2)

    ul.append(li)
    console.log(ul);
})
}


// renderItems()


function addText() {
    const data = {
    userName: inp.value,
    userAge:  inp1.value,

}
   items.push(data)
   renderItems();
   console.log(data);
}
addText()