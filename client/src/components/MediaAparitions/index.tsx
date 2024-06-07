import { ReactNode, useEffect, useState } from 'react';
import './style.scss'
import { VideoProps } from '../../models/media_aparitions';
import { Video } from '../Video';
import { AssetPaths } from '../../models/enum';

export const MediaAparitions = () => {

    const [videos, setVideos] = useState<VideoProps[]>([]);

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        try {
            const response = await fetch('/json/videos.json');
            const data: VideoProps[] = await response.json();
            setVideos(data);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };
    const GenerateVideos = ():ReactNode => {
        return (
            <>
            <div className="videos-grid">
                    {videos.map(video => (
                        <Video key={video.id} {...video} />
                    ))}
                {videos.length%2!=0?<img src={AssetPaths.Heart} alt="Logo" className="image"/>:<></>}
            </div>
            </>
        )
    }
    return (
        <>
            <section id="media_aparitions" className="main">
                <div>
                    <h1 className="title-smaller main">Apariții în media & televiziune</h1>
                    {GenerateVideos()}
                </div>
            </section>
        </>
    )
}
