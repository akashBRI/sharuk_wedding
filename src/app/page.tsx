"use client"
import React, { useState, useEffect } from 'react';
import Invitation from "@/components/invitation";
import Header from "@/components/header";
import Stories from "@/components/stories";
import AudioControlButton from "@/components/audioControlButton"

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Your audio play/pause logic
  };


  return (
    <main>
      <header data-elementor-type="header" data-elementor-id="1446" className="elementor elementor-1446 elementor-location-header">
        <div className="elementor-section-wrap">
          <Header />
        </div>
      </header>
      <div className='elementor elementor-258'>
        <div className='elementor-inner'>
          <div className='elementor-section-wrap'>
            <Invitation />
            <Stories />
            <AudioControlButton isPlaying={isPlaying} onTogglePlay={togglePlay} />
          </div>
        </div>
      </div>
    </main>
  )
}
