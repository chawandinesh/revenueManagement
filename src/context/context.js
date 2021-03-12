import React from 'react';
export const RevenueManagementContext = React.createContext(null);
const initialState = {
  'Active and Passive Income Streams': {
    icon: '',
    aed: '0',
    data: [],
  },
  Diversification: {
    icon: '',
    aed: '0',
    data: [],
  },
  'Earned Income': {
    icon: '',
    aed: '0',
    data: [],
  },
  'Profit Income': {
    icon: '',
    aed: '0',
    data: [],
  },
  'Interest Income': {
    icon: '',
    aed: '0',
    data: [],
  },
  'Dividend Income': {
    icon: '',
    aed: '0',
    data: [],
  },
  'Rental Income': {
    icon: '',
    aed: '0',
    data: [],
  },
  'Capital Gains Income': {
    icon: '',
    aed: '0',
    data: [],
  },
};
export function Context(props) {
  const [state, setState] = React.useState(initialState);
  return (
    <RevenueManagementContext.Provider value={{state, setState}}>
      {props.children}
    </RevenueManagementContext.Provider>
  );
}
