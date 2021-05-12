import React from 'react';

const Configs = React.createContext({});

export const ConfigProvider = Configs.Provider;
export const ConfigConsumer = Configs.Consumer;

export default Configs;