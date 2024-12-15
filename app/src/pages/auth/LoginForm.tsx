"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useAtom } from "jotai"
import { tokenActionAtom } from "@/atoms/authAtom"
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { JWTDecodeToken, LoginFormItem } from "@/types/auth"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const formSchema = z.object({
  username: z
    .string({ required_error: "ユーザー名を入力してください" })
    .trim(),
  password: z
    .string({ required_error: "パスワードを入力してください" })
    .trim()
})

export const LoginForm = () => {
  const navigate = useNavigate();
  const [, setTokenAction] = useAtom(tokenActionAtom);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const loginFormData: LoginFormItem = {
      username: values.username,
      password: values.password
    };

    try {
      const token = await setTokenAction({ type: "post", payload: loginFormData });

      // アクセストークンをCookieに保存
      if (token) {
        Cookies.set('access_token', token.access_token, { expires: 1/24, secure: true, sameSite: 'Strict' });
        const decodeToken: JWTDecodeToken = jwtDecode(token.access_token);
        Cookies.set("is_user_logged_in", "true", { expires: 1, secure: true, sameSite: 'Strict' });
        
        if (decodeToken.role === "admin") {
          Cookies.set("is_admin_logged_in", "true", { expires: 1, secure: true, sameSite: 'Strict' });
        }

        toast.success('ログインに成功しました。');
        navigate("/");
      }
    } catch (error) {
      console.error("Failed to create user:", error);
      toast.error('ログインに失敗しました：' + error);
    }      
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">username</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">SignIn</button>
        <p className="text-xs text-gray-500 mt-3">InternetCircle and CafeBarBUN Portal Site.</p>
      </form>
    </Form>
  )
}