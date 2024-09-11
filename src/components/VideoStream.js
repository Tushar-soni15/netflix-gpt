import { useSelector } from 'react-redux';
import useVideoTrailer from '../hooks/useVideoTrailerId';

const VideoStream = ({movieId}) => {
    const trailerId = useSelector((store) => store.movie?.trailerInfo);
    useVideoTrailer(movieId);
  return (
    <div className='w-screen'>
        <iframe 
            className='w-screen aspect-video' 
            src={"https://www.youtube.com/embed/"+trailerId?.key + "?&autoplay=1&mute=1"} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
        </iframe>
    </div>
  )
}

export default VideoStream