let parent = document.getElementById("contianer2")
let data =[]


function getsearchNews(news){
       

        let div = document.createElement("div");
        div.setAttribute("class" ,"inner_div")
      
        let author = document.createElement("p");
        author.innerText = news.author;

        console.log(author);
        
       
        let urlToImage = document.createElement("img");
        urlToImage.src = news.urlToImage;

        let title = document.createElement("h2");
        title.innerText = news.title

      
        let description = document.createElement("p");
        description.innerText = news.description;

       
        let  publishedAt = document.createElement("p");
        publishedAt.innerText = news.publishedAt;

        div.append(urlToImage,title,author, publishedAt ,description);

        parent.append(div);

    }

    getsearchNews(data);