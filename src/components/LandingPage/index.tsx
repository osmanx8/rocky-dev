import { Header } from "./Header";
import Loading from "./Loading";
import BotIntro from "./BotIntro";
import { useAuth } from "@/contexts/AuthContext";
import BackgroundText from "../BackgroundText";

export default function Landing() {
  const account = useAuth();
  return (
    <div>
      <div className="flex w-full min-h-screen overflow-hidden">
      
        <Header />
        {!account.loadedIn && <Loading />}
      </div>
      {/* <BotIntro /> */}
    </div>
  );
}
