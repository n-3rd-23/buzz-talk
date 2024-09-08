import { ChatDetails } from "./chat-details";
import { ChatList } from "./chat-list";

export interface ChatWrapperProps {
  wrapperClassNames?: string;
}

export function Chat() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <ChatList />
      <ChatDetails />
    </div>
  );
}
