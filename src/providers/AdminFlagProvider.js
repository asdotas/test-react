import { createContext } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = props => {
  const { children } = props;
  const sampleObj = { sapleValue: 'テスト' };
  const aaa = { aaa: 'あああ' };

  return (
    <AdminFlagContext.Provider value={sampleObj} value2={aaa} >
        {children}
    </AdminFlagContext.Provider>
  )
}