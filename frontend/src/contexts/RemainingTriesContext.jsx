import { createContext, useState, useMemo, useContext } from "react";
import PropTypes from "prop-types";

const RemainingContext = createContext();

export function RemainingProvider({ children }) {
  const [remainingTries, setRemainingTries] = useState(3);
  // on mets ici le usemémo
  const RemainingContextValues = useMemo(
    () => ({ remainingTries, setRemainingTries }),
    [remainingTries, setRemainingTries]
  );
  return (
    <RemainingContext.Provider value={RemainingContextValues}>
      {children}
    </RemainingContext.Provider>
  );
}
RemainingProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

// je me créé un hook personnalisé pour l'export du contexte
export const useRemainingTries = () => useContext(RemainingContext);
