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
      <div>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h3 className="text-2xl-semi">Розпродаж Кіото</h3>
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
                alt="Slide 1"
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
                alt="Slide 2"
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
                alt="Slide 3"
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
                alt="Slide 4"
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
                alt="Slide 5"
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
                alt="Slide 5"
                style={imageStyle}
              />
            </a>
          </div>
        </Slider>
      </div>
    )
  }
}
