import { ArrowRight, Pencil, Send } from "lucide-react";
import { useState } from "react";

import Filter from "../components/Filter.jsx";
import Post from "../components/Post.jsx";
import RichEditor from "../components/RichEditor.jsx";
import SearchBar from "../components/SearchBar.jsx";
import SecondarySidebar from "../components/SecondarySidebar.jsx";
import Sidebar from "../components/Sidebar.jsx";

import profilePic from "../assets/default-profile-picture.jpg";

import posts from "../data/posts-data.js";

import styles from "../styles/home-page.module.css";

export default function HomePage() {
  const [isEditorVisible, setIsEditorVisible] = useState(false);

  const handleStartPost = () => {
    setIsEditorVisible(true);
  };

  const handleCancelPost = () => {
    setIsEditorVisible(false);
  };

  return (
    <div className={styles.container}>
      <Sidebar currSelection="feed" />

      <main className={styles.main}>
        <nav className={styles.nav}>
          <SearchBar />
          <div>
            <Filter items={["top", "recent", "relevant"]} />
          </div>
        </nav>

        <div className={styles.donationBanner}>
          <p>
            Your alma mater shaped your journey—now, you can shape someone
            else&apos;s. A small gift can fund scholarships, enhance research,
            and create opportunities for the next generation of IIT Patna
            graduates.
          </p>
          <button className={styles.donateButton}>
            Donate Now <ArrowRight />
          </button>
        </div>

        {!isEditorVisible && (
          <div className={styles.startPost}>
            <img src={profilePic} alt="User Avatar" className={styles.avatar} />
            <button className={styles.postBtn} onClick={handleStartPost}>
              <Pencil /> Start a Post...
            </button>
          </div>
        )}

        {isEditorVisible && (
          <div className={styles.editor}>
            <RichEditor />
            <div>
              <button onClick={handleCancelPost}>Cancel</button>
              <button>
                <Send /> Post
              </button>
            </div>
          </div>
        )}

        <div className={styles.feed}>
          {posts.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </main>

      <SecondarySidebar />
    </div>
  );
}
