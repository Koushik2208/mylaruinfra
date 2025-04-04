import { model, models, Schema, Document, Types } from "mongoose";

export interface IBlog {
  title: string;
  content: string;
  author: string;
  category?: Types.ObjectId;
  imageUrl?: string;
  isPublished: boolean;
  slug: string;
}

export interface IBlogDoc extends IBlog, Document {}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    imageUrl: { type: String },
    isPublished: { type: Boolean, default: false },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const Blog = models?.Blog || model<IBlog>("Blog", BlogSchema);

export default Blog;
