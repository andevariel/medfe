import React, { useState, useEffect } from "react"
import styles from "./styles.css"
import { Dialog } from "./Dialog"
import { CustomCurrentRefinements } from "./CustomCurrentRefinements"
import { CustomHit } from "./CustomHit"
import BestSellers from "@modules/home/components/bestsellers"
import {
  InstantSearch,
  SearchBox,
  RefinementList,
  InfiniteHits,
} from "react-instantsearch"
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch"

const endpoint =
  process.env.NEXT_PUBLIC_SEARCH_ENDPOINT || "http://localhost:7700"
const apiKey = process.env.NEXT_PUBLIC_SEARCH_API_KEY || "1234567Am"

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

export default FacetSearch
