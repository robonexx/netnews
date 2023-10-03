import { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
//styles
import styles from './article.module.scss';
import { AiOutlineCalendar } from 'react-icons/ai';
import { convertDate } from '@/lib/utils/convertDate';
import { getSingleArticle } from '@/lib/api-routes';
import { guardianNewsType } from '@/lib/types/Types';
import { HighlightedText } from '@/components/highlightedText/HighlightedText';

const Article: FC<{ params: { id: [] } }> = async ({ params }) => {
  const formattedUrl = (urlArray: []) => urlArray.join('/');
  /* const [news, setNews] = useState<guardianNewsType[]>([]); */
  /*  const [loading, setLoading] = useState<boolean>(true); */
  const id = formattedUrl(params.id);
  const data = await getSingleArticle(id);

  const article = await data.response.content;

  /*  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getTopGuardianNews();
        console.log('from single', data.response.results)
        setNews((prevNews) => [...prevNews, ...data.response.results]);
        const dataE = await getEntertainment();
        setNews((prevNews) => [...prevNews, ...dataE.response.results]);
        const dataT = await getTech();
        setNews((prevNews) => [...prevNews, ...dataT.response.results]);
        const dataH = await getHealth();
        setNews((prevNews) => [...prevNews, ...dataH.response.results]);
        const dataA = await getAINews();
        setNews((prevNews) => [...prevNews, ...dataA.response.results]);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);
 */
  /*  let id = params?.id;
  if (!id) {
    // Handle the case where id is undefined
    return <div>No ID provided</div>;
  } */

  /* id = id.replace('/', '');
  console.log('path id', id); */

  /* if (loading) {
    return <div>Loading...</div>;
  } */

  /* console.log('Type of news:', typeof news);
  const article =
    news && news.length !== 0 ? news.find((item) => item.id === id) : null;

  console.log('filtered news', article);
  // Check if the news with the specified id is found
  if (!article) {
    return <div>No matching news found</div>;
  }
*/
  const publishedDate = article.webPublicationDate || '';
  const formattedDate = convertDate(publishedDate);

  return (
    <div className={styles.container}>
      <Head>
        <title>News Net | Article</title>
      </Head>

      <main>
        <div className={styles.wrapper}>
          {article && (
            <article key={article.id} className={styles.content_wrapper}>
              <div className={styles.date}>
                <AiOutlineCalendar /> <HighlightedText title={formattedDate} />
              </div>
              <h2 className={styles.title}>{article.webTitle}</h2>
              <h4 className={styles.desc}>{article.sectionName}</h4>
              <div className={styles.media_wrapper}>
                {article.fields.thumbnail ? (
                  <div className={styles.img}>
                    <Image
                      src={article.fields.thumbnail}
                      alt='Article media'
                      fill
                      priority
                    />
                  </div>
                ) : (
                  <div className={styles.overlay}>
                    <div className={styles.logo}></div>
                  </div>
                )}
              </div>
              <div className={styles.author}>
                <HighlightedText
                  title={`By: ${article.fields.firstName} ${article.fields.lastName}`}
                />
              </div>
              <hr className={styles.divider} />
              {/* <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: article.fields.body }}
              /> */}
              <p className={styles.content}>{article.fields.bodyText}</p>
            </article>
          )}
        </div>
      </main>
    </div>
  );
};

export default Article;
