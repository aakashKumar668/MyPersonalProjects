const API = "https://newsapi.org/v2/top-headlines?sources=bbc-news&language=en&apiKey=6c1aff7bc31847a88bca94204beab55a"

const fetchNews = async (data) => {
  const response = await fetch(data);
  const result = await response.json();
  const resultdata = result.articles;

  const filterdata = resultdata.filter(
    (obj) => obj.description !== null && obj.description !== "[Removed]"
    // console.log(obj.description)
  );
  // console.log(filterdata);

  showNews(filterdata);
};
fetchNews(API);

const showNews = (data) => {
  data.forEach((headline) => {
    const longString = headline.title;
    const words = longString.split(" ");
    const title = words.slice(0, 3).join(" ");

    const article = document.createElement("article");
    article.classList = "article";
    article.innerHTML = `<div class="article-wrapper">
                  <figure>
                      <img src="${headline.urlToImage}" alt="" />
                  </figure>
                  <div class="article-body">
                      <h2>${title}</h2>
                      <p>
                         ${headline.description}
                      </p>
                      <a href="#" class="read-more">
                          Read more <span class="sr-only">about this is some title</span>
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20"
                              fill="currentColor">
                              <path fill-rule="evenodd"
                                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                  clip-rule="evenodd" />
                          </svg>
                      </a>
                  </div>
              </div>`;

    document.querySelector(".articles").appendChild(article);
  });
};
