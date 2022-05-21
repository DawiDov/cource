import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const Home = () => {

  const { isAuthenticated } = useSelector(state => state.auth.isAuthenticated)

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />
  }

  return (
    <main>
      <div>Here will be Homepage</div>
    </main>
  )
}

export default Home