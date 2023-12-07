import React from "react"
import styles from "./styles.css"
import {
  InstantSearch,
  SearchBox,
  ClearRefinements,
  RefinementList,
  InfiniteHits,
} from "react-instantsearch-dom"
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch"

const searchClient = instantMeiliSearch("http://localhost:7700", "1234567Am")

const FacetSearch = () => (
  <InstantSearch indexName="products" searchClient={searchClient}>
    <div className="flex">
      {/* Left column */}
      <div className="w-2/8 p-4">
        <SearchBox translations={{ placeholder: "Пошук" }} />
        <ClearRefinements translations={{ reset: "Скинути фільтри" }} />

        <div>
          <div class="mb-4">Тип Тканини</div>
          <RefinementList
            attribute="fabric_type"
            translations={{ showMore: "Показати більше" }}
          />
        </div>
        <br></br>

        <div>
          <div class="mb-4">Колір</div>
          <RefinementList
            attribute="color"
            translations={{ showMore: "Показати більше" }}
          />
        </div>
      </div>

      {/* Right column */}
      <div className="w-6/8 p-4">
        <div>
          <div>
            <InfiniteHits
              translations={{ loadMore: "Дивитись більше" }}
              hitComponent={CustomHit}
            />
          </div>
        </div>
      </div>
    </div>
  </InstantSearch>
)

const CustomHit = ({ hit }) => (
  <div key={hit.id}>
    <a href={`/products/${hit.handle}`}>
      <h2 style={{ padding: "10px" }}>{hit.title}</h2>
      {hit.thumbnail && <img src={hit.thumbnail} alt="Thumbnail" />}
      <p style={{ padding: "10px" }}>{hit.description}</p>
      <button className="flex items-center text-large-regular border-b border-current gap-x-4 py-2 transition-all duration-300 group hover:pl-4 hover:pr-1">
        Перейти до колекції
      </button>
    </a>
  </div>
)

export default FacetSearch
