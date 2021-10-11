//ApiKey 
// 2ab72fb8a546434db369d92f3c5ead49
//Get HeadLines from US
// https://newsapi.org/v2/top-headlines?country=us&apiKey=2ab72fb8a546434db369d92f3c5ead49
// Get headlines from India
// http://newsapi.org/v2/top-headlines?country=in&apiKey=2ab72fb8a546434db369d92f3c5ead49

document.getElementById('btn1').addEventListener('click', getDataIn);
document.getElementById('btn2').addEventListener('click', getDataUs);

function getDataIn() {
   axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=2ab72fb8a546434db369d92f3c5ead49')
        .then((res) => {
            console.log(res);
            let latestNews = res.data.articles;
         //   console.log(latestNews);
            var newsContent = '';
           
            for (var i in latestNews) {
            newsContent +=
        
            `<div class="newsContent">
         <div class="card-image">
         <img  src="${latestNews[i].urlToImage}">
         </div>
         <div class="card-title">
         <h2>${latestNews[i].title}</h2>
         </div>
         <div class="card-des">
         <p>${latestNews[i].description}</p>
         </div>
         <div class="btn">
         <a href="${latestNews[i].url}">READ MORE</a>
         </div>
         </div>`; }
         document.getElementById('box').innerHTML = newsContent; 
        }).catch(err=> console.log(err));
}

function getDataUs(){
    axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=2ab72fb8a546434db369d92f3c5ead49')
        
        .then((data) => {
            console.log(data);
            var newsContent = '';
            let latestNews = data.data.articles;
            console.log(latestNews)
            for (var i in latestNews) {
                newsContent +=
                    `<div class= "container">
                    <div class="newsContent">
         
                  <div class="card-image">
         <img  src="${latestNews[i].urlToImage}">
         </div>
         <div class="card-title">
         <h2>${latestNews[i].title}</h2>
         </div>
         <div class="card-des">
         <p>${latestNews[i].description}</p>
         </div>
         <div class="btn">
         <a href="${latestNews[i].url}">READ MORE</a>
         </div>
         </div>
         </div>`;
            }
             document.getElementById('box').innerHTML = newsContent;
        }).catch(err=> console.log(err));
   }
