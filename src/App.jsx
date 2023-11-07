import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DemoPage from "./pages/DemoPage";
import FirstPage from "./pages/FirstPage";
import NotFoundPage from "./pages/NotFoundPage"; // Make sure to create this component
import Cursor from "./components/cursor/Cursor";

const App = () => {
  return (
    <Router>
      <Cursor />
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/demo/:id" element={<DemoPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
      </Routes>
    </Router>
  );
};

export default App;
