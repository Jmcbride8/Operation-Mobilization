import { useQuery, useQueryClient } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { DEFAULT_IMAGE_MAP } from "@/lib/siteImages";

/**
 * Loads all SiteImage records from the database and merges them with
 * the default fallback URLs defined in lib/siteImages.js.
 *
 * getImage(key) always returns a URL:
 *   1. If the DB has an override for this key → returns the DB url
 *   2. Otherwise → returns the hardcoded default
 *
 * This means images render instantly from defaults, then update
 * reactively once any admin overrides are loaded.
 */
export function useSiteImages() {
  const queryClient = useQueryClient();

  const { data: dbImages = [], isLoading } = useQuery({
    queryKey: ["siteImages"],
    queryFn: async () => {
      const result = await base44.entities.SiteImage.list();
      return result;
    },
  });

  // Start with defaults, overlay DB overrides
  const imageMap = { ...DEFAULT_IMAGE_MAP };
  dbImages.forEach((img) => {
    if (img.key) imageMap[img.key] = img.url;
  });

  const getImage = (key) => imageMap[key] || "";

  const invalidate = () =>
    queryClient.invalidateQueries({ queryKey: ["siteImages"] });

  return { dbImages, imageMap, getImage, isLoading, invalidate };
}