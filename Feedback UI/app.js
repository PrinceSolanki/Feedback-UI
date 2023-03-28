const ratingEls = document.querySelectorAll(".rating");
const containerEl = document.querySelector("#container");
const btnEl = document.getElementById("btn");
const rotate = document.getElementsByClassName("rotate");
let selectedratingEl = "";
ratingEls.forEach((ratingEl) =>{
    ratingEl.addEventListener("click",(event)=>{
        removeActive();
        selectedratingEl = event.target.innerText||event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    });
});
btn.addEventListener("click",()=>{
    if(selectedratingEl!==""){
        containerEl.style.transform="rotateY(360deg)";
        containerEl.innerHTML=`
        <strong>Thank You</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedratingEl}</strong>
        <br><br>
        <p>We'll use your feedback to improve our customer support.</p>
        `;
    }
});
function removeActive() {
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    })
}