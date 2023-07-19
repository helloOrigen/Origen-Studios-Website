import React, { useState } from 'react'
import Btn from './btn'
const SearchComponent = () => {
  const [searchText, setSearchText] = useState('')
  const [filters] = useState([])

  const handleSearch = () => {
    console.log('Realizando búsqueda:', searchText)
  }

  const handleClear = () => {
    setSearchText('')
  }

  const handleFilter = () => {
    console.log('Aplicando filtros:', filters)
  }

  return (
    <div className="w-100 h-50px h-pr-fl-ma  r-v-c">
      <label htmlFor="" className="w-100 br-s-solid br-c-white br-r-50px flexbox">
      <input
        className="w-a h-50px p-10px bg-none f-f-Gilroy c-white ns-f-s-normal h-pr-fl-ma"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Btn className="w-a h-50px h-pr-fl-ma p-l-10px p-r-10px" click={handleClear} text="X"></Btn>
      <Btn className="w-a h-50px h-pr-fl-ma p-l-5px p-r-5px" click={handleFilter} text="FIT"></Btn>
      <Btn className="w-a h-50px h-pr-fl-ma p-l-5px p-r-5px" click={handleSearch} text="Buscar"></Btn>
      </label>
    </div>
  )
}

export default SearchComponent
