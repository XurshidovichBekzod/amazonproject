import React from 'react'
import { useFetch } from '../../hook/useFetch'
import Skleton from '../../components/productCard/Skleton'
import Useres from '../../components/usercard/Useres'

const User = () => {
  const { data, error, loading } = useFetch("/users", { limit: 10, })
  return (

    <>
      {
        error && <p>something went weong :(</p>
      }
      {loading ? <Skleton /> : <Useres data={data} />}
    </>

  )
}

export default User