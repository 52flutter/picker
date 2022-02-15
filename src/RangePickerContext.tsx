import React from 'react';

export const ConfigContext = React.createContext<{ fastClose: boolean }>({ fastClose: false });
