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
import { useAtom } from "jotai";
import { isAdminLoginAtom } from "@/atoms/authAtom";

export const Header = () => {
  const handleLogout = Logout();
  const [isAdminLoggedIn] = useAtom(isAdminLoginAtom);

  return (
    <header className="bg-[rgb(12,13,40)] h-20">
      <div className="flex justify-between items-center h-full px-4">
        {/* ロゴ画像 */}
        <div className="flex-shrink-0">
          <img
            src="../../../../public/nessalogo.png"
            alt="Logo"
            className="h-12 md:h-12 lg:h-16 w-auto"
          />
        </div>

        {/* ナビゲーションメニュー (オプション) */}
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a href="/" className="mr-5 text-white hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="mr-5 text-white hover:text-gray-300">
            About
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger className="mr-5 text-white hover:text-gray-300">
              <div className="flex items-center space-x-2">
                <div>Gallery</div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <a href="/image">Image</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/video">Video</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
            {isAdminLoggedIn &&
              <DropdownMenuItem>
                <a href="/admin">管理画面</a>
              </DropdownMenuItem>
            }
            <DropdownMenuItem>プロフィール</DropdownMenuItem>
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