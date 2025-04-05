"use client";

import DataForm from "@/components/forms/DataForm";
import { blogSchema } from "@/lib/validations";
import React from "react";

const page = () => {
  return (
    <DataForm
      schema={blogSchema}
      formType="create"
      route="/admin/blogs"
      defaultValues={{
        title: "",
        content: "",
        author: "",
        category: "",
        imageUrl: "",
        isPublished: false,
        slug: "",
      }}
      fieldTypes={{
        title: "text",
        content: "richText",
        author: "text",
        category: "dropdown",
        imageUrl: "file",
        isPublished: "text",
        slug: "text",
      }}
      dropdownOptions={{
        category: [
          { value: "electronics", label: "Electronics" },
          { value: "clothing", label: "Clothing" },
          { value: "books", label: "Books" },
        ],
      }}
    />
  );
};

export default page;
