import UseGetAllWorks from "@/hooks/useGetAllWorks"

export default function Works() {
  return <></>
}

export const getServerSideProps = ({}) => {
  const allWorks = UseGetAllWorks()
  return {
    redirect: {
      destination: `/works/${allWorks[0].filename.replace(".mdx", "")}`,
      permanent: true,
    },
  }
}
