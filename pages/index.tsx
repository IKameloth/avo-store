import React, { useState, useEffect } from 'react'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
import fetch from 'isomorphic-unfetch'
// pagina estatica
/*
// ServerSideRendering
export const getServerSideProps = async () => {
  const response = await fetch('https://avo-store-vercel.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json() //rename data: productList
      
  return {
    props: {
      productList
    }
  }
}*/

// StaticSideGeneration
export const getStaticProps = async () => {
  const response = await fetch('https://avo-store-vercel.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json() //rename data: productList
      
  return {
    props: {
      productList
    }
  }
}

const HomePage = ({productList}: {productList: TProduct[]}) => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
