import { useEffect, useState } from "react";

export default function Blogs() {
  const [posts, setPosts] = useState([]);

  // Define a function to fetch data
  const fetchData = async () => {
    // Define your GraphQL query
    const query = `
      query ($host: String) {
        publication(host: $host) {
          posts(first: 10) {
            edges {
              node {
                title
                coverImage{
                    url
                  } 
                url
                tags {
                  name
                }
              }
            }
          }
        }
      }
    `;

    // Define the variables for the query
    const variables = {
      host: "gauravvala.hashnode.dev", // Replace 'your-host-value-here' with the actual host value
    };

    // Send a POST request to your GraphQL endpoint
    const response = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    // Parse the JSON response
    const responseData = await response.json();

    // Extract the posts from the response
    const extractedPosts = responseData.data.publication.posts.edges.map(
      (edge) => edge.node
    );

    // Update the state with the fetched posts
    setPosts(extractedPosts);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="container mx-auto px-6 pb-10 mt-6">
        <h2 className="pt-4 pb-3 text-3xl font-semibold capitalize">
          My Blogs
        </h2>
        <ul>
          {posts.map((post) => (
            <li
              className="border border-black my-4 p-2 rounded-xl shadow-black  hover:shadow-black_hover transition-all"
              key={post.url}
            >
              {/* {post.coverImage && post.coverImage.url ? (
                <img className="rounded-xl" src={post.coverImage.url} alt="" />
              ) : (
                ""
              )} */}

              <a className="block  text-xl font-semibold " href={post.url}>
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
