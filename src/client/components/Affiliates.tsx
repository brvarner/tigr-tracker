import * as React from 'react';


const Affiliates: React.FC<AffiliatesProps> = props => {

    return (
        <div style={{ backgroundColor: '#fefee3'}}>
            <h1 className="text-dark text-center"><strong>These Retailers Make This Site Possible</strong></h1>
            <div className="d-flex container-fluid">
            <div className="row justify-content-center">
                <div className="col-md">

                    <img src="media/affiliates/bestbuy.png" alt="" style={{width: `15rem`}}/>
                    <img src="media/affiliates/burlington.png" alt="" style={{width: `20rem`}}/>
                </div>
                <div className="col-md">
                    <img src="media/affiliates/gamestop.png" alt="" style={{width: `15rem`}}/>
                    <img src="media/affiliates/target.png" alt="" style={{width: `15rem`}}/>
                </div>
            </div>
            </div>
        </div>
    );
};

interface AffiliatesProps {}

export default Affiliates;