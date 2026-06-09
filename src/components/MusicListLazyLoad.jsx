import { useEffect, useState } from "react";
import MusicItem from "./MusicItem";
import musicData from "../data/music-recommendations";

function MusicListLazyLoad() {
  const [visibleCount, setVisibleCount] = useState(musicData.length);

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;
      if (nearBottom && visibleCount < musicData.length) {
        setVisibleCount((prev) => prev + 5);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCount]);

  const visibleMusic = musicData.slice(0, visibleCount);

  return (
    <div>
      {visibleMusic.map((item, index) => (
        <MusicItem
          key={index}
          {...item}
        />))}
    </div>
  );
}

export default MusicListLazyLoad;
