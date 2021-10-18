
 let parent =document.getElementById('contianer');
 // let data = [];
 
 async function getNews(){
 
     try{
         let res = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c7dad099dbe3485fb4717ac27baa0aa9');
 
         let data = await res.json();
 
         console.log(data.articles);
         showNews(data.articles)
     }catch(e){
         console.log("Got an error" , e)
     }
 }
 getNews();
 
 
 function showNews(contianer){
 
     contianer.forEach((news)=>{
         let div = document.createElement("div");
 
         let author = document.createElement("p");
         author.innerText = news.author
 
         console.log(author);
         
        
         let url = document.createElement("p");
         url.innerText = news.url
 
         
         let content = document.createElement("p");
         content.innerText = news.content
 
         let title = document.createElement("p");
         title.innerText = news.title
 
       
         let description = document.createElement("p");
         description.innerText = news.description;
 
         div.append(url,author,title,content,description);
         parent.append(div)
 
     })
 }
 
 