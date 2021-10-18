let parent = document.getElementById("contianer2")

async function searchNews(){

        try{
            let query = document.getElementById("query").value;

            let res = await fetch(`https://newsapi.org/v2/top-headlines?sources=${query}&apiKey=c7dad099dbe3485fb4717ac27baa0aa9`);

            let data = await res.json();

            getsearchNews(data.articles)
            console.log(data.articles)
        }catch(e){
            console.log('Got an error',e);
        }

}

function getsearchNews(news){
       

        let div = document.createElement("div");
        div.setAttribute("class" ,"inner_div")
      
        let author = document.createElement("p");
        author.innerText = news.author;

        //console.log(author);
        
       
        let urlToImage = document.createElement("img");
        urlToImage.src = news.urlToImage;

        let title = document.createElement("h2");
        title.innerText = news.title

      
        let description = document.createElement("p");
        description.innerText = news.description;

       
        let  publishedAt = document.createElement("p");
        publishedAt.innerText = news.publishedAt;



    

        div.append(urlToImage,title,author, publishedAt ,description);

        parent.append(div)

    }
