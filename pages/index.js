import Head from "next/head";


export default function Home() {

  console.log(process.env.URL_SERVER)
  
    return (
        <div className='main'>
            <Head>
                <title>Create Next App</title>
            </Head>

            <h1>Testing</h1>
            <button>Submit</button>

            <button className="btn btn-success text-white">Submit</button>

            <p className="text-info text-center mt-5">This new paragraph</p>

            <div className="d-flex justify-center">
                <div className="bg-red-500 h-32 w-32"></div>
                <div className="bg-green-500 h-32 w-32"></div>
            </div>
        </div>
    );
}
