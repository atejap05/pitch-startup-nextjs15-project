"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

const SearchFormReset = () => {
  const reset = () => {
    // Reset the form
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) {
      form.reset();
    }
  };

  return (
    <Button type="reset" onClick={reset} className="search-btn text-white">
      <Link href="/">
        <X className="size-5" />
      </Link>
    </Button>
  );
};

export default SearchFormReset;