import Header from "@/components/Header";
import Form from "@/components/Form";
import PostFeed from "@/components/posts/PostFeed";

export default function Home() {
  return (
    <main className="text-white">
      <Header label="Home"/>
      <Form placeholder = "What's happening!?"/>
      <PostFeed/>
    </main>
  )
}
