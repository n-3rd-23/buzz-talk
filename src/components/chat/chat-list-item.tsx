import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ChatListItem() {
  return (
    <div className="divide-y cursor-pointer">
      <div className="flex items-center gap-3 px-4 py-3 hover:bg-muted/50 focus-visible:bg-muted/50">
        <Avatar className="h-10 w-10 border">
          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <div className="flex-1 truncate">
          <div className="font-medium">Acme Inc</div>
          <div className="text-sm text-muted-foreground">
            Hey, how's it going?
          </div>
        </div>
        <div className="text-xs text-muted-foreground">2:34 PM</div>
        <div className="text-xs text-muted-foreground">1</div>
      </div>
    </div>
  );
}
