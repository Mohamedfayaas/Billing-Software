const CategoryForm = () => {
    return (
        <div className="mx-2 mt-2">
            <div className="row">
                <div className="card col-md-8 form-container">
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">
                                    <img src="https://placehold.co/48x48" alt=""  width={48}/>
                                </label>
                                <input type="file" id="image" name="image" className="form-control" hidden />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Category Name"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Description</label>
                                <textarea
                                       rows="5"
                                       className="form-control"
                                       id="description"
                                       name="description"
                                       placeholder="Write content here..."
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="bgcolor" className="form-label">Background Color</label>
                                <br/>
                                <input type="color"
                                       id="bgcolor"
                                       name="bgcolor"
                                       placeholder="#ffffff"/>
                            </div>
                            <button type="submit" className="btn btn-primary w-100" >Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>




    )

}
export default CategoryForm;