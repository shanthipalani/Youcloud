import { Component } from 'react'


class layout extends Component {

    render() {
        // let a=["india","pak", "dubai","china","australia","USA","UK"]


        // const changeHandler =(event) =>{
        //     console.log(event.target.value)
        // }
        return (
            // <select>{a.map( (i, indx)=>{ return <option key={indx} value={i}>{i}</option>})}</select>
            // <select onChange={(event)=>{changeHandler(event)}}>{a.map( (i, indx)=>{ return <option key={indx} value={i} >{i}</option>})}</select>
            
            <div class="media">
                <img class="mr-3" src="..." alt="Generic placeholder image" />
                    <div class="media-body">
                        <h5 class="mt-0">Media heading</h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
            </div>
            
        );
    }
}
//map(()=>{ })
export default layout;


{/* <div className="contentborder">    
        <section className="bodyfont container  mt-4">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12  text-center">                  
                    <p>Hingurakgoda MPCS -Hingurakgoda coop City</p>                
                    <div>test address ,</div>                  
                    <div>Sri-Lanka</div>
                    <div>Tel: 0272246201</div>
                    <div>Vat No: 12378965</div>
                    <div>TAX INVOICE</div>
                    <div><hr className="hrlinedotted" /></div>                  
                </div>
            </div>  
            <div className="row">
                <div className="col-lg-8">  
                    <p>Bill #:17303</p>
                    <p>Date : 05/18/2021 11:07:39 AM</p>
                    <p>Payment Mode : Split Sales</p>
                    <p>Customer :A G Office Hingurakgoda</p>
                </div>
            </div><hr className="hrlinedotted" />
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sn.</th>
                            <th>Particulars</th>
                            <th>Qty</th>
                            <th>Rate</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Ala kg</td>
                            <td>0.290</td>
                            <td>140.00</td>
                            <td>40.60</td>                            
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Ala kg</td>
                            <td>0.290</td>
                            <td>140.00</td>
                            <td>40.60</td>                            
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Ala kg</td>
                            <td>0.290</td>
                            <td>140.00</td>
                            <td>40.60</td>                            
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Ala kg</td>
                            <td>0.290</td>
                            <td>140.00</td>
                            <td>40.60</td>                            
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Ala kg</td>
                            <td>0.290</td>
                            <td>140.00</td>
                            <td>40.60</td>                            
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Ala kg</td>
                            <td>0.290</td>
                            <td>140.00</td>
                            <td>40.60</td>                            
                        </tr>                       
                    </tbody>               
                </table>
                <hr className="slicehrline"/>              
            </div>     
        </section>
        {/* <div className="container">
            <div className="row">
                <div className="col-lg-12 d-flex grossamount">
                    <p>Gross Amount:</p>
                </div>
            </div>
        </div> */}
        // <div className="w-100 d-flex">
        //     <div className="w-50">

        //     </div>
        //     <div className="w-50">
        //         Gross amount:
        //     </div>
        // </div>
        // </div> 