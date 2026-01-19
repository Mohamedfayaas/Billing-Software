const UserForm = () => {
    return (
        <div className="mx-2 mt-2">
            <div className="row">
                <div className="card col-md-8 form-container">
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text"
                                       className="form-control"
                                       id="name"
                                       name="name"
                                       placeholder="John Doe"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <br/>
                                <input type="email"
                                       id="email"
                                       name="email"
                                       className="form-control"
                                       placeholder="yourname@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <br/>
                                <input type="password"
                                       id="password"
                                       name="password"
                                       className="form-control"
                                       placeholder="**************"/>
                            </div>
                            <button type="submit" className="btn btn-warning w-100" >Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserForm;