type NewsItem = {
    author: string | null;
    category: string;
    country: string;
    description: string;
    image: string | null;
    language: string;
    published_at: string;
    source: string;
    title: string;
    url: string;
}

type NewsArray = NewsItem[]
  
export const dummyNews: NewsArray = [
        {
          author: 'BusinessWorld',
          category: 'general',
          country: 'us',
          description: 'Philippine annual inflation further slowed for a third straight month in April, as prices of food, transport, and utilities continued to ease.',
          image: 'https://www.bworldonline.com/wp-content/uploads/2023/05/230508Inflation_Core-thumb-300x169.jpg',
          language: 'en',
          published_at: '2023-05-07T12:12:50Z',
          source: 'bworldonline',
          title: 'Headline inflation rates in the Philippines',
          url: 'https://www.bworldonline.com/infographics/2023/05/07/521351/headline-inflation-rates-in-the-philippines-17/'
        },
        {
          author: null,
          category: 'general',
          country: 'us',
          description: 'SEREMBAN (May 7): The Unity Government needs to demonstrate leadership to ensure today&#8217;s administration is strong and the economy is stable, said Prime Minister Datuk Seri Anwar Ibrahim. He said if the government is unstable and the economy is weak, the country, especially the people will suffer. &#8220;This evening the chairman of Geely, one of [...]',
          image: 'https://www.theborneopost.com/newsimages/2023/05/anwar-ibrahim-1.jpg',
          language: 'en',
          published_at: '2023-05-07T12:12:47Z',
          source: 'theborneopost',
          title: 'Unity govt must demonstrate leadership to stabilise economy, says PM Anwar',
          url: 'https://www.theborneopost.com/2023/05/07/unity-govt-must-demonstrate-leadership-to-stabilise-economy-says-pm-anwar-2/'
        },
        {
          author: 'Paul Tassi, Senior Contributor',
          category: 'general',
          country: 'us',
          description: 'While HBO’s House of the Dragon is reportedly script-ready and good to go, Netflix’s crown jewel, Stranger Things, will delay season 5 due to the writer’s strike. The noticeable thing here is that while the initial scripts seem to be finished, the Duffer brothers have decided to shut down production',
          image: 'https://imageio.forbes.com/specials-images/imageserve/62ac77ef57c7bda5e38819cd/0x0.jpg?width=960',
          language: 'en',
          published_at: '2023-05-07T12:12:14Z',
          source: 'Forbes',
          title: 'Netflix’s ‘Stranger Things’ Season 5 Will Be Delayed Because Of The Writers Strike',
          url: 'https://www.forbes.com/sites/paultassi/2023/05/07/netflixs-stranger-things-season-5-will-be-delayed-because-of-the-writers-strike/'
        },
        {
          author: 'BusinessWorld',
          category: 'general',
          country: 'us',
          description: 'Philippine annual inflation further slowed for a third straight month in April, as prices of food, transport, and utilities continued to ease. Read the full story.',
          image: 'https://www.bworldonline.com/wp-content/uploads/2023/05/230508Inflation_Bottom-thumb-300x169.jpg',
          language: 'en',
          published_at: '2023-05-07T12:11:59Z',
          source: 'bworldonline',
          title: 'Bottom 30% inflation rate in the Philippines',
          url: 'https://www.bworldonline.com/infographics/2023/05/07/521350/bottom-30-inflation-rate-in-the-philippines-3/'
        },
        {
          author: 'ABMN Staff',
          category: 'general',
          country: 'us',
          description: 'Shell Asset Management Co. Sells 908 Shares of ManpowerGroup Inc. (NYSE:MAN)',
          image: null,
          language: 'en',
          published_at: '2023-05-07T12:12:49Z',
          source: 'americanbankingnews',
          title: 'Shell Asset Management Co. Sells 908 Shares of ManpowerGroup Inc. (NYSE:MAN)',
          url: 'https://www.americanbankingnews.com/2023/05/07/shell-asset-management-co-sells-908-shares-of-manpowergroup-inc-nyseman.html'
        },
        {
          author: 'ABMN Staff',
          category: 'general',
          country: 'us',
          description: 'Shell Asset Management Co. Sells 4,821 Shares of Equitable Holdings, Inc. (NYSE:EQH)',
          image: null,
          language: 'en',
          published_at: '2023-05-07T12:12:48Z',
          source: 'americanbankingnews',
          title: 'Shell Asset Management Co. Sells 4,821 Shares of Equitable Holdings, Inc. (NYSE:EQH)',
          url: 'https://www.americanbankingnews.com/2023/05/07/shell-asset-management-co-sells-4821-shares-of-equitable-holdings-inc-nyseeqh.html'
        },
        {
          author: 'ABMN Staff',
          category: 'general',
          country: 'us',
          description: 'Shell Asset Management Co. Lowers Stock Position in Euronet Worldwide, Inc. (NASDAQ:EEFT)',
          image: null,
          language: 'en',
          published_at: '2023-05-07T12:12:48Z',
          source: 'americanbankingnews',
          title: 'Shell Asset Management Co. Lowers Stock Position in Euronet Worldwide, Inc. (NASDAQ:EEFT)',
          url: 'https://www.americanbankingnews.com/2023/05/07/shell-asset-management-co-lowers-stock-position-in-euronet-worldwide-inc-nasdaqeeft.html'
        },
        {
          author: 'ABMN Staff',
          category: 'general',
          country: 'us',
          description: 'Shell Asset Management Co. Sells 3,397 Shares of DXC Technology (NYSE:DXC)',
          image: null,
          language: 'en',
          published_at: '2023-05-07T12:12:47Z',
          source: 'americanbankingnews',
          title: 'Shell Asset Management Co. Sells 3,397 Shares of DXC Technology (NYSE:DXC)',
          url: 'https://www.americanbankingnews.com/2023/05/07/shell-asset-management-co-sells-3397-shares-of-dxc-technology-nysedxc.html'
        },
        {
          author: 'ABMN Staff',
          category: 'general',
          country: 'us',
          description: 'Shell Asset Management Co. Has $391,000 Position in Enterprise Financial Services Corp (NASDAQ:EFSC)',
          image: null,
          language: 'en',
          published_at: '2023-05-07T12:12:45Z',
          source: 'americanbankingnews',
          title: 'Shell Asset Management Co. Has $391,000 Position in Enterprise Financial Services Corp (NASDAQ:EFSC)',
          url: 'https://www.americanbankingnews.com/2023/05/07/shell-asset-management-co-has-391000-position-in-enterprise-financial-services-corp-nasdaqefsc.html'
        },
        {
          author: 'ABMN Staff',
          category: 'general',
          country: 'us',
          description: 'TD Asset Management Inc Sells 50,750 Shares of Ero Copper Corp. (NYSE:ERO)',
          image: null,
          language: 'en',
          published_at: '2023-05-07T12:12:42Z',
          source: 'americanbankingnews',
          title: 'TD Asset Management Inc Sells 50,750 Shares of Ero Copper Corp. (NYSE:ERO)',
          url: 'https://www.americanbankingnews.com/2023/05/07/td-asset-management-inc-sells-50750-shares-of-ero-copper-corp-nyseero.html'
        },
        {
          author: 'ABMN Staff',
          category: 'general',
          country: 'us',
          description: 'Handelsbanken Fonder AB Sells 620,600 Shares of Maximus, Inc. (NYSE:MMS)',
          image: null,
          language: 'en',
          published_at: '2023-05-07T12:12:42Z',
          source: 'americanbankingnews',
          title: 'Handelsbanken Fonder AB Sells 620,600 Shares of Maximus, Inc. (NYSE:MMS)',
          url: 'https://www.americanbankingnews.com/2023/05/07/handelsbanken-fonder-ab-sells-620600-shares-of-maximus-inc-nysemms.html'
        },
        {
          author: 'ABMN Staff',
          category: 'general',
          country: 'us',
          description: 'Handelsbanken Fonder AB Trims Position in Maximus, Inc. (NYSE:MMS)',
          image: null,
          language: 'en',
          published_at: '2023-05-07T12:12:42Z',
          source: 'americanbankingnews',
          title: 'Handelsbanken Fonder AB Trims Position in Maximus, Inc. (NYSE:MMS)',
          url: 'https://www.americanbankingnews.com/2023/05/07/handelsbanken-fonder-ab-trims-position-in-maximus-inc-nysemms.html'
        },
        {
          author: 'MarketBeat News',
          category: 'general',
          country: 'us',
          description: 'Lmcg Investments LLC lowered its stake in shares of Johnson & Johnson (NYSE:JNJ &#8211; Get Rating) by 26.2% during the fourth quarter, according to the company in its most recent filing with the Securities & Exchange Commission. The fund owned 50,932 shares of the company&#8217;s stock after selling 18,067 shares during the quarter. Lmcg Investments [&#8230;]',
          image: null,
          language: 'en',
          published_at: '2023-05-07T12:12:42Z',
          source: 'etfdailynews',
          title: 'Lmcg Investments LLC Sells 18,067 Shares of Johnson & Johnson (NYSE:JNJ)',
          url: 'https://www.etfdailynews.com/2023/05/07/lmcg-investments-llc-sells-18067-shares-of-johnson-johnson-nysejnj/'
        },
        {
          author: 'MarketBeat News',
          category: 'general',
          country: 'us',
          description: 'TD Asset Management Inc lowered its stake in Ero Copper Corp. (NYSE:ERO &#8211; Get Rating) by 13.1% during the 4th quarter, HoldingsChannel reports. The firm owned 336,759 shares of the company&#8217;s stock after selling 50,750 shares during the period. TD Asset Management Inc&#8217;s holdings in Ero Copper were worth $4,633,000 as of its most recent [&#8230;]',
          image: null,
          language: 'en',
          published_at: '2023-05-07T12:12:42Z',
          source: 'etfdailynews',
          title: 'TD Asset Management Inc Reduces Stock Position in Ero Copper Corp. (NYSE:ERO)',
          url: 'https://www.etfdailynews.com/2023/05/07/td-asset-management-inc-reduces-stock-position-in-ero-copper-corp-nyseero/'
        },
        {
          author: 'ABMN Staff',
          category: 'general',
          country: 'us',
          description: 'Handelsbanken Fonder AB Takes Position in Kymera Therapeutics, Inc. (NASDAQ:KYMR)',
          image: null,
          language: 'en',
          published_at: '2023-05-07T12:12:42Z',
          source: 'americanbankingnews',
          title: 'Handelsbanken Fonder AB Takes Position in Kymera Therapeutics, Inc. (NASDAQ:KYMR)',
          url: 'https://www.americanbankingnews.com/2023/05/07/handelsbanken-fonder-ab-takes-position-in-kymera-therapeutics-inc-nasdaqkymr.html'
        },
        {
          author: 'ABMN Staff',
          category: 'general',
          country: 'us',
          description: 'Handelsbanken Fonder AB Decreases Stock Holdings in Dycom Industries, Inc. (NYSE:DY)',
          image: null,
          language: 'en',
          published_at: '2023-05-07T12:12:42Z',
          source: 'americanbankingnews',
          title: 'Handelsbanken Fonder AB Decreases Stock Holdings in Dycom Industries, Inc. (NYSE:DY)',
          url: 'https://www.americanbankingnews.com/2023/05/07/handelsbanken-fonder-ab-decreases-stock-holdings-in-dycom-industries-inc-nysedy.html'
        },
        {
          author: 'ABMN Staff',
          category: 'general',
          country: 'us',
          description: 'Shell Asset Management Co. Sells 5,751 Shares of Brookline Bancorp, Inc. (NASDAQ:BRKL)',
          image: null,
          language: 'en',
          published_at: '2023-05-07T12:12:42Z',
          source: 'americanbankingnews',
          title: 'Shell Asset Management Co. Sells 5,751 Shares of Brookline Bancorp, Inc. (NASDAQ:BRKL)',
          url: 'https://www.americanbankingnews.com/2023/05/07/shell-asset-management-co-sells-5751-shares-of-brookline-bancorp-inc-nasdaqbrkl.html'
        },
        {
          author: 'Reporter-Herald letters',
          category: 'general',
          country: 'us',
          description: 'Property taxes challenge home ownership In my 20s, I dreamed of owning my own home. In my 40s, I was house poor. Now, I’m struggling to keep my home, because of rising property taxes, rising insurance costs, rising utilities, and the cost of maintaining a home. Will my home be sacrificed on the altar of [&#8230;]',
          image: null,
          language: 'en',
          published_at: '2023-05-07T12:12:19Z',
          source: 'reporterherald',
          title: 'Letters: Property taxes; Loveland Housing Authority',
          url: 'https://www.reporterherald.com/2023/05/07/letters-property-taxes-loveland-housing-authority/'
        },
        {
          author: null,
          category: 'general',
          country: 'us',
          description: '(marketscreener.com) SALAM INTERNATIONL TRANSPORT &amp; TRADING To: Jordan Securities Commission, &#65172;&#65268;&#65247;&#65166;&#65252;&#65247;&#65165;...https://www.marketscreener.com/quote/stock/SALAM-INTERNATIONAL-TRANS-20702316/news/Salam-International-Transport-and-Trading-Assembly-Decision-SITT-2023-05-07-43770861/?utm_medium=RSS&utm_content=20230507',
          image: null,
          language: 'en',
          published_at: '2023-05-07T12:11:01Z',
          source: '4-traders',
          title: 'Salam International Transport and Trading : Assembly Decision-(SITT)-2023-05-07',
          url: 'https://www.marketscreener.com/quote/stock/SALAM-INTERNATIONAL-TRANS-20702316/news/Salam-International-Transport-and-Trading-Assembly-Decision-SITT-2023-05-07-43770861/?utm_medium=RSS&utm_content=20230507'
        },
        {
          author: null,
          category: 'general',
          country: 'us',
          description: '(marketscreener.com) DAR AL AMAN FOR ISLAMIC FINANCE To: Jordan Securities Commission, &#65172;&#65268;&#65247;&#65166;&#65252;&#65247;&#65165; &#65237;&#65165;&#65197;&#65261;&#65275;&#65165;...https://www.marketscreener.com/quote/stock/DAR-AL-AMAN-FOR-ISLAMIC-F-111315508/news/Dar-Al-Aman-for-Islamic-Finance-Assembly-Decision-DAIF-2023-05-07-43770862/?utm_medium=RSS&utm_content=20230507',
          image: null,
          language: 'en',
          published_at: '2023-05-07T12:11:01Z',
          source: '4-traders',
          title: 'Dar Al Aman for Islamic Finance : Assembly Decision-(DAIF)-2023-05-07',
          url: 'https://www.marketscreener.com/quote/stock/DAR-AL-AMAN-FOR-ISLAMIC-F-111315508/news/Dar-Al-Aman-for-Islamic-Finance-Assembly-Decision-DAIF-2023-05-07-43770862/?utm_medium=RSS&utm_content=20230507'
        },
        {
          author: 'MarketBeat News',
          category: 'general',
          country: 'us',
          description: 'TD Asset Management Inc acquired a new stake in shares of First Solar, Inc. (NASDAQ:FSLR &#8211; Get Rating) in the 4th quarter, Holdings Channel.com reports. The fund acquired 31,046 shares of the solar cell manufacturer&#8217;s stock, valued at approximately $4,650,000. Several other hedge funds and other institutional investors have also made changes to their positions [&#8230;]',
          image: null,
          language: 'en',
          published_at: '2023-05-07T12:10:47Z',
          source: 'etfdailynews',
          title: 'TD Asset Management Inc Acquires Shares of 31,046 First Solar, Inc. (NASDAQ:FSLR)',
          url: 'https://www.etfdailynews.com/2023/05/07/td-asset-management-inc-acquires-shares-of-31046-first-solar-inc-nasdaqfslr/'
        },
        {
          author: 'MarketBeat News',
          category: 'general',
          country: 'us',
          description: 'Vista Capital Partners Inc. increased its stake in shares of JPMorgan Chase & Co. (NYSE:JPM) by 31.9% during the fourth quarter, according to its most recent filing with the SEC. The institutional investor owned 3,312 shares of the financial services provider&#8217;s stock after purchasing an additional 801 shares during the period. Vista Capital Partners Inc.&#8217;s [&#8230;]',
          image: null,
          language: 'en',
          published_at: '2023-05-07T12:10:46Z',
          source: 'etfdailynews',
          title: 'Vista Capital Partners Inc. Increases Holdings in JPMorgan Chase & Co. (NYSE:JPM)',
          url: 'https://www.etfdailynews.com/2023/05/07/vista-capital-partners-inc-increases-holdings-in-jpmorgan-chase-co-nysejpm/'
        },
        {
          author: 'MarketBeat News',
          category: 'general',
          country: 'us',
          description: 'Palisade Asset Management LLC lifted its holdings in shares of Alphabet Inc. (NASDAQ:GOOGL &#8211; Get Rating) by 8.8% in the 4th quarter, according to its most recent Form 13F filing with the SEC. The firm owned 7,314 shares of the information services provider&#8217;s stock after buying an additional 594 shares during the period. Palisade Asset [&#8230;]',
          image: null,
          language: 'en',
          published_at: '2023-05-07T12:10:46Z',
          source: 'etfdailynews',
          title: 'Alphabet Inc. (NASDAQ:GOOGL) Shares Acquired by Palisade Asset Management LLC',
          url: 'https://www.etfdailynews.com/2023/05/07/alphabet-inc-nasdaqgoogl-shares-acquired-by-palisade-asset-management-llc/'
        }
    ]