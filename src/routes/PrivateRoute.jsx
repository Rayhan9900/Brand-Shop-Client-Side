import React from 'react'

function PrivateRoute({ children }) {

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }



    if (user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>
}

export default PrivateRoute