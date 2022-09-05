import axios from 'axios'
import moment from 'moment'
import React, { Component, useEffect, useState } from 'react'
import DashboardWrapper from '../../component/Dashboard_Wrapper'
import Pagination from '../../component/Pagination'
import { User } from '../../models/User'

const Users = () => {

  const [users, setUser] = useState([])
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(0)

  useEffect(() => {
    (
      async () => {
        const { data } = await axios.get(`user/list?page=${page}`)
        setUser(data.data.dataList)
        setLastPage(data.data.lastPage)
      }
    )()
  }, [page])

  return (
    <DashboardWrapper>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
                <th>Id</th>
                <th>用户名</th>
                <th>头像</th>
                <th>角色Id</th>
                <th>注册时间</th>
              </tr>
          </thead>
          <tbody>
            {users.map((user: User) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.nickname}</td>
                  <td>
                    <img src={user.avatar} width={25} height={25} className='rounded-circle' alt="" />
                  </td>
                  <td>{999}</td>
                  <td>{moment(user.created_at).format("YYYY-MM-DD HH:mm:ss")}</td>
                </tr>
              )
            })}

          </tbody>
        </table>
        <Pagination page={page} lastPage={lastPage} pageChanged={setPage} />
      </div>
    </DashboardWrapper>
  )
}

export default Users