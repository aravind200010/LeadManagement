import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './homepage';
import AddLead from './AddLead';
import Editsales from './editsales';
import LoginPage from './Loginpage';
import store from './store';
import SalesList from './SalesList';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage></HomePage>} />
          <Route path="/sales-list" element={<SalesList />} />
          <Route path="/add-lead" element={<AddLead></AddLead>} />
          <Route path="/edit-lead/:id" element={<Editsales></Editsales>} />
          <Route path="/" element={<LoginPage></LoginPage>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
