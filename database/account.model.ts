import { model, models, Schema, Document } from "mongoose";

export interface IAccount {
  name: string;
  image?: string;
  password?: string;
  provider: string;
  providerAccountId: string;
  role?: string; // Add role field
}

export interface IAccountDoc extends IAccount, Document {}

const AccountSchema = new Schema<IAccount>(
  {
    name: { type: String, required: true },
    image: { type: String },
    password: { type: String },
    provider: { type: String, required: true },
    providerAccountId: { type: String, required: true },
    role: { type: String, enum: ["admin"], default: "admin" }, // Add role field with enum
  },
  { timestamps: true }
);

// Ensure uniqueness for provider and account ID (important for single admin)
AccountSchema.index({ provider: 1, providerAccountId: 1 }, { unique: true });

const Account = models?.Account || model<IAccount>("Account", AccountSchema);

export default Account;
