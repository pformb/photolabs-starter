import { useReducer, useEffect, useRef } from "react";

const initialState = {
  favorites: [],
  selectedPhoto: null,
  displayModal: false,
  photoData: [],
  topicData: [],
};

const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  OPEN_MODAL: "OPEN_MODAL",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  CLOSE_MODAL: "CLOSE_MODAL",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favorites: state.favorites.filter(
          (favoriteId) => favoriteId !== action.payload
        ),
      };
    case ACTIONS.OPEN_MODAL:
      return { ...state, displayModal: true, selectedPhoto: action.payload };
    case ACTIONS.CLOSE_MODAL:
      return { ...state, displayModal: false };

    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };

    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { ...state, photoData: action.payload };

    case ACTIONS.UPDATE_HAS_FAVORITE_STATE:
      return { ...state, hasFavorite: action.payload };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      });
  }, []);

  function photosByTopic(topic_id) {
    fetch(`http://localhost:8001/api/topics/photos/${topic_id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data });
      });
  }

  function returnHome() {
    // Using the fetch API to make a GET request to the specified endpoint
    fetch(`http://localhost:8001/api/photos`)
      .then((res) => {
        // Checking if the response status is OK (200)
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        // Parsing the response body as JSON
        return res.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
        dispatch({ type: ACTIONS.UPDATE_HAS_FAVORITE_STATE, payload: false });
      })
      .catch((error) => {
        // Handling any errors that occur during the fetch operation
        console.error("Error fetching photos:", error);
      });
  }

  function toggleFavourite(id) {
    if (state.favorites.includes(id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: id });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: id });
    }
  }

  const toggleModal = (props) => {
    if (props === undefined) {
      dispatch({ type: ACTIONS.CLOSE_MODAL, payload: false });
    } else {
      dispatch({ type: ACTIONS.OPEN_MODAL, payload: props });
    }
  };

  const handleImageClick = (photo) => {
    toggleModal(photo);
  };

  const handleCloseModal = () => {
    toggleModal();
  };

  return {
    toggleFavourite,
    toggleModal,
    handleImageClick,
    handleCloseModal,
    state,
    photosByTopic,
    returnHome,
  };
};
