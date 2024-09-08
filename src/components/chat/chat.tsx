import { FirebaseApp } from "firebase/app";
import { ChatDetails } from "./chat-details";
import { ChatList } from "./chat-list";

export interface BuzzTalkProps {
  wrapperClassNames?: string;
  firebaseApp: FirebaseApp;
}

export function Chat() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <ChatList />
      <ChatDetails />
    </div>
  );
}
