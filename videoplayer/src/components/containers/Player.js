import React, { useState, useEffect } from "react";
import Video from "../../components/Video";
import Playlist from "../containers/Playlist";
import { ThemeProvider } from "styled-components";
import StyledPlayer from "../styles/StyledPlayer";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const theme = {
  bgcolor: "#353535",
  bgcolorItem: "#414141",
  bgcolorItemActive: "#405c63",
  bgcolorPlayed: "#526d4e",
  border: "none",
  borderPlayed: "none",
  color: "#fff",
};

const themeLight = {
  bgcolor: "#fff",
  bgcolorItem: "#fff",
  bgcolorItemActive: "#80a7b1",
  bgcolorPlayed: "#7d9979",
  border: "1px solid #353535",
  borderPlayed: "none",
  color: "#353535",
};

const Player = () => {
  const videos = JSON.parse(document.querySelector('[name="videos"]').value);
  // useParams() is a hook that returns the current URL parameters.
  // useLocation() is a hook that returns the current URL.
  // useNavigate() is a hook that returns a function that can be used to navigate to a new URL.
  const { activeVideo } = useParams();
  const location = useLocation();
  const history = useNavigate();
  const [state, setState] = useState({
    videos: videos.playlist,
    activeVideo: videos.playlist[0],
    nightMode: true,
    playlistId: videos.playlistId,
    autoplay: false,
  });

  useEffect(() => {
    const videoId = activeVideo;
    if (videoId !== undefined) {
      const activeVideoIndex = state.videos.findIndex(
        (video) => video.id === videoId
      );
      setState((prev) => {
        return {
          ...prev,
          activeVideo: prev.videos[activeVideoIndex],
          autoplay: location.autoplay,
        };
      });
    } else {
      history({
        pathname: `/${state.activeVideo.id}`,
        autoplay: false,
      });
    }
  }, [activeVideo, location, history, state.videos, state.activeVideo]);

  const nightModeCallback = () => {
    setState((prev) => {
      return {
        ...prev,
        nightMode: !prev.nightMode,
      };
    });
  };

  const endCallback = () => {
    console.log("e che sfaccimm")
    const videoId = activeVideo;
    const currentVideoIndex = state.videos.findIndex(
      (video) => video.id === videoId
    );
    const nextVideo =
      currentVideoIndex === state.videos.length - 1 ? 0 : currentVideoIndex + 1;

    // setState((prev) => {
    //     return {
    //         ...prev,
    //         activeVideo: prev.videos[nextVideo],
    //         autoplay: false,
    //     };
    // }
    // );

    history({
      pathname: `/${state.videos[nextVideo].id}`,
      autoplay: true,
    });
  };

  const progressCallback = (e) => {
    if (e.playedSeconds > 10 && e.playedSeconds < 11) {
        console.log("wenwien")
      setState({
        ...state,
        videos: state.videos.map((video) => {
          return video.id === state.activeVideo.id
            ? {
                ...video,
                played: true,
              }
            : video;
        }),
      });
    }
  };

  return (
    <ThemeProvider theme={state.nightMode ? theme : themeLight}>
      {state.videos !== null ? (
        <StyledPlayer>
          <Video
            active={state.activeVideo}
            autoplay={state.autoplay}
            endCallback={endCallback}
            progressCallback={progressCallback}
          />
          <Playlist
            videos={state.videos}
            active={state.activeVideo}
            nightModeCallback={nightModeCallback}
            nightMode={state.nightMode}
          />
        </StyledPlayer>
      ) : null}
    </ThemeProvider>
  );
};

export default Player;
