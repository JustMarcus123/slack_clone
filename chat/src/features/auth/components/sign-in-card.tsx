import { Button } from "@/components/ui/button"
import { Card,CardHeader,CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

import {FcGoogle} from "react-icons/fc"
import {FaGithub} from "react-icons/fa"
// import { SignUpCard } from './sign-up-card';
import { SignInFlow } from "../types"
import { useState } from "react"


interface SignInCardProps{
    setState:(state:SignInFlow) =>void;
};


export const SignInCard =({
    setState
}:SignInCardProps)=>{
    
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    return(
        <Card className="flex flex-col items-center justify-center p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
    <CardHeader className="px-0 pt-0 text-center">
        <h2 className="text-2xl font-semibold">Login to continue</h2>
        <CardDescription className="mt-2 text-sm text-gray-600">
            Use your email or another service to continue
        </CardDescription>
    </CardHeader>
    <CardContent className="w-full space-y-6 px-0 pt-6 pb-0">
        <form className="space-y-4 w-full">
            <Input
                disabled={false}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                disabled={false}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
                Continue
            </Button>
        </form>
        <Separator className="my-4">
            <span className="text-gray-400">or</span>
        </Separator>
        <div className="w-full space-y-4">
    <Button
        disabled={false}
        onClick={() => {}}
        variant="outline"
        size="lg"
        className="w-full py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition duration-200"
    >
        <FcGoogle className="w-6 h-6 mr-2" />
        Continue with Google
    </Button>

    <Button
        disabled={false}
        onClick={() => {}}
        variant="outline"
        size="lg"
        className="w-full py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition duration-200"
    >
        <FaGithub className="w-6 h-6 mr-2" />
        Continue with Github
    </Button>
</div>

<div className="flex items-center space-x-1">
    <p className="text-xs text-muted-foreground">
        Don't have an account?
    </p>
    <span onClick={()=>setState('signUp')} className="text-sky-700 hover:underline cursor-pointer">
        Sign up
    </span>
</div>


    </CardContent>
</Card>

    )
}