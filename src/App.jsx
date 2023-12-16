import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects, Tasks, PageNotFound } from "./pages";

const App = () => {

  return (
    <main className='bg-gray-950 select-none scroll-smooth' onContextMenu={(e) => e.preventDefault()} >
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} key={0} />
          <Route path='/about' element={<About />} key='1' />
          <Route path='/projects' element={<Projects />} key='2' />
          <Route path='/contact' element={<Contact />} key='3' />
          <Route path='/tasks' element={<Tasks />} key='4' />
          <Route path="*" element={<PageNotFound />} key={99} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
