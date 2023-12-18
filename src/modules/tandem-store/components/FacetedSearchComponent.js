import React, { useState, useEffect } from "react"
import styles from "./styles.css"
import {
  InstantSearch,
  SearchBox,
  RefinementList,
  InfiniteHits,
  SortBy,
} from "react-instantsearch"
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch"

import BestSellers from "@modules/home/components/bestsellers"

const endpoint =
  process.env.NEXT_PUBLIC_SEARCH_ENDPOINT || "http://localhost:7700"
const apiKey = process.env.NEXT_PUBLIC_SEARCH_API_KEY || "1234567Am"
const backendUrl =
  process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000"

import { Dialog } from "./Dialog"
import { CustomCurrentRefinements } from "./CustomCurrentRefinements"

const searchClient = instantMeiliSearch(endpoint, apiKey)

const FacetSearch = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [facetFilters, setFacetFilters] = useState({})

  const [showDiv1, setShowDiv1] = useState(true)
  const [showDiv2, setShowDiv2] = useState(true)

  const handleDiv1Close = () => {
    setShowDiv1(false)
  }

  const handleDiv2Close = () => {
    setShowDiv2(false)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768) // Adjust the breakpoint as needed
    }

    // Initial check
    handleResize()

    // Add event listener for window resize
    window.addEventListener("resize", handleResize)

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const toggleFilters = () => {
    setShowFilters(!showFilters)
  }

  const handleFacetChange = (attribute, values) => {
    // Update the facet filters state
    setFacetFilters((prevFilters) => ({ ...prevFilters, [attribute]: values }))
  }

  return (
    <div className="content-container py-6">
      <InstantSearch
        indexName="products"
        searchClient={searchClient}
        future={{
          preserveSharedStateOnUnmount: true,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4">
          {/* Left column for facet filters */}
          <div
            className={`md:col-span-1 ${
              isMobile ? "w-full" : "hidden md:block"
            } p-0`}
          >
            {/* Mobile: Show Filters Button */}
            {isMobile && (
              <div className="text-center mb-4">
                <button onClick={toggleFilters}>
                  {showFilters ? "Приховати фільтри" : "Показати фільтри"}
                </button>
              </div>
            )}

            {/* Always show facets */}
            <Dialog open={!isMobile || showFilters}>
              <div className="w-full">
                {!isMobile && (
                  <SearchBox translations={{ placeholder: "Пошук" }} />
                )}
                <br />

                <div className={`border-bottom p-4`}>
                  <div className="mb-4">Колекція</div>
                  <RefinementList
                    attribute="collection_title"
                    limit={7}
                    showMore
                    showMoreLimit={100}
                    translations={{
                      submitButtonTitle: "Submit",
                      resetButtonTitle: "Reset",
                      noResultsText: "No brands matching your query.",
                      showMoreButtonText({ isShowingMore }) {
                        return isShowingMore
                          ? "Менше колекцій"
                          : "Більше колекцій"
                      },
                    }}
                  />
                </div>
                <br />

                <div className={`border-bottom p-4`}>
                  <div className="mb-4">Тип Тканини</div>
                  <RefinementList
                    attribute="fabric_type"
                    translations={{ showMore: "Показати більше" }}
                    defaultRefinement={facetFilters.fabric_type || []}
                    onRefine={(values) =>
                      handleFacetChange("fabric_type", values)
                    }
                  />
                </div>
                <br />

                <div className={`border-bottom p-4`}>
                  <div className="mb-4">Колір</div>
                  <RefinementList
                    attribute="color"
                    limit={7}
                    showMore
                    showMoreLimit={100}
                    translations={{
                      submitButtonTitle: "Submit",
                      resetButtonTitle: "Reset",
                      noResultsText: "No brands matching your query.",
                      showMoreButtonText({ isShowingMore }) {
                        return isShowingMore
                          ? "Менше кольорів"
                          : "Більше кольорів"
                      },
                    }}
                  />
                </div>
                <br />

                <div className={`border-bottom p-4`}>
                  <div className="mb-4">Тип дизайну</div>
                  <RefinementList
                    attribute="collection_design"
                    translations={{ showMore: "Показати більше" }}
                    defaultRefinement={facetFilters.fabric_type || []}
                    onRefine={(values) =>
                      handleFacetChange("fabric_type", values)
                    }
                  />
                </div>
                <br />
              </div>
            </Dialog>
          </div>

          {/* Right column for search results */}
          <div className={`md:col-span-3 w-full p-4`}>
            {/* Clear Refinements */}
            {/* <ClearRefinements
            translations={{
              resetButtonText: "Скинути фільтри",
            }}
          /> */}
            <CustomCurrentRefinements />
            <div>
              <InfiniteHits
                translations={{
                  showPreviousButtonText: "Попередній перегляд",
                  showMoreButtonText: "Дивитись більше",
                }}
                hitComponent={CustomHit}
              />
            </div>

            <div className="mb-2"></div>
            {showDiv1 && (
              <div
                className="mb-4"
                style={{
                  background: "rgba(249 250 251)",
                  padding: "10px",
                  borderRadius: "10px",
                  color: "black",
                  position: "relative",
                }}
              >
                <button
                  style={{
                    position: "absolute",
                    top: "6px",
                    right: "6px",
                    cursor: "pointer",
                  }}
                  onClick={handleDiv1Close}
                >
                  X
                </button>
                <p className="text-sm">
                  Тканини для меблів від Танем Текстиль отримали сертифікат
                  OEKO-TEX 100.<br></br> OEKO-TEX® STANDARD 100 - це один із
                  найвідоміших у світі знаків якості для текстилю, який пройшов
                  тестування на шкідливі речовини. Він гарантує довіру
                  споживачів та високий рівень безпеки продукції.
                </p>
              </div>
            )}

            {showDiv2 && (
              <div
                className="mb-4"
                style={{
                  background: "rgba(249 250 251)",
                  padding: "10px",
                  borderRadius: "10px",
                  color: "black",
                  position: "relative",
                }}
              >
                <button
                  style={{
                    position: "absolute",
                    top: "6px",
                    right: "6px",
                    cursor: "pointer",
                  }}
                  onClick={handleDiv2Close}
                >
                  X
                </button>
                <p className="text-sm">
                  Наші тканини для оббивки меблів, які відштовхують плями,
                  підтримують безтурботне життя, незалежно від того, де воно
                  може відбуватися. У приміщенні, на вулиці, вдома, на роботі, у
                  гостинних просторах... і всюди між цими місцями. Вони міцні
                  там, де це потрібно: витривалі, неймовірно м'які на дотик і
                  насичені стилем.
                </p>
              </div>
            )}
          </div>
        </div>
      </InstantSearch>
      <BestSellers />
    </div>
  )
}

const CustomHit = ({ hit }) => {
  const [price, setPrice] = useState(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    // Fetch price when the component mounts or when hit.collection_handle changes
    fetchPrice(hit.handle)
  }, [hit.collection_handle])

  const fetchPrice = (fabricHandle) => {
    fetch(`${backendUrl}/store/products?handle=${fabricHandle}`, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then(({ products, limit, offset, count }) => {
        console.log("Fetched products:", products)
        if (products.length > 0) {
          setPrice(products[0]?.variants[0]?.prices[0]?.amount / 100)
        }
      })
      .catch((error) => {
        console.error("Error fetching price:", error)
      })
  }

  return (
    <div key={hit.id}>
      <a
        href={`/collections/${hit.collection_handle}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
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

export default FacetSearch
