import { ReactNode, useEffect, useState } from 'react';
import { ArticleProps } from '../../models/article';
import { Article } from '../Article';
import { VideoProps } from '../../models/media_aparitions';
import { Video } from '../Video';

export const Articles = () => {

    const [articles, setArticles] = useState<ArticleProps[]>([]);
    const [testimonials, setTestimonials] = useState<VideoProps[]>([]);

    useEffect(() => {
        fetchTestimonials();
        fetchArticles();        
    }, []);

    const fetchArticles= async () => {
        try {
            const response = await fetch('/json/articles.json');
            const data: ArticleProps[] = await response.json();
            setArticles(data);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };
    const fetchTestimonials = async () => {
        try {
            const response = await fetch('/json/videos.json');
            const data: VideoProps[] = await response.json();
            setTestimonials(data.filter((video)=>video.isTestimonial));
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
    const GenerateTestimonials = (): ReactNode => {
        return (
            <>
                <div className="video-grid">
                    {testimonials.map(testimonial => (
                        <Video key={testimonial.id} {...testimonial} />
                    ))}
                </div>
            </>
        )
    }

    return (
        <>
            <section id="articles" className="main">
                <div className="section-end">
                    <div>
                    <h1 className="title-smaller main">A r t i c o l e</h1>
                    {GenerateArticles()}
                    </div>
                    {testimonials.length>0?<div>
                    <h1 className="title-smaller main">T e s t i m o n i a l e</h1>
                    {GenerateTestimonials()}
                    </div>:null}
                </div>
                <div className="gradient-transition"></div>
            </section>
        </>
    )
}   