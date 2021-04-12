import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Users} from "./Pages/Users/Users";

function App() {
    return (
        <div className="App">
            <Router>
                <Route
                    path={'/'}
                    component={Users}
                />
            </Router>
        </div>
    );
}

export default App;
