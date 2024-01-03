"use client"

import React, { Component, CSSProperties } from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const imageStyle: CSSProperties = {
  maxWidth: "100%",
  maxHeight: "100%",
  margin: "auto",
  display: "block",
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // Enable autoplay
      autoplaySpeed: 3000, // Set the autoplay speed in milliseconds (e.g., 3000ms or 3s)
    }
    return (
      <div className="content-container py-6">
        <Slider {...settings}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
              <div className="flex flex-col items-center text-center mb-8">
                <span className="text-base-regular text-gray-600 mb-6">
                  Велюр Варлок – це витончене поєднання сучасного дизайну та
                  класичного комфорту, яке перетворить ваш простір у вишукане
                  місце відпочинку та стилю.
                </span>
                <p className="text-2xl-regular text-gray-900 max-w-lg mb-4">
                  Бестселер Варлок
                </p>
              </div>
              <div className="-m-1 flex flex-wrap md:-m-2">
                {/* Big Image on the Left */}
                <div className="w-full md:w-1/2 p-1 md:p-4">
                  <a href="/collections/warlock">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-2xl object-cover object-center"
                      src="bestsellers/Warlock--Warlock--26-Emerald--CloseUp_BL_65_BL_65_CU.jpg"
                    />
                  </a>
                </div>

                {/* Four Boxes on the Right */}
                <div className="w-full md:w-1/2 flex flex-wrap">
                  <div className="w-1/2 p-1 md:p-4">
                    <a href="/collections/warlock">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-2xl object-cover object-center"
                        src="bestsellers/Warlock--Warlock--26-Emerald--Chair_DiningChair_Front.jpg"
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-1 md:p-4">
                    <a href="/collections/warlock">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-2xl object-cover object-center"
                        src="bestsellers/Warlock--Warlock--26-Emerald--Curtain_Rail_Bottom.jpg"
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-1 md:p-4">
                    <a href="/collections/warlock">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-2xl object-cover object-center"
                        src="bestsellers/Warlock--Warlock--26-Emerald--Sofa_SofaArcher_Side2.jpg"
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-1 md:p-4">
                    <a href="/collections/warlock">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-2xl object-cover object-center"
                        src="bestsellers/Warlock--Warlock--26-Emerald--Sofa_SofaDaybed_Detail.jpg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
              <div className="flex flex-col items-center text-center mb-8">
                <span className="text-base-regular text-gray-600 mb-6">
                  Тканина Твайс імітує натуральну замшу з неймовірною точністю,
                  даруючи вашому приміщенню вишуканий вигляд та розкіш.
                </span>
                <p className="text-2xl-regular text-gray-900 max-w-lg mb-4">
                  Бестселер Твайс
                </p>
              </div>
              <div className="-m-1 flex flex-wrap md:-m-2">
                {/* Big Image on the Left */}
                <div className="w-full md:w-1/2 p-1 md:p-4">
                  <a href="/collections/twice">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-2xl object-cover object-center"
                      src="bestsellers/Twice--twice_twice_15-A-gargoyle WR.jpg"
                    />
                  </a>
                </div>

                {/* Four Boxes on the Right */}
                <div className="w-full md:w-1/2 flex flex-wrap">
                  <div className="w-1/2 p-1 md:p-4">
                    <a href="/collections/twice">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-2xl object-cover object-center"
                        src="bestsellers/Twice--Twice--15-A-Gargoyle--Chair_DiningChair_Front.jpg"
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-1 md:p-4">
                    <a href="/collections/twice">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-2xl object-cover object-center"
                        src="bestsellers/Twice--Twice--15-A-Gargoyle--Curtain_Grommet_Bottom.jpg"
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-1 md:p-4">
                    <a href="/collections/twice">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-2xl object-cover object-center"
                        src="bestsellers/Twice--Twice--15-A-Gargoyle--Sofa_SofaClassic_Detail1.jpg"
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-1 md:p-4">
                    <a href="/collections/twice">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-2xl object-cover object-center"
                        src="bestsellers/Twice--Twice--15-A-Gargoyle--Sofa_SofaDaybed_Detail.jpg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}
