import HomePage from "../src/Pages/HomePage";
import {dehydrate, QueryClient, useQuery} from "@tanstack/react-query";
import PostProvider from "../src/Data/Providers/PostProvider";

export const fetch = async () => {
  const data = await PostProvider.getAll();

  return data.data;
}

export default function Home() {
  console.log(111)

  return (
    <>
      <HomePage/>
    </>
  )
}


export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['posts', 1], () => fetch())

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
