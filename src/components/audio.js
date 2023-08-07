import React from 'react';

const AudioPage = () => {
  return (
    <div>
      <h1>Audio Player</h1>
      <audio controls>
        <source src="/path/to/audio.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPage;
