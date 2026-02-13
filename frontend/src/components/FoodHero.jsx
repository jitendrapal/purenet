// src/components/FoodHero.jsx
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/Button";

export function FoodHero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // Video sources array - add your videos here
  const videos = [
    { mp4: "/mainscreen.mp4" }, // Your new video from public folder
  ];

  const currentVideo = videos[currentVideoIndex];

  useEffect(() => {
    // Ensure smooth playback on mount
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;

      // Handle video loaded
      const handleLoadedData = () => {
        console.log("Video loaded successfully!");
        setIsVideoLoaded(true);
      };

      // Handle video errors
      const handleError = (e) => {
        console.error("Video loading error:", e);
        console.error("Video source:", currentVideo.mp4);
      };

      videoRef.current.addEventListener("loadeddata", handleLoadedData);
      videoRef.current.addEventListener("error", handleError);

      videoRef.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener("loadeddata", handleLoadedData);
          videoRef.current.removeEventListener("error", handleError);
        }
      };
    }
  }, [currentVideoIndex, currentVideo]);

  // Auto-advance slider every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 10000); // Change video every 10 seconds

    return () => clearInterval(interval);
  }, [videos.length]);

  const goToVideo = (index) => {
    setIsVideoLoaded(false);
    setCurrentVideoIndex(index);
  };

  return (
    <section className="relative flex h-[70vh] w-full items-stretch justify-center overflow-hidden bg-black sm:h-[80vh] lg:h-[90vh]">
      {/* Loading placeholder */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-800 to-black animate-pulse" />
      )}

      {/* Background video sized to hero with professional quality settings */}
      <video
        key={currentVideoIndex}
        ref={videoRef}
        src={currentVideo.mp4}
        className={`absolute inset-0 h-full w-full object-cover scale-105 animate-subtle-zoom transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        style={{
          filter: "contrast(1.1) saturate(1.15) brightness(1.15)",
          imageRendering: "high-quality",
        }}
      >
        Your browser does not support the video tag.
      </video>

      {/* Lighter gradient overlay for brighter appearance */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20" />

      {/* Content with fade-in animation - Left aligned */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-4 sm:px-6 lg:px-8 pb-12 pt-24 sm:pt-32 lg:pt-40 text-left animate-fade-in">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-300 drop-shadow-lg">
          Luxury in a Jar
        </p>

        <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl lg:text-6xl drop-shadow-2xl">
          PureNut
        </h1>

        <p className="mt-3 text-lg font-semibold text-white sm:text-xl drop-shadow-lg">
          Butters, crafted fresh.
        </p>

        <p className="mt-4 max-w-xl text-sm text-white/95 sm:text-base drop-shadow-md leading-relaxed font-medium">
          Creamy, crunchy and chocolatey peanut butters made from premium nuts —
          perfect for toast, smoothies and desserts.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button
            to="/products"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#BA5C1E] to-[#D97236] text-sm font-semibold text-white px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-[#D97236] hover:to-[#BA5C1E]"
          >
            Explore Products
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Button>
        </div>

        {/* Video slider navigation dots */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToVideo(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentVideoIndex
                  ? "w-10 bg-amber-400 shadow-xl shadow-amber-400/70"
                  : "w-3 bg-white/70 hover:bg-white shadow-md"
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
