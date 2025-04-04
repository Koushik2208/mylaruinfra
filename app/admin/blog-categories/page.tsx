// import { columns } from "@/components/columns/blog-category-columns";
// import { DataTable } from "@/components/table/data-table";
// import { getBlogCategories } from "@/lib/actions/blog-category.action";
// import React from "react";

// interface SearchParams {
//   searchParams: Promise<{ [key: string]: string }>;
// }

// const Lawyers = async ({ searchParams }: SearchParams) => {
//   const { page, pageSize, query, filter } = await searchParams;

//   const { success, data, error } = await getBlogCategories({
//     page: Number(page) || 1,
//     pageSize: Number(pageSize) || 10,
//     query: query || "",
//     filter: filter || "",
//   });

//   const { blogCategories, isNext } = data || {};

//   if (error) return <p>Something went wrong!!!</p>;

//   return (
//     <div>
//       {success ? (
//         <DataTable
//           columns={columns}
//           data={blogCategories || []}
//           isNext={isNext ?? false}
//         />
//       ) : null}
//     </div>
//   );
// };

// export default Lawyers;


import React from "react";

const page = () => {
  return <div>Blog categories page</div>;
};

export default page;