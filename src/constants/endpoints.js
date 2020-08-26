const DEV = {
  BASE_URL: '',
  ARTICLES: {
    GET: 'api/articles.json',
    CREATE: '',
    DELETE: '',
  },
};

const PROD = {
  BASE_URL: 'https://conduit.productionready.io/api/',
  GET_ARTICLES: 'articles',
  GET_USER: 'user',
  GET_USERS: 'users',
  USERS: {
    LOGIN: 'users/login',
  },
  FAVORITED: 'favorite',
  TAGS: 'tags',
};

export default process.env.NODE_ENV !== 'development' ? DEV : PROD;
