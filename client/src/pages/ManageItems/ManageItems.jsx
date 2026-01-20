import "./ManageItems.css"
import ItemList from "../../components/ItemsList/ItemList.jsx";
import ItemsForm from "../../components/ItemsForm/ItemForm.jsx";
const ManageItems = () => {
    return (
        <div className="items-container text-light">
            <div className="left-column">
                 <ItemsForm />
            </div>
            <div className="right-column">
                <ItemList />
            </div>
        </div>
    )
}

export default ManageItems;