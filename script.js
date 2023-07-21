const todo = [
    {
        name:"Reading article",
        status:false,
    },
    {
        name:"Playing football",
        status:false,
    }
]

let [month, date, year ,] = new Date().toLocaleDateString("en-US").split("/");
let day = new Date()
const Month = (month) => {
   switch(month){
    case 1 : return ("JAN")  ;
    case 2 : return ("FEB") ;
    case 3 : return ("MAR")  ;
    case 4 : return ("APR") ;
    case 5 : return ("MAY")  ;
    case 6 : return ("JUN") ;
    case 7 : return ("JUL")  ;
    case 8 : return ("AUG") ;
    case 9 : return ("SEP")  ;
    case 10 : return ("OCT") ;
    case 11 : return ("NOV")  ;
    case 12 : return ("DEC") ;
    default: return 'ERROR'
   }
}

const DAY = (day) => {
    console.log(day)
    switch (day) {
        case 0:
          return ("Sunday");
        
        case 1:
          return ("Monday");
        
        case 2:
          return ("Tuesday");
        
        case 3:
          return ("Wednesday");
        
        case 4:
          return ("Thursday");
        
        case 5:
          return ("Friday");
        
        case 6:
          return ("Saturday");
}
}
//console.log(DAY(day.getDate()))
document.getElementById('month').innerText=Month(parseFloat(month))
document.getElementById('date').innerText=date
document.getElementById('year').innerText = year
document.getElementById('day').innerText = DAY(parseFloat(day.getDay()))
  




document.getElementById("add").addEventListener('click',() => {
    document.getElementById('INPUT').classList.toggle('Show')
})
const status = (id) => {
 document.getElementById(id +'icon').style.background='#2ad22a'
 document.getElementById(id +'text').style.color='gray'
 document.getElementById(id + 'text').style.textDecoration = "line-through";
}
document.getElementById('button').addEventListener('click' , () => {
    todo.push ({
        name: document.getElementById('TODO').value,
        status:false,
    })
    console.log(todo)

    document.getElementById("TODOS").innerHTML +=`   <div class="todo" id=${todo.length} onclick="status(${todo.length})">
                                                    <p id=${todo.length + 'text'}>${document.getElementById('TODO').value}</p>
                                                    <span class="icon" id=${todo.length + 'icon'}></span>
                                                </div>
`
})