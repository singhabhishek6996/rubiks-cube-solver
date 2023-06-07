import { createContext, useContext } from "react"

const ThreeAppActionsContext = createContext({})

export const ThreeAppActionsProvider = ({ threeAppActions, children }) => {
  return (
    <ThreeAppActionsContext.Provider value={threeAppActions}>
      <div className="bg-stone-50">
      {children}
      </div>
    </ThreeAppActionsContext.Provider>
  )
}

export const useThreeAppActions = () => {
  <div className="bg-stone-50">
  return useContext(ThreeAppActionsContext)
  </div>
}
