import styles from '../styles/Home.module.css';

export default function Home({ contents }: { contents: { title: string, body: string }[] }) {
  return (
    <div className={styles.container}>
      <main>
        { contents.map(content => {
          return <>
            <h2>{content.title}</h2>
            <p>{content.body}</p>
          </>;
        }) }
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.BACKEND_URL}`);
  const contents = await response.json();
  return {
    props: { contents }
  };
}
