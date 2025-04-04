import { model, models, Schema, Document } from "mongoose";

export interface IBlogCategory {
  name: string;
  description?: string;
  slug: string;
}

export interface IBlogCategoryDoc extends IBlogCategory, Document {}

const BlogCategorySchema = new Schema<IBlogCategory>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const BlogCategory =
  models?.BlogCategory ||
  model<IBlogCategory>("BlogCategory", BlogCategorySchema);

export default BlogCategory;
