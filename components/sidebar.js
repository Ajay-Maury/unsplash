function sidebar(){
    return `<a href="index.html" id="logo" ><i class="fa-brands fa-unsplash"></i></a>
    <p>Menu</p>
    <input type="text" placeholder="Search free photos here" id="serch">
    <p>Signup</p>
    <p>Login</p>
    <p>API</p>`;
}

async function getdata(url){
    let data = await fetch(url)
    let res = await data.json();
    // console.log("data : ",res)
    return res;
}

function showData(d,parent)
{
    parent.innerHtml = ""
    console.log("d",d)
    d.forEach(element => {
        let frame = document.createElement("div")

        let image_div = document.createElement("div")
        let image = document.createElement("img")
        
        console.log(element.urls.small)
        if(element.urls.small == undefined)
        {
            image.src = element.urls.small            
        }
        image.src = element.urls.small
        image_div.append(image)
        
        let user = document.createElement("p")
        user = `${element.user.first_name} ${element.user.last_name}`

        frame.append(image_div,user)
        parent.append(frame)
    });
}

export {sidebar,getdata,showData}