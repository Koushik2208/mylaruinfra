import { model, models, Schema, Document } from "mongoose";

export interface IProject {
  name: string;
  description?: string;
  tags?: string[];
  image?: string;
}

export interface IProjectDoc extends IProject, Document {}

const ProjectSchema = new Schema<IProject>(
  {
    name: { type: String, required: true },
    description: { type: String },
    tags: [{ type: String }],
    image: { type: String },
  },
  { timestamps: true }
);

const Project = models?.Project || model<IProject>("Project", ProjectSchema);

export default Project;
