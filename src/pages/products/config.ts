import { defineCollection, z } from "astro:content";

const productsCollection = defineCollection({
    schema: z.object({
        id: z.number(),
        img: z.string(),
        name: z.string(),
        description: z.string(),
        alt: z.string(),
    })
})

export const collections = { productsCollection }