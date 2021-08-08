import axios from "axios"
import { useEffect, useState } from "react"
import { Route } from "react-router"

import ListCrash from "./components/ListCrash"
import ShowCrash from "./components/ShowCrash"
import Pagination from "./components/Pagination"

const App = () => {
  const [crashes, setCrashes] = useState([])
  const [crashDetails, setCrashDetails] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(500)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://data.cityofnewyork.us/resource/h9gi-nx95.json')
      setCrashes(data)
      setCrashDetails(data[0])
      setPostsPerPage(50)
    }

    getData()
  }, [])

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentList = crashes.slice(indexOfFirstPost, indexOfLastPost)

  // Change Page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div>
      <div class="ui hidden divider"></div>
      <Route exact path="/">
        <ListCrash list={currentList} setCrashDetails={setCrashDetails} />
        <Pagination currentPage={currentPage} postsPerPage={postsPerPage} totalPosts={crashes.length} paginate={paginate} />
      </Route>
      <Route path="/details">
        <ShowCrash data={crashDetails} />
      </Route>
    </div>
  )
}

export default App
