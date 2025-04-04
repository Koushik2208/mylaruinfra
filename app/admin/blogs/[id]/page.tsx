import React from "react";

const BlogDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return <div>Blog {id} detail</div>;
};

export default BlogDetail;
