import { FilterQuery } from "mongoose";
import action from "../handlers/action";
import handleError from "../handlers/error";
import { BlogCategory } from "@/database";
import { PaginatedSearchParamsSchema } from "../validations";

export async function getBlogCategories(
    params: PaginatedSearchParams
  ): Promise<ActionResponse<{ blogCategories: BlogCategory[]; isNext: boolean }>> {
    const validationResult = await action({
      params,
      schema: PaginatedSearchParamsSchema,
    });
  
    if (validationResult instanceof Error) {
      return handleError(validationResult) as ErrorResponse;
    }
  
    const { page = 1, pageSize = 10, query, filter } = params;
  
    const skip = (Number(page) - 1) * pageSize;
    const limit = pageSize;
  
    const filterQuery: FilterQuery<typeof BlogCategory> = {};
  
    if (query) {
      filterQuery.$or = [
        { name: { $regex: query, $options: "i" } },
        { slug: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ];
    }
  
    let sortCriteria = {};
  
    switch (filter) {
      case "newest":
        sortCriteria = { createdAt: -1 };
        break;
      case "oldest":
        sortCriteria = { createdAt: 1 };
        break;
      case "name_asc":
        sortCriteria = { name: 1 };
        break;
      case "name_desc":
        sortCriteria = { name: -1 };
        break;
      default:
        sortCriteria = { createdAt: -1 };
        break;
    }
  
    try {
      const totalBlogCategories = await BlogCategory.countDocuments(filterQuery);
  
      const blogCategories = await BlogCategory.find(filterQuery)
        .sort(sortCriteria)
        .skip(skip)
        .limit(limit);
  
      const isNext = totalBlogCategories > skip + blogCategories.length;
  
      return {
        success: true,
        data: { blogCategories: JSON.parse(JSON.stringify(blogCategories)), isNext },
      };
    } catch (error) {
      return handleError(error) as ErrorResponse;
    }
  }