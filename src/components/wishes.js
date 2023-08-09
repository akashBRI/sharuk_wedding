import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const WhishesAndGreetings = () => {
    const dataArray = [
      {"name": "Alice", "wishes": "Happy happy life ahead filled with love.... Wishing you a happy married life ,in advance... love u lots... ", "color": "#ecf1ef"},
      {"name": "Bob", "wishes": "Wishing you a happy married life", "color": "#efe8e4"},
      {"name": "Akash", "wishes": "May your joining together bring you more joy than you can imagine", "color": "#f5f9eb"}
    ];

  return (
    <div>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-5722b2e elementor-section-height-min-height elementor-section-items-top elementor-section-boxed elementor-section-height-default"
        data-id="5722b2e"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-row">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0c8a6fa"
              data-id="0c8a6fa"
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div
                    className="elementor-element elementor-element-3d33734 elementor-widget__width-inherit elementor-absolute elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading animated zoomIn"
                    data-id="3d33734"
                    data-element_type="widget"
                    data-settings='{"_position":"absolute","_animation":"zoomIn"}'
                    data-widget_type="heading.default"
                    style={{top:'56px'}}
                  >
                    <div className="elementor-widget-container">
                      <h3 className="elementor-heading-title elementor-size-default">
                          Wishes <br/>& <br/>Greetings
                      </h3>{" "}
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-d2e63b3 elementor-widget elementor-widget-image animated zoomIn"
                    data-id="d2e63b3"
                    data-element_type="widget"
                    data-settings='{"_animation":"zoomIn"}'
                    data-widget_type="image.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-image">
                        <img
                          src="https://kit.freevision.me/weddon/wp-content/uploads/sites/3/elementor/thumbs/eucalyptus_wreath01-ordz52maupls7jempgruxavjwx2s2hikz055xg8ymu.png"
                          title="eucalyptus_wreath01"
                          alt="eucalyptus_wreath01"
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <section
                    className="elementor-section elementor-inner-section elementor-element elementor-element-55eb30c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="55eb30c"
                    data-element_type="section"
                    style={{paddingTop:'50px'}}
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-row">
                        <div
                          className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-2c68a92 animated-slow animated fadeInUp"
                          data-id="2c68a92"
                          data-element_type="column"
                          data-settings='{"animation":"fadeInUp"}'
                        >
                          <div className="elementor-column-wrap elementor-element-populated">
                            <div className="elementor-widget-wrap">
                              <div
                                className="elementor-element elementor-element-3e841d1 elementor-widget elementor-widget-text-editor"
                                data-id="3e841d1"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  
                                <Swiper spaceBetween={10} slidesPerView={1} loop={true} autoplay={{ delay: 4000 }}  modules={[ Pagination, Navigation]}>
                                    {dataArray.map((item, index) => (
                                        <SwiperSlide key={index}>
                                        <div className="swiper-card" style={{backgroundColor: item.color}}>
                                            <h2 className='wishText'>{item.wishes}</h2>
                                            <div className='carddiv'>
                                                <span className="icon_icon__S8qvc icon_icon--size-sm__TgOx3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"><switch><g><path d="M16.143 18.594h-.1c-6.6-2.5-7.4-5.9-7.4-8.6 0-2.5 1.8-4.5 3.9-4.5 1.5 0 2.9.8 3.6 2.1.7-1.3 2.1-2.1 3.6-2.1 2.2 0 3.9 2 3.9 4.5 0 2.7-.8 6.1-7.4 8.6h-.1zm-3.5-12.5s-.1 0 0 0c-1.8 0-3.3 1.7-3.3 3.8 0 2.4.8 5.6 6.8 7.9 6.1-2.4 6.8-5.5 6.8-7.9 0-2.1-1.5-3.8-3.2-3.8-1.5 0-2.9 1-3.3 2.4 0 .1-.2.2-.3.2-.2 0-.3-.1-.3-.3-.4-1.3-1.7-2.3-3.2-2.3zM6.343 8.494h-5.7c-.2 0-.3-.2-.3-.3s.2-.3.3-.3h5.7c.2 0 .3.2.3.3s-.1.3-.3.3zM6.343 12.394h-5.7c-.2 0-.3-.2-.3-.3 0-.2.2-.3.3-.3h5.7c.2 0 .3.2.3.3.1.1-.1.3-.3.3zM6.343 16.194h-2.5c-.2 0-.3-.2-.3-.3s.2-.3.3-.3h2.5c.2 0 .3.2.3.3s-.1.3-.3.3z"></path></g></switch></svg></span>
                                                <p className='cardTxt'>{item.name}</p>
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                    ))}
                                 </Swiper>

                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-def148e elementor-align-center elementor-mobile-align-justify elementor-widget elementor-widget-button"
                                data-id="def148e"
                                data-element_type="widget"
                                data-widget_type="button.default"
                                
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-button-wrapper">
                                      <button className="button_button__XEZgT button_button--size-md__NIOGh text_text--size-7__+ECec button_button--style-primary__r73rQ" type="button">Send your wishes<div className="grid_space__48fD1 grid_space--1px__oowyC"></div><span className="icon_icon__S8qvc icon_icon--size-sm__TgOx3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"><switch><g><path d="M16.143 18.594h-.1c-6.6-2.5-7.4-5.9-7.4-8.6 0-2.5 1.8-4.5 3.9-4.5 1.5 0 2.9.8 3.6 2.1.7-1.3 2.1-2.1 3.6-2.1 2.2 0 3.9 2 3.9 4.5 0 2.7-.8 6.1-7.4 8.6h-.1zm-3.5-12.5s-.1 0 0 0c-1.8 0-3.3 1.7-3.3 3.8 0 2.4.8 5.6 6.8 7.9 6.1-2.4 6.8-5.5 6.8-7.9 0-2.1-1.5-3.8-3.2-3.8-1.5 0-2.9 1-3.3 2.4 0 .1-.2.2-.3.2-.2 0-.3-.1-.3-.3-.4-1.3-1.7-2.3-3.2-2.3zM6.343 8.494h-5.7c-.2 0-.3-.2-.3-.3s.2-.3.3-.3h5.7c.2 0 .3.2.3.3s-.1.3-.3.3zM6.343 12.394h-5.7c-.2 0-.3-.2-.3-.3 0-.2.2-.3.3-.3h5.7c.2 0 .3.2.3.3.1.1-.1.3-.3.3zM6.343 16.194h-2.5c-.2 0-.3-.2-.3-.3s.2-.3.3-.3h2.5c.2 0 .3.2.3.3s-.1.3-.3.3z"></path></g></switch></svg></span></button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhishesAndGreetings