import { createContext, useState, useEffect, useReducer } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

import { createAction } from "../utils/reducer/reducer.utils";

//as the actual value i want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state, //this is a convention to follow if there are more values but not be changed.
        currentUser: payload,
      };
    default:
      throw new Error(`unHandled type ${type} inside the userReducer`);
  }
};


export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);

  {
    /**
  useReducer always gets 2 parameters: reducer & initial_state
  and
  we always get 2 things out of useReducer: the current_state & 'dispatch' function
  **/
  }
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;

  const setCurrentUser = (user) => {
    // dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);
      if (user) createUserDocumentFromAuth(user);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
