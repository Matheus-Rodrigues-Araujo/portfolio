import React from 'react';
import media from '../assets/videos/bg-video.mp4'

const BackgroundVideo = () => {
  return (
    <video width="640" height="360" controls>
      <source src={media} type="video/mp4" />
      Desculpe, seu navegador não suporta vídeos HTML5.
    </video>
  );
}

export default BackgroundVideo;
