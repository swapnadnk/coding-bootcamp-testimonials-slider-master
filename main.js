const content = [
    ["I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ", 
     "Tanya Sinclair",
     "UX Engineer",
     "./images/image-tanya.jpg"],
     ["If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
     "John Tarkpor",
     "Junior Front-end Developer",
     "./images/image-john.jpg"]
 ]

document.addEventListener("DOMContentLoaded", ()=>{
    // const innerContent = document.getElementsByClassName("innerContent")[0];
    // let p1 = document.createElement("p");
    // let textC = content[0][0];
    // p1.append(textC);
    // innerContent.appendChild(p1);
    // let p2 = document.createElement("p");
    // let pname = document.createElement("span");
    // let pnameText = content[0][1]+", ";
    // pname.append(pnameText);
    // pname.classList.add("pname");
    // let ptitle = document.createElement("span");
    // let ptitleText = content[0][2];
    // ptitle.append(ptitleText);
    // ptitle.classList.add("ptitle");
    // p2.append(pname);
    // p2.append(ptitle);
    // innerContent.appendChild(p2);
    // let pImg = document.getElementsByClassName("pImg")[0];
    // pImg.src = content[0][3];
    document.getElementsByClassName("pcontent")[0].innerHTML = content[0][0];
    document.getElementsByClassName("pname")[0].innerHTML = content[0][1]+", ";
    document.getElementsByClassName("ptitle")[0].innerHTML = content[0][2];
    document.getElementsByClassName("pImg")[0].src = content[0][3];
});

function previous(){
    document.getElementsByClassName("pcontent")[0].innerHTML = content[0][0];
    document.getElementsByClassName("pname")[0].innerHTML = content[0][1]+", ";
    document.getElementsByClassName("ptitle")[0].innerHTML = content[0][2];
    document.getElementsByClassName("pImg")[0].src = content[0][3];
}

function next(){
    document.getElementsByClassName("pcontent")[0].innerHTML = content[1][0];
    document.getElementsByClassName("pname")[0].innerHTML = content[1][1]+", ";
    document.getElementsByClassName("ptitle")[0].innerHTML = content[1][2];
    document.getElementsByClassName("pImg")[0].src = content[1][3];
}