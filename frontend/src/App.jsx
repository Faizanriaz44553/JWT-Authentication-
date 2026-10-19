import './App.css'
import api from "./config/api"
import Form from './components/form'
import { signupFields } from './utils/InputFields';

function App() {

  const handleSignupSubmit = async (data) => {
    try {
      const res = await api.post("/register", data)
      console.log("Success Response:", res);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      <div className="AppContainer">
        <Form
          title="Signup"
          buttonText="Register"
          fields={signupFields}
          onSubmitAction={handleSignupSubmit}
        />
      </div>
    </>
  )
}

export default App
