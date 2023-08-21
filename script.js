const imageContainerEl = document.querySelector(".image-container")
const btnEl = document.querySelector(".btn")

btnEl.addEventListener("click", ()=>{
    imangeNum = 10;
    addNewImages();
})

const ImgArray = [];

function addNewImages()
{
    for (let index = 0; index < imangeNum; index++) {
        const newImgEl = document.createElement("img")
    newImgEl.src = `https://picsum.photos/300/300?random=${Math.floor(Math.random()*2000)}`
    console.log(newImgEl.src);
    ImgArray.push(newImgEl.src);
    console.log(ImgArray);
    imageContainerEl.appendChild(newImgEl);
    }
    
}