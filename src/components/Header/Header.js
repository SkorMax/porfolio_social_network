import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <img
        src="https://picsum.photos/id/11/5000/3333"
        alt="Inspiration photo"
      />
      <div className={styles.avatar}>
        <img src="/images/IMG_avatar.jpg" alt="avatar"></img>
      </div>
    </header>
  );
}

export default Header;
