import { useEffect } from "react";
import shopeeCheck from "../aff/shopee.js";

function AffiliateSection() {
  useEffect(() => {
    shopeeCheck();
  }, [])
  return (
    <section className="resume-section" id="aff">
      <div className="resume-section-content">
        <h2 className="mb-5">Affiliates</h2>
        <div id="at-widget" style={{ border: "0.5px black dashed" }}></div>
      </div>
    </section>
  );
}

export default AffiliateSection;
