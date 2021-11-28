import { Route, Redirect } from "react-router"

export const PrivateRoutes = ({
    isLogged,
    Component,
    ...rest
}) => {
 return(
    <Route 
       { ...rest }
        component = {(props) => (
            (isLogged)
            ? (<Component {...props} />)
            : (<Redirect to = "/signin" />)
        )}
     />
 )
}