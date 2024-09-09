import { useRouter } from "next/router";
import useSWR from "swr";
import parse from "html-react-parser";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Page = () => {
  const router = useRouter();
  const blogId = router.query.blogid;
  const url = `https://dev.to/api/articles/${blogId}`;

  const { data: blogDetail = {}, isLoading } = useSWR(url, fetcher);

  if (isLoading) return <div>Loading</div>;

  const bodyMarkdown = blogDetail?.body_markdown;
  console.log(blogDetail);

  return (
    <div className="mx-auto w-[655px] flex flex-col gap-10 justify-center">
      <div className="text-2xl">{blogDetail.title}</div>
      <img src={blogDetail.cover_image} />
      <div class="prose">
        <Markdown rehypePlugins={[rehypeHighlight]}>{bodyMarkdown}</Markdown>
      </div>
    </div>
  );
};

export default Page;
