// App.js

import React from "react";
import Animation from "./Animation";
import SoundCloudPlayer from "./SoundCloudPlayer";
import InstagramLink from "./InstagramLink";
import Header from "./header";

function App() {
  return (
    <div className="App">
      <Header />
      <Animation />
      <SoundCloudPlayer />
      <InstagramLink />
    </div>
  );
}

export default App;
