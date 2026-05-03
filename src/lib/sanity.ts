import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const SANITY_PROJECT_ID = "px83qjgb";
export const SANITY_DATASET = "production";

export const sanityClient: SanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: "2024-12-01",
  useCdn: true,
  perspective: "published",
});

const builder = imageUrlBuilder(sanityClient);

type ImageSource = Parameters<ReturnType<typeof imageUrlBuilder>["image"]>[0];
export const urlFor = (src: ImageSource) => builder.image(src);
