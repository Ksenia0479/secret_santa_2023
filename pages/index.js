import { useRouter } from "next/navigation";
import Introduction from "../app/_components/Introduction/Introduction";

const Page = () => {
  const router = useRouter();

  const clearCacheHandler = () => {
    localStorage.clear();
  };

  const startGameHandler = () => {
    router.push("/quiz/1");
  };

  return (
    <div
      style={
        {
          //margin: 0,
          //padding: 0,
          //display: "flex",
          //justifyContent: "center",
          //alignItems: "center",
          //height: "100vh",
        }
      }
    >
      <Introduction
        startGameHandler={startGameHandler}
        clearCacheHandler={clearCacheHandler}
      />
    </div>
  );
};

export default Page;
