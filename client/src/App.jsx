import Menubar from './components/Menubar/Menubar.jsx'
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Explore from "./pages/Explore/Explore.jsx";
import ManageUsers from "./pages/ManageUsers/ManageUsers.jsx";
import ManageItems from "./pages/ManageItems/ManageItems.jsx";
import ManageCategory from "./pages/ManageCategory/ManageCategory.jsx";
import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Toaster} from "react-hot-toast";
const App = () => {
    return(
        <div>
            <Menubar />
            <Toaster/>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/manageusers" element={<ManageUsers />} />
                <Route path="/managecategory" element={<ManageCategory />} />
                <Route path="/manageitems" element={<ManageItems />} />
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </div>
    )
}

export default App;