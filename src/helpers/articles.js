import axios from '../services/axios';
import ENDPOINTS from '../constants/endpoints';

export const getArticles = async params => {
  try {
    const { data } = await axios.get(ENDPOINTS.GET_ARTICLES, {
      params,
    });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
export const deleteArticle = async slug => {
  try {
    await axios.delete(`${ENDPOINTS.GET_ARTICLES}/${slug}`);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getArticleDetails = async slug => {
  try {
    const { data } = await axios.get(`${ENDPOINTS.GET_ARTICLES}/${slug}`);
    return data.article;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const publishArticle = async form => {
  try {
    const { data } = await axios.post(ENDPOINTS.GET_ARTICLES, {
      article: form,
    });
    return data.article;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateArticle = async form => {
  try {
    const { data } = await axios.put(`${ENDPOINTS.GET_ARTICLES}/${form.slug}`, {
      article: form,
    });
    return data.article;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const likeArticle = async slug => {
  try {
    const { data } = await axios.post(
      `${ENDPOINTS.GET_ARTICLES}/${slug}/${ENDPOINTS.FAVORITED}`
    );
    return data.article;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const unlikeArticle = async slug => {
  try {
    const { data } = await axios.delete(
      `${ENDPOINTS.GET_ARTICLES}/${slug}/${ENDPOINTS.FAVORITED}`
    );
    return data.article;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getTags = async () => {
  try {
    const { data } = await axios.get(`${ENDPOINTS.TAGS}`);
    return data.tags;
  } catch (error) {
    return Promise.reject(error);
  }
};
