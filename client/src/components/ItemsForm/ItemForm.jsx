const ItemsForm = () => {
    return (
       <div className="item-form-container" style={{height:"100vh", overflowY:"auto", overflowX:"hidden"}}>
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
                                          placeholder="Item Name"
                                   />
                               </div>
                               <div className="mb-3">
                                   <label htmlFor="category" className="form-label">Category</label>
                                   <select name="category" id="category" className="form-select">
                                       <option value="">Select a category</option>
                                       <option value="1">Item 1</option>
                                       <option value="2">Item 2</option>
                                   </select>
                               </div>
                               <div className="mb-3">
                                   <label htmlFor="price" className="form-label">Price</label>
                                   <input type="number" id="price" name="price" className="form-control" placeholder="&#8377;200.00"/>
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
                               <button type="submit" className="btn btn-warning w-100" >Save</button>
                           </form>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    )
}
export default ItemsForm;