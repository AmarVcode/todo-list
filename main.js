letmapped()

function del(i){
    console.log(i)

    let arr = localStorage.getItem("todos");
    arr=JSON.parse(arr)
    arr.splice(i,1)
    arr=JSON.stringify(arr)
    localStorage.setItem("todos",arr)
    
    letmapped()

}

function done(i){
    del(i)
let n=localStorage.getItem("dones");
let num=n||0;
num=Number(num)
num=num+1;
document.getElementById("done").innerText=num
localStorage.setItem("dones",num)

}

function letmapped(){

    let l=localStorage.getItem("todos");
    let div = document.getElementById("showtodo");
    div.innerHTML=null
    l=JSON.parse(l)
    l.map((elem,i)=>{

        let md=document.createElement("div")
        let d=document.createElement("h2")
        d.innerText=elem

        let fdiv=document.createElement("div")
fdiv.classList.add("flexbtn")

        let done=document.createElement("button")
        done.innerText="Done"
        donen="done("+i+")"
        done.setAttribute("onclick",donen)

        let del=document.createElement("button")
        del.innerText="Delete"
        deln="del("+i+")"
        del.setAttribute("onclick",deln)


fdiv.append(done,del)


        md.append(d,fdiv)
        
        div.append(md)
    })
}





function storeDataLocal(t){
    
    let l=localStorage.getItem("todos");
    l=JSON.parse(l)
    let ltodo=l||[]
   
if(ltodo.length !== 0){
    if(ltodo.includes(t)===false){
        ltodo.push(t)
       
    }
    
}
else{
    ltodo.push(t)
}



    // console.log(ltodo)
    ltodo=JSON.stringify(ltodo)
    localStorage.setItem("todos",ltodo)

    letmapped()
}











function add(){
    let todo=document.getElementById("display").value;
    if(todo === ""){
        alert("Write a Valid Todo")
        return false
    }
    else{
        storeDataLocal(todo)
    }
}