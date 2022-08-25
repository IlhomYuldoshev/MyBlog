import ProfilePage from "../../src/Pages/ProfilePage";
import WithAuthComponent from "../../src/Pages/HOCS/WithAuth";

export default function Home() {
  return (
    <WithAuthComponent>
      <ProfilePage/>
    </WithAuthComponent>
  )
}
