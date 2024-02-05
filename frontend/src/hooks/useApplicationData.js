import { useReducer } from 'react';

const initialState = {
  favorites: [],
  selectedPhoto: null,
  displayModal: false,
};

const ACTIONS = {
  TOGGLE_FAVOURITE: 'TOGGLE_FAVOURITE',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAVOURITE:
      return {
        ...state,
        favorites: action.payload,
      };
    case ACTIONS.OPEN_MODAL:
      return {
        ...state,
        displayModal: true,
        selectedPhoto: action.payload,
      };
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        displayModal: false,
        selectedPhoto: null,
      };
    default:
      return state;
  }
};

export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavourite = (photoId) => {
    const updatedFavorites = state.favorites.includes(photoId)
      ? state.favorites.filter((id) => id !== photoId)
      : [...state.favorites, photoId];

    dispatch({ type: ACTIONS.TOGGLE_FAVOURITE, payload: updatedFavorites });
  };

  const toggleModal = (props) => {
    if (props === undefined) {
      dispatch({ type: ACTIONS.CLOSE_MODAL });
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
  };
};
