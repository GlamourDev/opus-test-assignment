import { withRouter } from "react-router-dom";

function Header(props) {
    const path = props.location.pathname.slice(1);
    return (
      <div className="breadcrumb-nav">
        <h1>{path}</h1>
      </div>
    );
}

export default withRouter(Header);
