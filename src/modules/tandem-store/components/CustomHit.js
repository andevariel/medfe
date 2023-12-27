import React, { useState, useEffect } from "react"

const backendUrl =
  process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000"
const brubackendUrl = process.env.brubackendUrl || "http://localhost:3000"
const bearerToken = process.env.bearerToken || "your_actual_bearer_token"

function checkTandem() {
  const search = window.location.search
  const params = new URLSearchParams(search)
  const tandemConst = params.get("tandem")
  const tandemKey = process.env.tandemKey || "tandem2024"
  const tandem = tandemConst === tandemKey

  return tandem
}

export const CustomHit = ({ hit }) => {
  const [price, setPrice] = useState(null)
  const [itemId, setitemId] = useState(null)
  const [stockQuantity, setstockQuantity] = useState(null)
  const [stockDate, setstockDate] = useState(null)
  const [isHovered, setIsHovered] = useState(false)

  const isTandem = checkTandem()

  useEffect(() => {
    fetchPrice(hit.handle)
    if (isTandem) {
      fetchItemId(hit.title)
        .then((itemId) => {
          // Run fetchAvailability with the obtained itemId
          fetchAvailability(itemId)
        })
        .catch((error) => {
          setstockQuantity("")
          setstockDate("")
          console.error("Error fetching item ID:", error)
        })
    }
  }, [hit.handle, hit.title])

  const fetchPrice = (fabricHandle) => {
    fetch(`${backendUrl}/store/products?handle=${fabricHandle}`, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then(({ products, limit, offset, count }) => {
        if (products.length > 0) {
          setPrice(products[0]?.variants[0]?.prices[0]?.amount / 100)
        }
      })
      .catch((error) => {
        console.error("Error fetching price:", error)
      })
  }

  const fetchItemId = (title, bearerToken) => {
    const apiUrl = `${brubackendUrl}/fetchItemId`
    const headers = new Headers({
      "Cache-Control": "no-cache",
      Authorization: `Bearer ${bearerToken}`, // Add Bearer token here
    })

    const url = `${apiUrl}/${title}`

    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "GET",
        headers: headers,
      })
        .then((response) => response.json())
        .then(({ results }) => {
          if (results && results.length > 0) {
            setitemId(results[0].item?.itemId)
            resolve(results[0].item?.itemId) // Resolve with itemId
          } else {
            reject(new Error("Item ID not found"))
          }
        })
        .catch((error) => {
          console.error("Error fetching item ID:", error)
          reject(error)
        })
    })
  }

  const fetchAvailability = (stockId, bearerToken) => {
    const url = `${brubackendUrl}/fetchAvailability/${stockId}`
    const headers = new Headers({
      "Cache-Control": "no-cache",
      Authorization: `Bearer ${bearerToken}`, // Add Bearer token here
    })

    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then(({ results }) => {
        if (results && results.length > 0) {
          setstockQuantity(results[0].item?.stockQuantity)
          setstockDate(results[0].item?.stockDate)
        } else {
          setstockQuantity("")
          setstockDate("")
        }
      })
      .catch((error) => {
        console.error("Error fetching availability:", error)
      })
  }

  return (
    <div key={hit.id}>
      <a
        href={`/collections/${hit.collection_handle}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isTandem && (
          <>
            {stockQuantity !== null ? (
              <span className="font-semibold">
                Bru {stockQuantity} м.п. на {stockDate}
              </span>
            ) : (
              <span className="font-semibold">Завантаження наявності...</span>
            )}
          </>
        )}
        <h2 style={{ padding: "10px" }}>
          {hit.fabric_type} {hit.collection_title}
        </h2>
        {hit.thumbnail && (
          <div
            className="rectangular-image-container"
            style={{ position: "relative", textAlign: "center" }}
          >
            <img
              src={hit.thumbnail}
              alt={hit.title}
              className="rectangular-image"
            />
            {isHovered && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "rgba(0, 0, 0, 0.5)",
                  padding: "10px",
                  borderRadius: "10px",
                  color: "white",
                }}
              >
                <p style={{ fontSize: "16px" }}>{hit.title}</p>
              </div>
            )}
          </div>
        )}
        <p style={{ padding: "6px" }}>{hit.description}</p>
        <div style={{ display: "flex", alignItems: "center", padding: "6px" }}>
          <img src="drapery.png" alt="Штори" className="fabric-icon" />
          <img
            src="upholstery.png"
            alt="Оббивка (для меблів)"
            className="fabric-icon"
          />
          {/* <img src="FG-icons_PETS.png" alt="Slide 1" className="fabric-icon" /> */}
        </div>
        {price !== null ? (
          <span className="font-semibold">₴ {price?.toFixed(2)}</span>
        ) : (
          <span className="font-semibold">Завантаження ціни...</span>
        )}
      </a>
      <div className="mb-2"></div>
      <a href={`/products/${hit.handle}`}>
        <button className="w-full uppercase flex items-center justify-center min-h-[50px] px-5 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50 text-white bg-gray-900 border-gray-900 hover:bg-gray-800 hover:text-white disabled:hover:bg-gray-900 disabled:hover:text-white">
          Купити
        </button>
      </a>
      <div className="mb-2"></div>
      <a href={`/collections/${hit.collection_handle}`}>
        <button className="w-full uppercase flex items-center justify-center min-h-[50px] px-5 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50 text-gray-900 bg-white border-gray-900 hover:bg-gray-100 hover:text-gray-900 disabled:hover:bg-gray-900 disabled:hover:text-white">
          Дізнатися більше
        </button>
      </a>
    </div>
  )
}
