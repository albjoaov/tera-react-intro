import Topbar from "../../components/Topbar";
import Feed from "../../components/Feed/Feed";
import StoriesBar from "../../components/StoriesBar/StoriesBar";

function Home() {
  return (
    <>
      <Topbar />
      <StoriesBar />
      <Feed />
    </>
  );
}

export default Home;
