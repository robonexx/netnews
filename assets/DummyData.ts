import { newsType } from '../lib/types/Types';

type NewsArray = newsType[];

export const dummyNews: NewsArray = [
  {
    author: 'BusinessWorld',
    description:
      'Philippine annual inflation further slowed for a third straight month in April, as prices of food, transport, and utilities continued to ease.',
    urlToImage:
      'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    publishedAt: '2023-05-07T12:12:50Z',
    source: { id: 'bb', name: 'bb' },
    title: 'Headline inflation rates in the Philippines',
    url: 'https://www.bworldonline.com/infographics/2023/05/07/521351/headline-inflation-rates-in-the-philippines-17/',
    content:
      'Yes, there was drama and conniving on the first night of "The Golden Bachelor."\r\n' +
      'For those who feared the behind-the-back intrigue, melodrama and just plain oddness of past seasons would be missing w… [+5718 chars]',
  },
  {
    source: { id: 'usa-today', name: 'USA Today' },
    author: 'Bryan Alexander',
    title:
      "'Golden Bachelor' recap: Who got Gerry Turner's roses night one? - USA TODAY",
    description: `What happened in the First Night of ABC's "Golden Bachelor." Gerry Turner, 72, met 22 candidates? But who touched his heart and received roses?`,
    url: 'https://www.usatoday.com/story/entertainment/tv/2023/09/28/the-golden-bachelor-premiere-recap/70986727007/',
    urlToImage:
      'https://www.usatoday.com/gcdn/authoring/authoring-images/2023/09/28/USAT/70988517007-170002-52831.jpg?crop=2999,1687,x0,y156&width=2999&height=1687&format=pjpg&auto=webp',
    publishedAt: '2023-09-29T01:02:59Z',
    content:
      'Yes, there was drama and conniving on the first night of "The Golden Bachelor."\r\n' +
      'For those who feared the behind-the-back intrigue, melodrama and just plain oddness of past seasons would be missing w… [+5718 chars]',
  },
  {
    source: { id: 'CNBC', name: 'CNBC' },
    author: 'Michael Wayland, John Rosevear',
    title:
      'Automakers grow frustrated over pace of UAW negotiations as new deadline looms - CNBC',
    description:
      'Frustrations remain around key economic demands and what some see as a lack of urgency by the union to reach a deal, according to people familiar.',
    url: 'https://www.cnbc.com/2023/09/28/uaw-negotiations-automakers-grow-frustrated-as-new-deadline-looms.html',
    urlToImage:
      'https://image.cnbcfm.com/api/v1/image/107306845-16957484112023-09-26t170415z_298265287_rc2hg3a9lwts_rtrmadp_0_autos-labor-uaw-biden.jpeg?v=1695946354&w=1920&h=1080',
    publishedAt: '2023-09-29T00:12:00Z',
    content:
      "Striking members of the United Auto Workers (UAW) picket outside the GM's Willow Run Distribution Center, in Bellville, Wayne County, Michigan, U.S., September 26, 2023.\r\n" +
      'DETROIT Tensions are rising … [+5609 chars]',
  },
  {
    source: { id: 'axios', name: 'Axios' },
    author: 'Axios',
    title:
      'Trump halts plans to request Georgia case move to federal court - Axios',
    description: 'blablabl',
    url: 'https://www.axios.com/2023/09/28/trump-georgia-rico-federal-court',
    urlToImage:
      'https://images.pexels.com/photos/2146358/pexels-photo-2146358.jpeg?auto=compress&cs=tinysrgb&w=1600',
    publishedAt: '2023-09-28T23:10:04Z',
    content: 'sh gjsh lsj fkls ',
  },
  {
    source: { id: 'reuters', name: 'Reuters' },
    author: 'Reuters',
    title: 'Health and Wellness: Latest Research Findings for a Better Life',
    description: 'Discover the latest breakthroughs in health and wellness.',
    url: 'https://www.axios.com/2023/09/28/new-tech-developments-breakthroughs',
    urlToImage:
      'https://images.pexels.com/photos/2146358/pexels-photo-2146358.jpeg?auto=compress&cs=tinysrgb&w=1600',
    publishedAt: '2023-09-28T08:05:45Z',
    content: 'Content for news item 2.',
  },
  {
    source: { id: 'cnn', name: 'CNN' },
    author: 'CNN',
    title: 'Space Exploration: New Missions Set to Expand Human Understanding',
    description: 'Journey into the cosmos with upcoming space missions.',
    url: 'https://www.axios.com/2023/09/28/climate-change-agreement-world-leaders-unite',
    urlToImage:
      'https://images.pexels.com/photos/2146358/pexels-photo-2146358.jpeg?auto=compress&cs=tinysrgb&w=1600',
    publishedAt: '2023-09-28T11:20:30Z',
    content: 'Content for news item 3.',
  },
  {
    source: { id: 'ap', name: 'Associated Press' },
    author: 'Associated Press',
    title:
      'Trump halts plans to request Georgia case move to federal court - Axios',
    description: 'Blah blah blah 2',
    url: 'https://www.axios.com/2023/09/28/space-exploration-new-missions-expand-human-understanding',
    urlToImage:
      'https://images.pexels.com/photos/2146358/pexels-photo-2146358.jpeg?auto=compress&cs=tinysrgb&w=1600',
    publishedAt: '2023-09-28T23:10:04Z',
    content: 'Content for news item 4.',
  },
  {
    source: { id: 'guardian', name: 'The Guardian' },
    author: 'The Guardian',
    title:
      'Climate Change Agreement: World Leaders Unite for a Sustainable Future',
    description: 'Global efforts to combat climate change intensify.',
    url: 'https://www.axios.com/2023/09/28/health-wellness-latest-research-findings',
    urlToImage:
      'https://images.pexels.com/photos/2146358/pexels-photo-2146358.jpeg?auto=compress&cs=tinysrgb&w=1600',
    publishedAt: '2023-09-28T14:45:02Z',
    content: 'Content for news item 5.',
  },
];
