var ico=document.getElementsByClassName("fa-trash-alt")
for(var i=0;i<ico.length;i++)
{
    ico[i].addEventListener("click",suprimer)
}
function suprimer(){
    var c=confirm("wax baghi tmhi hada")
    if(c){
        this.parentElement.remove()
    }
}
document.getElementById("btn1").addEventListener("click",ajouter)
function ajouter(){
    var te=document.getElementById("text").value.trim()
    if(te!=""){
    document.getElementById("add").innerHTML+='<li class="list-group-item"><span contenteditable>'+te+'</span> <i class="fas fa-trash-alt bg-pink"></i><i class="fas fa-user-edit"></i></li>'
    document.getElementById("text").value=""
    }else{
        alert("chaine est vide !!")
    }
}
document.getElementById("search").addEventListener("keyup",chercher)
function chercher()
{
    var cle=this.value.trim().toLowerCase()
    var tasks=document.getElementsByTagName("span")
    for(var i=0;i<tasks.length;i++)
    {
        if(!tasks[i].textContent.toLocaleLowerCase().includes(cle))
        {
            tasks[i].parentElement.style.display="none"
        }else{
            tasks[i].parentElement.style.display="block"

        }
    }

    console.log(tasks)
}
