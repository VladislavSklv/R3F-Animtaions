import { createContext, useContext, useState } from "react";

const CharacterAnimsContext = createContext({});

export const CharacterAnimsProvider = (props) => {
  const [animIndex, setAnimIndex] = useState(0);
  const [animations, setAnimations] = useState([]);

  return (
    <CharacterAnimsContext.Provider
      value={{
        animIndex,
        setAnimIndex,
        animations,
        setAnimations,
      }}
    >
      {props.children}
    </CharacterAnimsContext.Provider>
  );
};

export const useCharacterAnims = () => {
  return useContext(CharacterAnimsContext);
};
