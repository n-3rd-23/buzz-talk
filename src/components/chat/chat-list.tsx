import { Button } from "@/components/ui/button";
import { ChatListItem } from "./chat-list-item";

export function ChatList() {
  return (
    <div className="hidden w-64 flex-col border-r bg-background md:flex">
      <div className="flex h-16 items-center justify-between border-b px-4">
        <div className="text-lg font-semibold">Chats</div>
        <Button variant="ghost" size="icon">
          +
        </Button>
      </div>
      <div className="flex-1 overflow-auto">
        <ChatListItem />
      </div>
    </div>
  );
}
