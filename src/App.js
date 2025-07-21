import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);
  const api = process.env.REACT_APP_NEWS_API_KEY;

  return (
    <Router>
      <div className="App">
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                api={api}
                setProgress={setProgress}
                key="general"
                pageSize={9}
                country="us"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                api={api}
                setProgress={setProgress}
                key="business"
                pageSize={9}
                country="us"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                api={api}
                setProgress={setProgress}
                key="entertainment"
                pageSize={9}
                country="us"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                api={api}
                setProgress={setProgress}
                key="health"
                pageSize={9}
                country="us"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                api={api}
                setProgress={setProgress}
                key="science"
                pageSize={9}
                country="us"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                api={api}
                setProgress={setProgress}
                key="sports"
                pageSize={9}
                country="us"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                api={api}
                setProgress={setProgress}
                key="technology"
                pageSize={9}
                country="us"
                category="technology"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
