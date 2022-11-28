document.querySelector('.search-icon').addEventListener('click',()=>{
    const xhr = new XMLHttpRequest();
    const searchValue = document.getElementById('search').value;
    
    const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBwyS06wC4v_VOu-wsyt7_hnBXs6SOwspU&part=snippet&q=${searchValue}&maxResults=50`;

    xhr.open('GET', url);

    xhr.onreadystatechange = () => {
         if(xhr.status === 200 && xhr.readyState === 4){
              const response = JSON.parse(xhr.responseText);
              console.log(response);
            
              let template = '';
              for(let i=0; i<response.items.length;i++){
                  template += `
                    <div class='div-items'>
                      <a href="https://www.youtube.com/watch?v=${response.items[i].id.videoId}" target="_blank">
                         <img style="width: 100%;" src="${response.items[i].snippet.thumbnails.high.url}">
                      </a>
                      <h4 style="color:white">${response.items[i].snippet.title} </h4>
                      <p style="color:grey">${response.items[i].snippet.description} </p>
                    </div>
                  `
              }
            
            document.querySelector('.my-container').innerHTML = template;

         }
    }


    xhr.send();
})
