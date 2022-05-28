import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

const Carousel = () => {

    return(
        <>
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
            clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
        >
        <SwiperSlide>
            <img src="/images/carbonara.png" />
            <div id="left">
                <p>327 Kcal</p>
                <h3>Massa à carbonara</h3>
                <div id="row">
                    <div id="col">
                        <p>Lip.</p>
                        <p id="strong">11.2g</p>
                    </div>
                    <div id="col">
                        <p>Carb.</p>
                        <p id="strong">5.1g</p>
                    </div>
                    <div id="col">
                        <p>Prot.</p>
                        <p id="strong">25g</p>
                    </div>
                    <div id="col">
                        <p>Sal</p>
                        <p id="strong">2.3g</p>
                    </div>
                </div>     
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/prato.png" />
            <div id="left">
                    <p>124 Kcal</p>
                    <h3>Salmão fumado</h3>
                    <div id="row">
                        <div id="col">
                            <p>Lip.</p>
                            <p id="strong">11.2g</p>
                        </div>
                        <div id="col">
                            <p>Carb.</p>
                            <p id="strong">5.1g</p>
                        </div>
                        <div id="col">
                            <p>Prot.</p>
                            <p id="strong">25g</p>
                        </div>
                        <div id="col">
                            <p>Sal</p>
                            <p id="strong">2.3g</p>
                        </div>
                    </div>     
                </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/vegetariano.png" />
            <div id="left">
                    <p>417 Kcal</p>
                    <h3>Bacalhau à brás</h3>
                    <div id="row">
                        <div id="col">
                            <p>Lip.</p>
                            <p id="strong">11.2g</p>
                        </div>
                        <div id="col">
                            <p>Carb.</p>
                            <p id="strong">5.1g</p>
                        </div>
                        <div id="col">
                            <p>Prot.</p>
                            <p id="strong">25g</p>
                        </div>
                        <div id="col">
                            <p>Sal</p>
                            <p id="strong">2.3g</p>
                        </div>
                    </div>     
                </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/salada.png" />
            <div id="left">
                    <p>417 Kcal</p>
                    <h3>Bacalhau à brás</h3>
                    <div id="row">
                        <div id="col">
                            <p>Lip.</p>
                            <p id="strong">11.2g</p>
                        </div>
                        <div id="col">
                            <p>Carb.</p>
                            <p id="strong">5.1g</p>
                        </div>
                        <div id="col">
                            <p>Prot.</p>
                            <p id="strong">25g</p>
                        </div>
                        <div id="col">
                            <p>Sal</p>
                            <p id="strong">2.3g</p>
                        </div>
                    </div>     
                </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/salada-cesar.png" />
            <div id="left">
                    <p>417 Kcal</p>
                    <h3>Bacalhau à brás</h3>
                    <div id="row">
                        <div id="col">
                            <p>Lip.</p>
                            <p id="strong">11.2g</p>
                        </div>
                        <div id="col">
                            <p>Carb.</p>
                            <p id="strong">5.1g</p>
                        </div>
                        <div id="col">
                            <p>Prot.</p>
                            <p id="strong">25g</p>
                        </div>
                        <div id="col">
                            <p>Sal</p>
                            <p id="strong">2.3g</p>
                        </div>
                    </div>     
                </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/bacalhau.png" />
            <div id="left">
                    <p>417 Kcal</p>
                    <h3>Bacalhau à brás</h3>
                    <div id="row">
                        <div id="col">
                            <p>Lip.</p>
                            <p id="strong">11.2g</p>
                        </div>
                        <div id="col">
                            <p>Carb.</p>
                            <p id="strong">5.1g</p>
                        </div>
                        <div id="col">
                            <p>Prot.</p>
                            <p id="strong">25g</p>
                        </div>
                        <div id="col">
                            <p>Sal</p>
                            <p id="strong">2.3g</p>
                        </div>
                    </div>     
                </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/carbonara.png" />
            <div id="left">
                    <p>417 Kcal</p>
                    <h3>Bacalhau à brás</h3>
                    <div id="row">
                        <div id="col">
                            <p>Lip.</p>
                            <p id="strong">11.2g</p>
                        </div>
                        <div id="col">
                            <p>Carb.</p>
                            <p id="strong">5.1g</p>
                        </div>
                        <div id="col">
                            <p>Prot.</p>
                            <p id="strong">25g</p>
                        </div>
                        <div id="col">
                            <p>Sal</p>
                            <p id="strong">2.3g</p>
                        </div>
                    </div>     
                </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/prato.png" />
            <div id="left">
                    <p>417 Kcal</p>
                    <h3>Bacalhau à brás</h3>
                    <div id="row">
                        <div id="col">
                            <p>Lip.</p>
                            <p id="strong">11.2g</p>
                        </div>
                        <div id="col">
                            <p>Carb.</p>
                            <p id="strong">5.1g</p>
                        </div>
                        <div id="col">
                            <p>Prot.</p>
                            <p id="strong">25g</p>
                        </div>
                        <div id="col">
                            <p>Sal</p>
                            <p id="strong">2.3g</p>
                        </div>
                    </div>     
                </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/bacalhau.png" />
            <div id="left">
                    <p>417 Kcal</p>
                    <h3>Bacalhau à brás</h3>
                    <div id="row">
                        <div id="col">
                            <p>Lip.</p>
                            <p id="strong">11.2g</p>
                        </div>
                        <div id="col">
                            <p>Carb.</p>
                            <p id="strong">5.1g</p>
                        </div>
                        <div id="col">
                            <p>Prot.</p>
                            <p id="strong">25g</p>
                        </div>
                        <div id="col">
                            <p>Sal</p>
                            <p id="strong">2.3g</p>
                        </div>
                    </div>     
                </div>
        </SwiperSlide>
      </Swiper>
    </>
    )
}

export default Carousel;