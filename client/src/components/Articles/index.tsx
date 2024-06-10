import { ReactNode, useEffect, useState } from 'react';
import { ArticleProps } from '../../models/article';
import { Article } from '../Article';

export const Articles = () => {

    const [articles, setArticles] = useState<ArticleProps[]>([]);

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        try {
            const response = await fetch('/json/articles.json');
            const data: ArticleProps[] = await response.json();
            setArticles(data);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    const GenerateArticles = (): ReactNode => {
        return (
            <>
                <div className="video-grid">
                    {articles.map(article => (
                        <Article key={article.id} {...article} />
                    ))}
                </div>
            </>
        )
    }

    return (
        <>
            <section id="articles" className="main">
                <div className="section-end">
                    <h1 className="title-smaller main">A r t i c o l e</h1>

                    {GenerateArticles()}
                </div>
                <div className="gradient-transition"></div>
            </section>
        </>
    )
}   