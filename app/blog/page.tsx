import Link from "next/link";
import { getPosts } from "../_services/notion";
import { Separator } from "../_components/ui/separator";


const BlogHome = async () => {
  const posts = await getPosts();

  return (
    <div className="w-full">
      <div className="m-auto max-w-4xl p-6">
        <h1 className="text-4xl pt-10 pb-12 text-center font-semibold">Jiu-Jitsu Root Blog</h1>

        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-5 space-y-1">
              <Link
                href={`/blog/${post.slug}`}
                className="text-2xl text-gray-700 font-semibold"
              >
                {post.title}
              </Link>
              <p className="text-sm">{post.description}</p>
              <div className="space-x-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-sm text-slate-400">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <p>Por {post.author.name}</p>
             
              <p className="text-sm pb-4">
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(post.createdAt)
                )}
              </p>
              <div>
                <Separator />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogHome;
