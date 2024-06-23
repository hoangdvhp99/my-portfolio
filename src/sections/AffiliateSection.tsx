import { useEffect } from "react";
import shopeeCheck from "../aff/shopee.js";
import lazadaCheck from "../aff/lazada.js";

function AffiliateSection() {
  useEffect(() => {
    shopeeCheck();
    lazadaCheck();
  }, [])
  return (
    <section className="resume-section" id="aff">
      <div className="resume-section-content">
        <h2 className="mb-5">Affiliates</h2>
        <div id="at-widget-shopee" style={{ border: "0.5px black dashed" }}></div>
        <div id="at-widget-lazada" style={{ border: "0.5px black dashed" }}></div>
      </div>
    </section>
  );
}

export default AffiliateSection;
