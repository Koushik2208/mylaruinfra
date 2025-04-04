import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      Blogs page
      <Button asChild>
        <Link href="/admin/blogs/new">New Blog</Link>
      </Button>
    </div>
  );
};

export default page;
