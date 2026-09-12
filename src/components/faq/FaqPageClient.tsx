"use client";

import React, { useState } from "react";
import { FaqTopicMatrix } from "@/components/faq/FaqTopicMatrix";
import { FaqExplorerMatrix } from "@/components/faq/FaqExplorerMatrix";
import type { DynamicFaqData } from "@/lib/dynamic-faq-types";

interface FaqPageClientProps {
  data: DynamicFaqData;
}

export function FaqPageClient({ data }: FaqPageClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const handleSelectTopicCategory = (catName: string) => {
    setSelectedCategory(catName);
    const element = document.getElementById("faq-explorer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Quick Topic Matrix Highlights */}
      <FaqTopicMatrix
        data={data.topicMatrix}
        onSelectCategory={handleSelectTopicCategory}
      />

      {/* Interactive Search & Accordion Matrix */}
      <FaqExplorerMatrix
        data={data.explorerMatrix}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </>
  );
}
