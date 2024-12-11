function upDate(previewPic)
{   console.log("src: ",previewPic.src,"     alt:",previewPic.alt);
    document.getElementById("image").innerHTML="";
    
document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";

document.getElementById("image").innerHTML=previewPic.alt;

}
let originalImageURL = "url('img/D3D3D3.png.png')";
function unDo(){
    document.getElementById("image").innerHTML="hover a number below to display it here";
    document.getElementById("image").style.backgroundImage = originalImageURL;



}