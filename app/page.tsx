import Image from "next/image";
import styles from "./page.module.css";
import OgForm from './components/OgForm'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Open Graph maker</h1>
        <h2>Use this form to create OG compliant html files</h2>
        <p>When you submit the form, an html file will generate in the /public/ogFiles folder and a copy will upload to Irys for storage.</p>
      </div>
      <div>
        <OgForm />
      </div>
    </main>
  );
}
