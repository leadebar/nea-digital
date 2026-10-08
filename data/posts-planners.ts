import type { Post } from "@/data/posts";
import { freelancePost } from "@/data/planner-posts/freelance";
import { skincarePost } from "@/data/planner-posts/skincare";
import { networkingPost } from "@/data/planner-posts/networking";
import { contentPost } from "@/data/planner-posts/content";

export const plannerPosts: Post[] = [freelancePost, networkingPost, contentPost, skincarePost];
