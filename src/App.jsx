import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import Home from "./pages/home";
import SendMessage from "./pages/sendMessage";
import Header from "./components/header";
import AddContact from "./pages/addContact";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sendMessage/:contactId" element={<SendMessage />} />
        <Route path="/addContact" element={<AddContact />} />
      </Routes>
      <Toaster/>
    </Router>
  );
}

export default App;
