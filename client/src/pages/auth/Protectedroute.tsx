/* eslint-disable react-refresh/only-export-components */
//  interface Protectedrouteprops {
//       children: React.ReactNode
//  }

// import React from 'react'

// export default function Protectedroute({children}: Protectedrouteprops) {

//    return (
//      <div>{children}</div>
//    )
//  }

import React, { createContext, useContext, useReducer, ReactNode } from "react";

interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }
interface AuthState {
  isAuthenticated: boolean;

  user: User | null; // Adjust the type as needed
}

interface AuthAction {
    type: 'LOGIN' | 'LOGOUT';
    payload?: User; // Use the User type for payload
}

type AuthDispatch = (action: AuthAction) => void;

const AuthContext = createContext<
  { state: AuthState; dispatch: AuthDispatch } | undefined
>(undefined);

const initialState: AuthState = {
  isAuthenticated: false,

  user: null,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
        if (!action.payload) {
            return state; // Handle the case where action.payload is undefined
          }

      return {
        isAuthenticated: true,

        user: action.payload,
      };

    case "LOGOUT":
      return {
        isAuthenticated: false,

        user: null,
      };

    default:
      return state;
  }
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): { state: AuthState; dispatch: AuthDispatch } => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
