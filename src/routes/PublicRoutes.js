import { Route, Redirect } from "react-router"

export const PublicRoutes = ({
    isLogged,
    Component,
    ...rest
}) => {
 return(
     <Route 
       { ...rest }
        component = {(props) => (
            (!isLogged)
            ? (<Component {...props} />)
            : (<Redirect />)
        )}
     />
 )
}