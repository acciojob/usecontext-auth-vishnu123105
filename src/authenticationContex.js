import React ,{useState,} from 'react'

export const Authcontxt = React.createContext();

const Autprovider = ({children}) => {
   const [atention, setAttention] = useState(false);

  return (
    <div>
      <Authcontxt.Provider value={{atention, setAttention}}>
        {children}
        </Authcontxt.Provider>
    </div>
  );
}
export default Autprovider;
