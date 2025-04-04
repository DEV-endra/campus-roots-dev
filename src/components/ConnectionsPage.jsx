import img from "../assets/prashant.png";
import SearchBar from "./SearchBar.jsx";
import Sidebar from "./Sidebar.jsx";

import styles from "../styles/connections.module.css";

const connections = [
  {
    name: "Arnav Reddy",
    description:
      "I Was The Roommate Of Anurag Nath. I Was Very Scared Of Him During My First Year. He Always Kept His Bed Messy. I Wanted To Kick Him Off The Room But Can't Because Of The Rules Of The Hostel. Sad Bruh.",
    image: img,
  },
  {
    name: "Prashant",
    description:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But",
    image: img,
  },
  {
    name: "Prashant",
    description:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But",
    image: img,
  },
  {
    name: "Prashant",
    description:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But",
    image: img,
  },
];

export default function Connections() {
  return (
    <div className={styles.container}>
      <Sidebar />

      <div className={styles.connectionList}>
        <SearchBar />

        {connections.map((connection, index) => (
          <div key={index} className={styles.connectionCard}>
            <img
              src={connection.image}
              alt={connection.name}
              className={styles.profileImage}
            />
            <div className={styles.details}>
              <h3 className={styles.name}>{connection.name}</h3>
              <p className={styles.description}>{connection.description}</p>
            </div>
            <button className={styles.messageButton}>Message</button>
          </div>
        ))}
      </div>
    </div>
  );
}
