import { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { AiOutlineCalendar } from 'react-icons/ai';
import { convertDate } from '@/lib/utils/convertDate';
import { getSingleArticle } from '@/lib/api-routes';
import { guardianNewsType } from '@/lib/types/Types';
import { HighlightedText } from '@/components/highlightedText/HighlightedText';

//styles
import styles from './article.module.scss';

interface ArticleProps {
  params: { id: [] };
}

const Article: FC<ArticleProps> = async ({ params }) => {
  const formattedUrl = (urlArray: []) => urlArray.join('/');
  /* const [news, setNews] = useState<guardianNewsType[]>([]); */
  /*  const [loading, setLoading] = useState<boolean>(true); */
  const id = formattedUrl(params.id);
  const data = await getSingleArticle(id);

  const article: guardianNewsType = await data.response.content;

  console.log(article);

  /*  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getSingleArticle(id);
        console.log('from single', data.response.results)
        setNews(data.response.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);
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
                      sizes='(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 75vw'
                      priority
                    />
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className={styles.author}>
                {article.tags && article.tags.length > 0 && (
                  <HighlightedText
                    title={`By: ${article.tags
                      .map((tag) => `${tag.firstName} ${tag.lastName}`)
                      .join(', ')}`}
                  />
                )}
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
