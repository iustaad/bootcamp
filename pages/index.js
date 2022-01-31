import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>City/Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Minhaj</th>
                <td>minhaj@test.com</td>
                <td>KHI/PK</td>
              </tr>
              <tr>
                <th scope="row">Muneeb</th>
                <td>muneeb@test.com</td>
                <td>KHI/PK</td>
              </tr>
              <tr>
                <th scope="row">Bilal</th>
                <td>bilal@test.com</td>
                <td>LHA/PK</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main >

      <style jsx>{`

        .tableContainer {
          display: flex; 
          margin: 5%;
          justify-content: center;
          padding: 5px;
        }

        table{
          width: 40%;
          text-align: left;
          padding: 6px;
          border: 1px solid black;
          border-collapse: collapse

        }

        thead{
          border: 1px solid black;
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
    </div >
  )
}
