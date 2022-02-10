import Head from 'next/head'

export default function Home() {

  let names = ["muneeb", "minhaj", "ali", "wahaj"]

  return (
    <div className="container">
   

      <Head>
        <title>Ali first application</title>
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



<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/S9D7etG8qV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>





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