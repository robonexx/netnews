'use client';
import { useState, useEffect } from 'react';
import ArticleCard from '../articleCard/ArticleCard';
import SmallArticleCard from '../smallArticleCard/SmallArticleCard';
import { guardianNewsType } from '@/lib/types/Types';
import {
  getTopGuardianNews,
  getAINews,
  getEntertainment,
  getHealth,
  getTech,
} from '@/lib/api-routes';
// styles
import styles from './hero.module.scss';

// making use of useEffect in a effective way
// creating these tag buttons
const categories = [
  { label: 'Top News', fetchFunction: getTopGuardianNews },
  { label: 'AI News', fetchFunction: getAINews },
  { label: 'Entertainment', fetchFunction: getEntertainment },
  { label: 'Health', fetchFunction: getHealth },
  { label: 'Tech', fetchFunction: getTech },
];

// we have to fetch the data then use if statement with then and catch

const Hero: React.FC = () => {
  // starting fetch state is Top News
  const [selectedCategory, setSelectedCategory] = useState('Top News');
  const [news, setNews] = useState<guardianNewsType[]>([]);

  useEffect(() => {
    // cant use async await which is probably the easiest way
    const fetchData = () => {
      // checking if the selected object label is the one attached to the button
      const selectedCategoryObject = categories.find(
        (cat) => cat.label === selectedCategory
      );

      // and if it is do the fecth
      if (selectedCategoryObject) {
        selectedCategoryObject
          .fetchFunction()
          .then((data) => {
            setNews(data.response.results);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }
    };

    fetchData();
  }, [selectedCategory]);

  return (
    <div className={styles.hero}>
      <div className={styles.category_buttons}>
        {/* Mapping thru the categories, setting state to the categrory label, could be separate function */}
        {categories.map((category) => (
          <button
            key={category.label}
            className={`${styles.category_button} ${
              selectedCategory === category.label ? styles.selected : ''
            }`}
            onClick={() => setSelectedCategory(category.label)}
          >
            {category.label}
          </button>
        ))}
      </div>
      <section className={styles.grid_wrap}>
        <div className={styles.grid}>
          {news &&
            news
              .slice(0, 1)
              .map((article: guardianNewsType) => (
                <ArticleCard
                  key={article.id}
                  id={article.id}
                  webTitle={article?.webTitle}
                  fields={article.fields}
                  sectionName={article.sectionName}
                  tags={article.tags}
                />
              ))}
          {/* small cards on the side */}
          <div className={`${styles.grid_wrap}`}>
            <div className={styles.grid}>
              {news &&
                news
                  .slice(1, 5)
                  .map((article: guardianNewsType) => (
                    <SmallArticleCard
                      key={article.id}
                      id={article.id}
                      webTitle={article?.webTitle}
                      fields={article.fields}
                      webUrl={article?.webUrl}
                      webPublicationDate={article.webPublicationDate}
                    />
                  ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.grid_wrap}>
        <div className={styles.grid}>
          {news &&
            news
              .slice(-3)
              .map((article: guardianNewsType) => (
                <ArticleCard
                  key={article.id}
                  id={article.id}
                  webTitle={article?.webTitle}
                  fields={article.fields}
                  webUrl={article?.webUrl}
                  sectionName={article.sectionName}
                  tags={article.tags}
                />
              ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
