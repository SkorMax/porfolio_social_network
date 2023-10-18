import styles from './Posts.module.css';
import Post from './Post/Post';

function Posts() {
  return (
    <section className={styles.posts}>
      <form>Create new post</form>
      <Post message="Hi, how are you?" likesCount={12} />
      <Post message="You are okey?" likesCount={7} />
      <Post message="Miss you!" likesCount={3} />
      <Post message="So much!" likesCount={8} />
    </section>
  );
}

export default Posts;
