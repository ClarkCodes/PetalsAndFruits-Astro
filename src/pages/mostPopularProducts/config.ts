import { defineCollection, z } from "astro:content";

const mostPopularProducts = defineCollection({
    schema: z.object({
        id: z.number(),
        name: z.string(),
        description: z.string(),
        img: z.string(),
    })
})

export const collections = { mostPopularProducts }