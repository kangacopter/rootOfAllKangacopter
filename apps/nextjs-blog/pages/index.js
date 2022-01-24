import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <box-container box-title="box title">
          <div>Almost before we knew it, we had left the ground.</div>
        </box-container>
        <br />
        <box-container box-title="OH MY GOD!!!!!!!!!!!!!!">
          <div>
            DID THIS JUST FREAKIN WORK OR WHAT?!!??! I HAVE TO BUILD THE
            COMPONENTS. I AM AN I D I O T!
          </div>
        </box-container>
        <br />
        <box-container box-title="Another Test">
          <div>
            This is a github test. Sorry, man.
          </div>
        </box-container>
      </main>
    </>
  )
}
