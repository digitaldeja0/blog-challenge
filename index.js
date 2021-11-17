fetch('https://apis.scrimba.com/jsonplaceholder/posts')
  .then(response => response.json())
  .then(data => {
    const postsList = data.slice(0,5)
    console.log(postsList)

    function appendData(data){

        let container = document.getElementById('container')
        for (var i = 0; i< 6 ;i++){
            var div = document.createElement('div');
            div.innerHTML = 'title: '+ data[i].title + 'post: ' + data[i].body;
            container.appendChild(div);
        }
    }
    appendData(data);
  })

let container = document.getElementById('container')
console.log(container);

container.innerHTML = `Hello world, this is my post! <br> I'm DJ`;

