const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        showNews(data);
    } catch(error){
        console.error('There was an error!', error);
    }
}