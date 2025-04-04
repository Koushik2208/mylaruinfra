import { Types } from "mongoose";
import { z } from "zod";

export const blogSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  content: z
    .string()
    .min(10, { message: "Content must be at least 10 characters" }),
  author: z.string().min(1, { message: "Author is required" }),
  category: z
    .string()
    .refine((val) => Types.ObjectId.isValid(val) || val === undefined, {
      message: "Invalid Category ObjectId",
    })
    .optional()
    .nullable(),
  imageUrl: z.string().url().optional().nullable(),
  isPublished: z.boolean().default(false),
  slug: z
    .string()
    .min(3, { message: "Slug must be at least 3 characters" })
    .regex(/^[a-z0-9-]+$/, {
      message: "Slug must only contain lowercase letters, numbers, and hyphens",
    }),
});

export const blogCategorySchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  description: z.string().optional().nullable(),
  slug: z
    .string()
    .min(3, { message: "Slug must be at least 3 characters" })
    .regex(/^[a-z0-9-]+$/, {
      message: "Slug must only contain lowercase letters, numbers, and hyphens",
    }).default(""),
});

export const PaginatedSearchParamsSchema = z.object({
  page: z.number().int().positive().default(1),
  pageSize: z.number().int().positive().default(10),
  query: z.string().optional(),
  filter: z.string().optional(),
  sort: z.string().optional(),
});
