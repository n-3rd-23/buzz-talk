import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export function ChatDetails() {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex h-16 items-center justify-between border-b bg-background px-4">
        <div className="text-lg font-semibold">Acme Inc</div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            Search
          </Button>
          <Button variant="ghost" size="icon">
            Horizon
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <div className="grid gap-4">
          <div className="flex items-start gap-3">
            <Avatar className="h-8 w-8 border">
              <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="max-w-[75%] rounded-2xl bg-primary p-3 text-sm text-primary-foreground">
              Hey, how's it going? I wanted to follow up on that project we
              discussed earlier.
            </div>
          </div>
          <div className="flex items-start gap-3 justify-end">
            <div className="max-w-[75%] rounded-2xl bg-muted p-3 text-sm">
              Great, I'm available to chat about it anytime. How about we hop on
              a quick call in the next 30 minutes?
            </div>
            <Avatar className="h-8 w-8 border">
              <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-start gap-3">
            <Avatar className="h-8 w-8 border">
              <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="max-w-[75%] rounded-2xl bg-primary p-3 text-sm text-primary-foreground">
              Sounds good, I'll send you a calendar invite. Looking forward to
              it!
            </div>
          </div>
          <div className="flex items-start gap-3 justify-end">
            <div className="max-w-[75%] rounded-2xl bg-muted p-3 text-sm">
              Perfect, thanks! I'll talk to you then.
            </div>
            <Avatar className="h-8 w-8 border">
              <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      <div className="flex h-16 items-center border-t bg-background px-4">
        <Input
          type="text"
          placeholder="Type your message..."
          className="flex-1 rounded-full bg-muted px-4 py-2 text-sm focus:outline-none"
        />
        <Button variant="ghost" size="icon" className="ml-2">
          Send
        </Button>
      </div>
    </div>
  );
}
