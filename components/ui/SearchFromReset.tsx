"use client";

import { X } from "lucide-react";

const SearchFromReset = () => {
  const setForm = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  }

  return (
    <button className="search-btn text-white" onClick={setForm}>
     <X className="size-5"/>
    </button>
  )
}

export default SearchFromReset