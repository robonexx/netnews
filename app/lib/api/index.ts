const APIKEY = process.env.NEXT_PUBLIC_GUARDIAN_KEY;

/* const GUARDIANKEY = process.env.NEXT_PUBLIC_GUARDIAN_KEY */
/* const THE_GUARDIAN = 'https://content.guardianapis.com/search?api-key=' */

const BASE_URL_GUARDIAN = 'https://content.guardianapis.com/search'

const TOP_GUARDIAN_NEWS = `https://content.guardianapis.com/search?star-rating=5&page-size=6&show-fields=trailText,thumbnail&show-tags=keyword&api-key=${APIKEY}`;

const TEST = `https://content.guardianapis.com/sport/2022/oct/07/cricket-jos-buttler-primed-for-england-comeback-while-phil-salt-stays-focused?api-key=${APIKEY}`

// const GUARDIAN_SEARCH = `https://content.guardianapis.com/search?q=${query}&page-size=18&show-fields=trailText,thumbnail&show-tags=keyword&api-key=${APIKEY}`

const BASE_URL = `https://newsapi.org/v2/everything?apiKey=${APIKEY}`

// for space in query %20
//  query = search_query.replace(' ', '%20')

const TOP_NEWS_URL =
  `https://newsapi.org/v2/top-headlines?country=us`;

const ENTERTAINMENT = 'https://newsapi.org/v2/top-headlines?country=us&category=entertainment'

const TECH = 'https://newsapi.org/v2/top-headlines?country=us&category=technology'

const HEALTH = 'https://newsapi.org/v2/top-headlines?country=us&category=health'

const ROBOT_URL = 'https://newsapi.org/v2/top-headlines?q=robot';

const GENERAL_NEWS = 'https://newsapi.org/v2/top-headlines?country=us&category=general';



export const getTopGuardianNews = async () => {
  const res = await fetch(`${TOP_GUARDIAN_NEWS}`, {  cache: "no-store" });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  return data;
};

export const getTopNews = async () => {
  const res = await fetch(`${TOP_NEWS_URL}&apiKey=${APIKEY}&pageSize=15`, {  cache: "force-cache" });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  return data;
};

export const getNewsSearch = async (search: string | null, controller?: AbortController) => {
  const signal = controller ? controller.signal : undefined;
  try {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?apiKey=${APIKEY}&q=${search}&pageSize=15)`, { signal, cache: 'force-cache' });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data;
  } catch (error: any) {
    if (controller && controller.signal.aborted) {
      // Request was aborted, you can handle this as needed
      console.log('Request aborted:', error.message);
    } else {
      throw error; // Rethrow other errors
    }
  }
};

export const getEntertainment = async () => {
  const res = await fetch(`${ENTERTAINMENT}&apiKey=${APIKEY}`, { cache: "force-cache" })
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  return data
}

export const getTech = async () => {
  const res = await fetch(`${TECH}&apiKey=${APIKEY}`, { cache: "force-cache" })
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  return data
}

export const getHealth = async () => {
  const res = await fetch(`${HEALTH}&apiKey=${APIKEY}`, { cache: "force-cache" })
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  return data
}

export const getRobotNews = async () => {
  const res = await fetch(`${ROBOT_URL}&apiKey=${APIKEY}`, { cache: "force-cache" });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  return data;
};

export const getGenNews = async () => {
  const res = await fetch(`${GENERAL_NEWS}&apiKey=${APIKEY}`, { cache: "force-cache" });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  return data;
};

