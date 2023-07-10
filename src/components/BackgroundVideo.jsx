import React from 'react';
import media from '../assets/videos/bg-video.mp4'
// import media from '../assets/videos/moon.mp4'
const BackgroundVideo = () => {
  return (
      <video className='bg-video' controls autoPlay loop muted preload='auto'>
        <source src={media} type="video/mp4" />
        Desculpe, seu navegador não suporta vídeos HTML5.
      </video>
  );
}

export default BackgroundVideo;
