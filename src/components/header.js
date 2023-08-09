import React from "react";

const Header = () => {
  return (
    <div>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-e17c08c elementor-section-full_width elementor-section-content-middle elementor-section-height-min-height elementor-section-height-default elementor-section-items-middle elementor-sticky elementor-sticky--active elementor-section--handles-inside"
        data-id="e17c08c"
        data-element_type="section"
        data-settings='{"sticky":"top","background_background":"classic","sticky_effects_offset":145,"sticky_on":["desktop","tablet","mobile"],"sticky_offset":0}'
        style={{
          position: "fixed",
          width: "100%",
          marginTop: "0px",
          marginBottom: "0px",
          top: "0px",
        }}
      >
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-row">
            <div
              className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-4f1a89c animated fadeInDown"
              data-id="4f1a89c"
              data-element_type="column"
              data-settings='{"animation":"fadeInDown","animation_delay":300}'
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div
                    className="elementor-element elementor-element-e941874 elementor-widget elementor-widget-heading"
                    data-id="e941874"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">
                        <a href="./">SHARUK &amp; MISBHA</a>
                      </h2>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
