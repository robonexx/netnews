const APIKEY = process.env.NEXT_PUBLIC_API_KEY;

/* const GUARDIANKEY = process.env.NEXT_PUBLIC_GUARDIAN_KEY */

const BASE_URL = 'https://newsapi.org/v2/everything?'

const TOP_NEWS_URL =
  'https://newsapi.org/v2/top-headlines?' + 'country=us&' + `apiKey=${APIKEY}`;

const ENTERTAINMENT = 'https://newsapi.org/v2/top-headlines?country=us&category=entertainment'

const TECH = 'https://newsapi.org/v2/top-headlines?country=us&category=technology'
/* const THE_GUARDIAN = 'https://content.guardianapis.com/search?api-key=' */

export const getTopNews = async () => {
  const res = await fetch(TOP_NEWS_URL, { cache: 'no-store' });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  return data;
};

export const getNewsSearch = async (searchquery: string) => {
  let search = +`?q=${searchquery}&pageSize=1`;
  const res = await fetch(BASE_URL + search + `&sortBy=popularity&apiKey=${APIKEY}`, { cache: 'no-store' });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  return data;
};

export const getEntertainment = async () => {
  const res = await fetch(`${ENTERTAINMENT}&apiKey=${APIKEY}`, { cache: "force-cache" })
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export const getTech = async () => {
  const res = await fetch(`${TECH}&apiKey=${APIKEY}`, { cache: "force-cache" })
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

