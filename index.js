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


  // Menu Interactivity

