import Link from "next/link";
import React from "react";

type NavItem = {
  name: String;
  link: String;
};
type NavProps = {
  NavArray: NavItem[];
};

const Nav = (props: NavProps) => {
  let { NavArray } = props;
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-nav">
          <Link href="#">Home</Link>
          {/* className="nav-link active" aria-current="page" href="#">Home</a> */}
          <a className="nav-link" href="#">Features</a>
          <a className="nav-link" href="#">Pricing</a>
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </div>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        
      </div>
    </div>
  </nav>
  );
};

export default Nav;
