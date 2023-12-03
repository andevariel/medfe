import React from "react"
import {
  InstantSearch,
  SearchBox,
  ClearRefinements,
  RefinementList,
  Stats,
  Hits,
  InfiniteHits,
} from "react-instantsearch-dom"
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch"

const searchClient = instantMeiliSearch("http://localhost:7700", "1234567Am")

const FacetSearch = () => (
  <InstantSearch indexName="products" searchClient={searchClient}>
    <div style={{ display: "flex" }}>
      {/* Facet Results on the left with width 300px */}
      <div style={{ width: "300px", marginRight: "20px" }}>
        <div className="search-panel">
          <SearchBox translations={{ placeholder: "Пошук" }} />
          <ClearRefinements translations={{ reset: "Скинути" }} />
          <RefinementList attribute="title" />
        </div>
      </div>

      {/* Search Results on the right */}
      <div style={{ flex: 1 }}>
        <div className="facet-panel">
          <Stats
            translations={{
              stats(nbHits, timeSpentMs) {
                return `Знайдено ${nbHits} тканин`
              },
            }}
          />

          {/* <Hits hitComponent={HitItem} /> */}
          <InfiniteHits hitComponent={HitItem} />
        </div>
      </div>
    </div>
  </InstantSearch>
)

const HitItem = ({ hit }) => (
  <div className="hit-item">
    <h2>{hit.title}</h2>
    <p>{hit.description}</p>
    {hit.thumbnail && (
      <img src={hit.thumbnail} alt="Thumbnail" style={{ width: "300px" }} />
    )}
  </div>
)

export default FacetSearch
