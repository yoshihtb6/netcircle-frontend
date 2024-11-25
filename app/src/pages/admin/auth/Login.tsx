import { LoginForm } from "@/components/common/auth/LoginForm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const AdminLogin = () => {
  return (
    <div className="container mx-auto">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>
            <div className="text-5xl font-extrabold ...">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                ねっとCircleロゴ
              </span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  )
}