"use client";

import DataForm from "@/components/DataForm";
import { blogCategorySchema } from "@/lib/validations";
import React from "react";

const page = () => {
  return (
    <DataForm
      schema={blogCategorySchema}
      formType="create"
      route="/admin/blogs"
      defaultValues={{
        name: "",
        description: "",
      }}
      fieldTypes={{
        name: "text",
        description: "textarea",
      }}
      
    />
  );
};

export default page;
