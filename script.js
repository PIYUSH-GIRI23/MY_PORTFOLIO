downloadResume=()=>{
    const resumeUrl = 'pictures/resume.pdf';
    const downloadLink = document.createElement('a');
    downloadLink.href = resumeUrl;
    downloadLink.setAttribute('download', 'resume.pdf');
    downloadLink.click();
}
const resumeButton = document.querySelector('#resumeButton');
resumeButton.addEventListener('click', downloadResume);
const submits=document.body.querySelector('#submit');
submits.addEventListener('click',()=>{
    console.log('hello');
    document.body.querySelector('#alerts').insertAdjacentHTML('afterbegin',`
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Thanks!</strong> We will reach You soon
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `)
})
// const arr=["HELLO,MY NAME IS PIYUSH GIRI","I AM A WEB DEVELOP AND CODING ENTHUSIAST","I STUDY IN BPIT"];
// const a=document.body.querySelector('#copulate');
// let i;
// i=0;
// arr.forEach((e)=>{
//     while(i<e.length){
//         setTimeout(()=>{
//             a.insertAdjacentElement(e[i]);
//             i++;
//         },2000);
//     }
// })
const textElement = document.getElementById('typewriter');
  const text = textElement.innerText;
  const textLength = text.length;
  let currentLength = 0;

  function typeText() {
    textElement.textContent = text.substr(0, currentLength);
    currentLength = (currentLength + 1) % (textLength + 1);
  }

  setInterval(typeText, 100);