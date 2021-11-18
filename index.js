const submitBtn = document.getElementById('form-button')
const form = document.getElementById("form")
let postsList = []

function postRender(){
  let html = ''
    for(let post of postsList){
      html+=`
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <hr/>
      `
    }
    document.getElementById('container').innerHTML = html
}


// Add API Data to display via the HTML document
fetch('https://apis.scrimba.com/jsonplaceholder/posts')
  .then(response => response.json())
  .then(data => {
    postsList = data.slice(0,5)
    postRender()
  }) 



  // Form Submit and Post Request Operations
 submitBtn.addEventListener('click',function(e){
  const titleValue = document.getElementById('post-title').value
  const bodyValue = document.getElementById('post-body').value

  const data = {
    title: titleValue,
    body: bodyValue
  }
   fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
     method:'POST',
     body: JSON.stringify(data),
     headers:{'Content-Type': 'application/json'}
   })

    .then(res=> res.json())
    .then(data=> {
      postsList.unshift(data)
      postRender()

    })

   e.preventDefault()
   form.reset();
  });




