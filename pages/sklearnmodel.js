import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/Navbar.js'
import UploadForm from '../components/UploadForm.js'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AutoML</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="logo.svg" />
      </Head>
      <NavBar />
      <UploadForm />
    </div>
  )
}
