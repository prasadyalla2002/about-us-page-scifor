import { Component } from "react";

import CompanyOverview from "../CompanyOverview";
import WhoAreWe from "../WhoAreWe";
import "./index.css";

class AboutUsPage extends Component {
  render() {
    return (
      <div className="about-us-page-container">
        <CompanyOverview />
        <WhoAreWe />
      </div>
    );
  }
}

export default AboutUsPage;
