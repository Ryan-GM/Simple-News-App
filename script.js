const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        showNews(data.articles);
    } catch(error){
        console.error('There was an error!', error);
    }
}

function showNews(articles){
    const newsDiv = document.querySelector('#news');
    for(const article of articles){
        const articleDiv = document.createElement('div');

        // create and append a headline to the articleDiv
        const title = document.createElement('h4');
        title.textContent = article.title;
        articleDiv.appendChild(title);

        // use document.createElement and appendChild
        const description = document.createElement('p');
        description.textContent = article.description;
        articleDiv.appendChild(description);

        if(article.urlToImage){
            const image = document.createElement('img');
            image.src = article.urlToImage;
            image.alt = article.title;
            articleDiv.appendChild(image);
        }

        const link = document.createElement('a');
        link.href = article.url;
        link.textContent = 'Read More';
        articleDiv.appendChild(link);

        newsDiv.appendChild(articleDiv);

    }
}

fetchNews();