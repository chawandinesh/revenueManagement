import React from 'react';
export const RevenueManagementContext = React.createContext(null);
const initialState = {
  Lending: {
    icon: '',
    aed: '',
    data: [],
  },
  Holidays: {
    icon: '',
    aed: '',
    data: [],
  },
  Housing: {
    icon: '',
    aed: '',
    data: [],
  },
  Accommodation: {
    icon: '',
    aed: '',
    data: [],
  },
  Shopping: {
    icon: '',
    aed: '',
    data: [],
  },
  Bills: {
    icon: '',
    aed: '',
    data: [],
  },
  'Personal Care': {
    icon: '',
    aed: '',
    data: [],
  },
  Entertainment: {
    icon: '',
    aed: '',
    data: [],
  },
  Transport: {
    icon: '',
    aed: '',
    data: [],
  },
  General: {
    icon: '',
    aed: '',
    data: [],
  },
  Groceries: {
    icon: '',
    aed: '',
    data: [],
  },
  'Foods & Drinks': {
    icon: '',
    aed: '',
    data: [],
  },
};
export  function Context(props) {
  const [state, setState] = React.useState(initialState);
  return (
    <RevenueManagementContext.Provider value={{state, setState}}>
      {props.children}
    </RevenueManagementContext.Provider>
  );
}
