

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Enter Protein Data
        </h1>
        <form action="insert.php" method="POST">
          <label for="entry">Entry:</label>
          <input type="text" id="entry" name="entry" min={1} style={{color:'black'}}></input><br></br>


          <input type="submit" value="Submit"></input>
        </form>
      </div>

    </main>
  )
}
