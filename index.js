const submitBtn = document.getElementById('form-button')


fetch('https://apis.scrimba.com/jsonplaceholder/posts')
  .then(response => response.json())
  .then(data => {
    const postsList = data.slice(0,5)
    let html = ''
    for(let post of postsList){
      html+=`
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <hr/>
      `
    }
    document.getElementById('container').innerHTML = html
  }) 



  // Form Submit 
 submitBtn.addEventListener('click',function(e){
  const titleValue = document.getElementById('post-title').value
  const bodyValue = document.getElementById('post-body').value

  const data = {
    title: titleValue,
    body: bodyValue
  }
   console.log(data);

   e.preventDefault()
  });




