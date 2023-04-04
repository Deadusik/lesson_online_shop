import { observer } from "mobx-react-lite";
import AppRouter from "./components/AppRouter"
import NavbarBootstrap from "./components/navbar/NavbarBootstrap";
import { useContext, useState, useEffect } from "react";
import { check } from "./http/userAPI";
import { Container, Spinner } from "react-bootstrap";
import { Context } from "./index";



const App = observer(() => {
  const { user } = useContext(Context)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    })
      .finally(() => {
        setIsLoading(false)
      })

  }, [])

  if (isLoading) {
    return (
      <Container className='d-flex justify-content-center align-items-center vh-100'>
        <Spinner animation={'grow'} />
      </Container>
    )
  }

  return (
    <div className="App">
      <NavbarBootstrap />
      <AppRouter />
    </div>
  );
})

export default App;
