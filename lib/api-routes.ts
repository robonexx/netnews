const APIKEY = process.env.NEXT_PUBLIC_APIKEY;

/* const GUARDIANKEY = process.env.NEXT_PUBLIC_GUARDIAN_KEY */
/* const THE_GUARDIAN = 'https://content.guardianapis.com/search?api-key=' */

// to get body text the content - show-fields=bodyText

const BASE_URL_GUARDIAN = 'https://content.guardianapis.com/search';

const TOP_GUARDIAN_NEWS = `https://content.guardianapis.com/search?q=news&order-by=newest&page-size=8&show-tags=contributor&show-fields=headline,thumbnail,trailText&api-key=${APIKEY}`;


// I put this inside the getSearch method
// const GUARDIAN_SEARCH = `https://content.guardianapis.com/search?q=${query}&page-size=18&show-fields=trailText,thumbnail&show-tags=keyword&api-key=${APIKEY}`

const TECH_URL = `http://content.guardianapis.com/search?page-size=10&order-by=newest&section=technology&show-fields=headline,thumbnail,trailText&q=technology%20AND%20computer&api-key=${APIKEY}`;
const AI_URL = `https://content.guardianapis.com/search?page-size=10&order-by=newest&show-fields=headline,thumbnail,trailText&q=ai%20AND%20robots&api-key=${APIKEY}`;
const HEALTH_URL = `https://content.guardianapis.com/search?page-size=10&section=lifeandstyle&show-fields=headline,thumbnail,trailText&q=health%20AND%20longevity&api-key=${APIKEY}`;
const ENTERTAINMENT_URL = `https://content.guardianapis.com/search?page-size=10&order-by=newest&show-fields=headline,thumbnail,trailText&q=entertainment%20AND%20movies&api-key=${APIKEY}`;

// for space in browswer %20 used by many apis

/* show-elements=image&show-fields=bodyText,body,headline,thumbnail&show-tags=contributor,publication */

// search articles I use abortcontroller

export const getNewsSearch = async (
  search: string | null,
  controller?: AbortController
) => {
  const signal = controller ? controller.signal : undefined;
  try {
    const res = await fetch(
      `https://content.guardianapis.com/search?q=${search}&page-size=12&show-fields=trailText,thumbnail&show-tags=keyword&api-key=${APIKEY}`,
      { signal, cache: 'force-cache' }
    );

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

// the rest I just did a simple check of if res is ok, could use try catch would be better
// and everything would be working flawless with something like SWR or React Query, Axios is ok too

export const getSingleArticle = async (id: string) => {
  const res = await fetch(`https://content.guardianapis.com/${id}?show-fields=bodyText,body,headline,thumbnail,trailText&show-tags=contributor,publication&api-key=${APIKEY}`, { cache: 'no-store' });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data;
};

export const getTopGuardianNews = async () => {
  const res = await fetch(`${TOP_GUARDIAN_NEWS}`, { cache: 'no-store' });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const data = await res.json();
  return data;
};

export const getEntertainment = async () => {
  const res = await fetch(`${ENTERTAINMENT_URL}`, { cache: 'no-store' });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const data = await res.json();
  return data;
};

export const getTech = async () => {
  const res = await fetch(`${TECH_URL}`, { cache: 'no-store' });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const data = await res.json();
  return data;
};

export const getHealth = async () => {
  const res = await fetch(`${HEALTH_URL}`, { cache: 'no-store' });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const data = await res.json();
  return data;
};

export const getAINews = async () => {
  const res = await fetch(`${AI_URL}`, { cache: 'no-store' });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const data = await res.json();
  return data;
};
