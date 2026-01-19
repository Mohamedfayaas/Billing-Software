import "./ManageUsers.css"
import UserList from "../../components/UsersList/UsersList.jsx";
import UserForm from "../../components/UserForm/UsersForm.jsx";
const ManageUsers = () => {
    return (
        <div className="users-container text-light">
            <div className="left-column">
                <UserForm />
            </div>
            <div className="right-column">
                <UserList />
            </div>
        </div>
    )
}

export default ManageUsers;