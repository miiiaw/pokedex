import { createClient } from "@sanity/client";

export const sanityClient = createClient({
    projectId: 'zuoj3z5o',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-05-03'
})
