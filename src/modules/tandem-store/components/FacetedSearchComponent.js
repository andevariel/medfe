import React, { useState, useEffect } from "react"
import styles from "./styles.css"
import {
  InstantSearch,
  SearchBox,
  ClearRefinements,
  RefinementList,
  InfiniteHits,
  CurrentRefinements,
  SortBy,
} from "react-instantsearch"
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch"

import { Dialog } from "./Dialog"
import { CustomCurrentRefinements } from "./CustomCurrentRefinements"

const searchClient = instantMeiliSearch("http://localhost:7700", "1234567Am")

const FacetSearch = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [facetFilters, setFacetFilters] = useState({})

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
                  {showFilters ? "Hide Filters" : "Show Filters"}
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

                <div className={`bg-gray-100 p-4`}>
                  <div className="mb-4">Колекція</div>
                  <RefinementList
                    attribute="collection_title"
                    limit={7}
                    showMore
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

                <div className={`bg-gray-100 p-4`}>
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

                <div className={`bg-gray-100 p-4`}>
                  <div className="mb-4">Колір</div>
                  <RefinementList
                    attribute="color"
                    translations={{ showMore: "Показати більше" }}
                    defaultRefinement={facetFilters.color || []}
                    onRefine={(values) => handleFacetChange("color", values)}
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
          </div>
        </div>
      </InstantSearch>
    </div>
  )
}

const CustomHit = ({ hit }) => (
  <div key={hit.id}>
    <a href={`/collections/${hit.collection_handle}`}>
      <h2 style={{ padding: "10px" }}>
        {hit.fabric_type} {hit.collection_title}
      </h2>
      {hit.thumbnail && <img src={hit.thumbnail} alt={hit.title} />}
      <p style={{ padding: "10px" }}>{hit.description}</p>
      <button className="flex items-center text-large-regular border-b border-current gap-x-4 py-2 transition-all duration-300 group hover:pl-4 hover:pr-1">
        Перейти до колекції
      </button>
    </a>
  </div>
)

export default FacetSearch
