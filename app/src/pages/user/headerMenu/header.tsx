import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Logout } from "@/components/common/auth/Logout";

export const Header = () => {
  const handleLogout = Logout();

  return (
    <header className="bg-gray-800 h-20">
      <div className="flex justify-between items-center h-full px-4">
        {/* ロゴ画像 */}
        <a href="/" className="flex-shrink-0">
          <img
            src="../../../../public/nessalogo.png"
            alt="Logo"
            className="h-12 md:h-12 lg:h-16 w-auto"
          />
        </a>

        {/* ナビゲーションメニュー (オプション) */}
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a href="#home" className="mr-5 text-white hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="mr-5 text-white hover:text-gray-300">
            About
          </a>
          <a href="#contact" className="mr-5 text-white hover:text-gray-300">
            Contact
          </a>
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="h-12 md:h-12 lg:h-16 w-auto">
              <AvatarImage className="bg-white" src="../../../../public/Cheeky.jpg" alt="user icon" />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>ハンドルネーム</DropdownMenuLabel>
            <DropdownMenuLabel>ユーザーID</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>プロフィール</DropdownMenuItem>
            <DropdownMenuItem></DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button onClick={handleLogout}>ログアウト</button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}