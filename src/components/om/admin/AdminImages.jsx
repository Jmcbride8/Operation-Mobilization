import React, { useState, useMemo } from "react";
import { useSiteImages } from "@/hooks/useSiteImages";
import { SITE_IMAGES } from "@/lib/siteImages";
import ImageEditCard from "./ImageEditCard";

export default function AdminImages() {
  const { dbImages, invalidate } = useSiteImages();
  const [category, setCategory] = useState("ALL");

  // Merge defaults with DB records
  const merged = useMemo(
    () =>
      SITE_IMAGES.map((def) => {
        const dbRecord = dbImages.find((d) => d.key === def.key);
        return {
          ...def,
          id: dbRecord?.id,
          url: dbRecord?.url || def.url,
        };
      }),
    [dbImages]
  );

  const categories = useMemo(
    () => ["ALL", ...new Set(SITE_IMAGES.map((img) => img.category))],
    []
  );

  const filtered =
    category === "ALL"
      ? merged
      : merged.filter((img) => img.category === category);

  return (
    <div className="space-y-6">
      {/* Category filter */}
      <div className="flex flex-wrap gap-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-3 py-1.5 text-[10px] font-mono tracking-[0.1em] border transition-all ${
              category === cat
                ? "border-ignition bg-ignition/10 text-ignition"
                : "border-titanium/20 text-titanium hover:border-titanium/40 hover:text-signal-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((img) => (
          <ImageEditCard
            key={img.key}
            img={img}
            onSaved={invalidate}
          />
        ))}
      </div>

      {/* Stats */}
      <div className="text-[10px] font-mono text-titanium/50 tracking-wider pt-4 border-t border-titanium/10">
        {dbImages.length} / {SITE_IMAGES.length} IMAGES CONFIGURED IN DATABASE
      </div>
    </div>
  );
}