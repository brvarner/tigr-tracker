import React from "react"


const Modal: React.FC<ModalProps> = props => {



	return (
        <>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4" data-toggle='modal'  data-target='#exampleModalCenter'>Sign Up</button>

         <div className="modal fade col-6" id="exampleModalCenter" tabIndex='-1' role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content ">
                {/* <div className="modal-header">
                    <button type="button" className="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" className="ion-ios-close"></span>
                    </button>
                </div> */}
                <div className="row">
                    <div className="col-md mb-md-0 mb-5">
                        <div className="modal-body p-3">
                            <h3 className="mb-4">Sign In</h3>
                            <form action="#" className="signin-form">
                                <div className="form-group my-3">
                                    <input type="text" className="form-control " placeholder="Username"/>
                                </div>
                                <div className="form-group my-3">
                                    <input type="password" className="form-control " placeholder="Password"/>
                                </div>
                                <div className="form-group my-3 ">
                                    <button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign In</button>
                                </div>
                                <div className="form-group d-md-flex">
                                    <div className="form-check w-50">
                                        <label className="custom-control fill-checkbox">
                                            <input type="checkbox" className="fill-control-input"/>
                                        </label>
                                    </div>
                                    <div className="w-50 text-md-right">
                                        <a href="#" className="text-dark">Forgot Password</a>
                                    </div>
                                </div>
                            </form>
                            <p className="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
                            <div className="social d-flex text-center">
                                <a href="#" className="px-2 py-3 mr-md-1 rounded"><span className="ion-logo-facebook mr-2"></span> Facebook</a>
                                <a href="#" className="px-2 py-3 ml-md-1 rounded"><span className="ion-logo-twitter mr-2"></span> Twitter</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1 divider"></div>
                    <div className="col-md">
                        <div className="modal-body p-3">
                            <h3 className="mb-4">Sign Up</h3>
                            <form action="#" className="signup-form">
                                <div className="form-group my-3">
                                    <input type="text" className="form-control" placeholder="First Name"/>
                                </div>
                                <div className="form-group my-3">
                                    <input type="text" className="form-control" placeholder="Last Name"/>
                                </div>
                                <div className="form-group my-3">
                                    <input type="email" className="form-control" placeholder="Email address"/>
                                </div>
                                <div className="form-group my-3">
                                    <input type="password" className="form-control" placeholder="Password"/>
                                </div>
                                <div className="form-group my-3">
                                    <button type="submit" className="form-control btn btn-primary rounded submit px-3">Login</button>
                                </div>
                                <div className="form-group my-3">
                                    <div className="w-100">
                                        <p className="mb-0">By creating an account, your agree to our terms.</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
    )
};

interface ModalProps { }

  export default Modal; 