import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PostListPage from "./pages/PostListPage";
import PostDetailPage from "./pages/PostDetailPage";
import CreatePostPage from "./pages/CreatePostPage";
import EditPostPage from "./pages/EditPostPage";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "React Router",
      description: "React Router giúp xây dựng website nhiều trang trong React."
    },
    {
      id: 2,
      title: "NodeJS API",
      description: "Backend API cung cấp dữ liệu cho frontend React."
    },
    {
      id: 3,
      title: "React State",
      description: "State giúp quản lý dữ liệu thay đổi trong component."
    }
  ]);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function updatePost(updatedPost) {
    const newPosts = posts.map((post) => {
      if (post.id === updatedPost.id) {
        return updatedPost;
      }
      return post;
    });
    setPosts(newPosts);
  }

  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostListPage posts={posts} />} />
          <Route path="/posts/:id" element={<PostDetailPage posts={posts} />} />
          <Route
            path="/posts/create"
            element={<CreatePostPage onCreatePost={createPost} />}
          />
          <Route
            path="/posts/:id/edit"
            element={
              <EditPostPage posts={posts} onUpdatePost={updatePost} />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;