"use client"

import { useState, useEffect } from 'react'

export default function Demo() {

  const [data, setData] = useState<any>(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://dev-unicorn-pms-order-server.lumous.cn/pms/bill/test')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  return isLoading ?
    <div>Loading...</div>
    :
    <div>{data.data.toString()}</div>
}