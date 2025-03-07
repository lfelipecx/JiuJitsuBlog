import { Button } from "@/app/_components/ui/button";
import { getPost } from "@/app/_services/notion";
import Link from "next/link";
import Markdown from "markdown-to-jsx";


type Params = Promise<{ slug: string }>

const BlogPost = async (  { params }: { params: Params } ) => {
  const {slug} = await params;
  const post = await getPost(slug);


  return (
    
      <div className="m-auto sm:max-w-2xl px-3">
        <h1 className="text-3xl text-center md:text-4xl py-6 text-gray-700 font-semibold">
          {post.title}
        </h1>
        <Markdown className="prose dark:prose-invert">{post.content}</Markdown>
        <div className="flex justify-center pt-8">
          <Button asChild>
            <Link href="/blog" className="font-semibold">Voltar</Link>
          </Button>

        </div>
      </div>
    
  );
};

export default BlogPost;
