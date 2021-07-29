import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector } from "react-redux";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const CustomSwiper = ({ screenPrev = [], value, selectedOption }) => {
  const sidebarIsOpen = useSelector((state) => state.admin.ui.sidebarOpen);
  const showPageTip = useSelector((state) => state.data.showPageTip);
  const styles = {
    swiper: {
      background: "#D9D9E6",
      borderRadius: 10,
      boxShadow: "0 0px 5px rgba(0, 0, 0, 0.4)",
      cursor: "pointer",
      zIndex: -1,
    },
    images: {
      textAlign: "center",
      height: 230,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={value === "web" ? 2 : 4}
        // navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
          width: sidebarIsOpen ? 500 : showPageTip ? 600 : 700,
          height: 220,
          padding: 20,
          display: "flex",
        }}
      >
        {screenPrev.map((data, i) => (
          <SwiperSlide key={i} style={styles.swiper}>
            <div style={styles.images}>
              {selectedOption !== "" ? (
                <CircularProgress size={20} style={{ color: "#3A3A44" }} />
              ) : (
                ""
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
