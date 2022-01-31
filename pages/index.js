import Head from 'next/head'

export default function Home() {

  let names = ["muneeb", "minhaj", "ali", "wahaj"]

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {names.map((user, index) => {
          return(
            <li key={index}>
              {user}
            </li>
          );
        })}
      </main>

      <style jsx>{`
        main {
          padding: 50px;
          display: flex;
          flex-direction: column;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}