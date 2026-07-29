import { defineLive } from "next-sanity";
import { client } from './client';

const { sanityFetch: originalSanityFetch, SanityLive } = defineLive({ 
  client,
  serverToken: process.env.SANITY_API_READ_TOKEN,
  browserToken: process.env.SANITY_API_READ_TOKEN,
});

// Wrap sanityFetch with try-catch to prevent app crash on invalid project ID
export const sanityFetch = async <T>(args: Parameters<typeof originalSanityFetch>[0]) => {
  try {
    return await originalSanityFetch<T>(args);
  } catch (error) {
    console.warn("Sanity live fetch failed, returning empty result:", error);
    return { data: [] as unknown as T };
  }
};

export { SanityLive };
