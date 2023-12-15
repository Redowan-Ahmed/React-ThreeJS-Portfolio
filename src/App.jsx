import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects, Tasks, PageNotFound } from "./pages";

const App = () => {

  return (
    <main className='bg-gray-950'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} key='1' />
                  <Route path='/projects' element={<Projects />} key='2'  />
                  <Route path='/contact' element={<Contact />} key='3'  />
                  <Route path='/tasks' element={<Tasks />} key='4'  />
                </Routes>
                <Footer />
              </>
            }
          />
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </main>
  );
};

export default App;
