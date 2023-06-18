
function PhoneDetails(props) {
    return <p className="info">{props.number}</p>

}

function EmailDetails(props) {
    return <p className="info">{props.email}</p>

}

export default PhoneDetails;
export {EmailDetails};

// Angela's code
// function Detail(props) {
//     return <p className="info">{props.detailInfo}<p/>;
// }

// export default Detail;

// in app.jsx, import Detail from "./Details.jsx"

// <PhoneDetails number={props.phone} />
// <EmailDetails email={props.email} />