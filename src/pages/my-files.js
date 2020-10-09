import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"

export default function MyFiles({data}) {
  return (
    <Layout>
      <div>
        <h1>My Site's Files</h1>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>publicURL</th>
              <th>absolutePath</th>
              <th>accessTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.name}</td>
                <td>{node.publicURL}</td>
                <td>{node.absolutePath}</td>
                <td>{node.accessTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile {
      edges {
        node {
          id
          absolutePath
          accessTime
          publicURL
          name
        }
      }
    }
  }
  `