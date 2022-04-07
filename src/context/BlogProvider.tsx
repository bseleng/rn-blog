import React from "react";

interface IProps {
  children: React.ReactNode;
}

interface AppContextInterface {
  name: string;
}


 const BlogContext = React.createContext<AppContextInterface | null>(null)

const appContext: AppContextInterface = {
  name: "Using React Context in a Typescript App",
};
export const BlogProvider = ({children}: IProps) => {
  return (
    <BlogContext.Provider value={appContext}>
      {children}
    </BlogContext.Provider>
  )
}

export default  BlogContext