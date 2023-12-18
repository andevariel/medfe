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
        <div className="flex flex-col items-center text-center mb-8">
          <span className="text-base-regular text-gray-600 mb-6">
            Найкращі пропозиції інтернет-магазину
          </span>
          <p className="text-2xl-regular text-gray-900 max-w-lg mb-4">
            Розпродаж Кіото
          </p>
        </div>
        <Slider {...settings}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="/collections/kyoto">
              <img
                src="/kyoto/low/Blossom_02-Ink.jpg"
                alt="Меблева тканина Kyoto Blossom 02 Ink"
                style={imageStyle}
              />
            </a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="/collections/kyoto">
              <img
                src="/kyoto/low/Blossom_05-Bamboo.jpg"
                alt="Меблева тканина Kyoto Blossom 05 Bamboo"
                style={imageStyle}
              />
            </a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="/collections/kyoto">
              <img
                src="/kyoto/low/Inari_02-Ink.jpg"
                alt="Меблева тканина Kyoto Inari 02 Ink"
                style={imageStyle}
              />
            </a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="/collections/kyoto">
              <img
                src="/kyoto/low/Inari_03-Pearl.jpg"
                alt="Меблева тканина Kyoto Inari 03 Pearl"
                style={imageStyle}
              />
            </a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="/collections/kyoto">
              <img
                src="/kyoto/low/Mikado_03-Mink.jpg"
                alt="Меблева тканина Kyoto Mikado 03 Mink"
                style={imageStyle}
              />
            </a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="/collections/kyoto">
              <img
                src="/kyoto/low/Obi_03-Pearl.jpg"
                alt="Меблева тканина Kyoto Obi 03 Pearl"
                style={imageStyle}
              />
            </a>
          </div>
        </Slider>
      </div>
    )
  }
}
