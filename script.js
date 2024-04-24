const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
let currentPage = 1;
let searchQuery = '';
let category = '';

async function fetchNews(){
    try{
        const url = `${baseUrl}?country=us&page=${currentPage}&q=${searchQuery}&category=${category}&apiKey=${apiKey}`;
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
    newsDiv.innerHTML = ''; // removing content within the element

    for(const article of articles){
        const articleDiv = document.createElement('div');
        articleDiv.className = 'card mb-3'; // using bootstrap classes
        
        // appending a card-body
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        articleDiv.appendChild(cardBody);

        // create and append a headline to the articleDiv
        const title = document.createElement('h4');
        title.textContent = article.title;
        title.className = 'card-title';
        cardBody.appendChild(title);

        // use document.createElement and appendChild
        const description = document.createElement('p');
        description.textContent = article.description;
        description.className = 'card-text';
        cardBody.appendChild(description);

        if(article.urlToImage){
            const image = document.createElement('img');
            image.src = article.urlToImage;
            image.className = 'card-img-top';
            image.alt = article.title;
            articleDiv.appendChild(image);
        }

        const link = document.createElement('a');
        link.href = article.url;
        link.textContent = 'Read More';
        link.className = 'btn btn-danger';
        cardBody.appendChild(link);

        newsDiv.appendChild(articleDiv);

    }
}

fetchNews();