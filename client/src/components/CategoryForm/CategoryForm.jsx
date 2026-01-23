import { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets.js";
import toast from "react-hot-toast";
import { addCategory } from "../../Service/CategoryService.js";
import { AppContext } from "../../context/AppContext.jsx";

const CategoryForm = () => {
    const { setCategories, categories } = useContext(AppContext);

    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);

    const [data, setData] = useState({
        name: "",
        description: "",
        bgColor: "#2c2c2c",
    });

    useEffect(() => {
        console.log(data);
    }, [data]);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if (!image) {
            toast.error("Select image for category");
            return;
        }

        setLoading(true);

        const formData = new FormData();
        formData.append("category", JSON.stringify(data));
        formData.append("file", image);

        try {
            const response = await addCategory(formData);
            if (response.status === 201) {
                setCategories([...categories, response.data]);
                toast.success("Category added successfully");

                setData({
                    name: "",
                    description: "",
                    bgColor: "#2c2c2c",
                });
                setImage(null);
            }
        } catch (error) {
            console.error(error);
            toast.error("Error adding category");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-2 mt-2">
            <div className="row">
                <div className="card col-md-12 form-container">
                    <div className="card-body">
                        <form onSubmit={onSubmitHandler} encType="multipart/form-data">

                            {/* Image Upload */}
                            <div className="mb-3">
                                <label htmlFor="image">
                                    <img
                                        src={image ? URL.createObjectURL(image) : assets.upload}
                                        alt="upload"
                                        width={48}
                                        style={{ cursor: "pointer" }}
                                    />
                                </label>
                                <input
                                    type="file"
                                    id="image"
                                    hidden
                                    accept="image/*"
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </div>

                            {/* Name */}
                            <div className="mb-3">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value={data.name}
                                    onChange={onChangeHandler}
                                    required
                                />
                            </div>

                            {/* Description */}
                            <div className="mb-3">
                                <label>Description</label>
                                <textarea
                                    name="description"
                                    className="form-control"
                                    rows="5"
                                    value={data.description}
                                    onChange={onChangeHandler}
                                    required
                                />
                            </div>

                            {/* Background Color */}
                            <div className="mb-3">
                                <label>Background Color</label>
                                <br />
                                <input
                                    type="color"
                                    name="bgColor"
                                    value={data.bgColor}
                                    onChange={onChangeHandler}
                                />
                            </div>

                            <button
                                className="btn btn-warning w-100"
                                disabled={loading}
                            >
                                {loading ? "Loading..." : "Submit"}
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryForm;
