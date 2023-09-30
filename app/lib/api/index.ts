const APIKEY = process.env.NEXT_PUBLIC_API_KEY;

/* const GUARDIANKEY = process.env.NEXT_PUBLIC_GUARDIAN_KEY */

const BASE_URL = 'https://newsapi.org/v2/everything?'

const TOP_NEWS_URL =
  'https://newsapi.org/v2/top-headlines?' + 'country=us&' + `apiKey=${APIKEY}`;

const SEARCH_NEWS = 'https://newsapi.org/v2/everything?' + `apiKey=${APIKEY}`;

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
  let search = +`&q=${searchquery}&pageSize=1`;
  const res = await fetch(SEARCH_NEWS + search, { cache: 'no-store' });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  return data;
};

export const getNewsByCategory = async (category:string) => {
  const res = await fetch(`${BASE_URL}apiKey=${APIKEY}&q=${category}&pageSize=10`, { cache: "force-cache" })
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
