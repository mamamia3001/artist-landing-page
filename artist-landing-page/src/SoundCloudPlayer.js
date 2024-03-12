// SoundCloudPlayer.js
import React from "react";

const SoundCloudPlayer = () => {
  return (
    <div className="mt-4">
      {/* SoundCloud player component goes here */}
      <iframe
        title="SoundCloud Player"
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1791470034&amp;color=%785590&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
      ></iframe>
    </div>
  );
};

export default SoundCloudPlayer;
