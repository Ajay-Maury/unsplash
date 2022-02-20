import {sidebar,getdata,showData} from "../components/sidebar.js"

document.getElementById("sidebar").innerHTML = sidebar()
let url = `https://api.unsplash.com/photos/?client_id=CiUHdv8t1CZ0RdkGWvepkPXZAFaWvFZNgM7IyR5o0ME`
let res = getdata(url)
res = await res
// console.log("res",res)
let parent = document.getElementById("main")
showData(res,parent)
document.getElementById("serch").addEventListener("keypress",(e)=>{
    if(e.key == "Enter")
    {
        let inp = document.getElementById("serch").value;
        localStorage.setItem("Serch_Item",inp)
        
        window.location.href = "./search.html"
        
    }
})