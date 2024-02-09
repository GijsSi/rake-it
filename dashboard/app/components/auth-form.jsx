'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '@/app/utils/supabase'

export default function AuthForm() {

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-gray-900 p-6 rounded shadow w-[400px] max-w-lg mx-auto">
                <Auth
                    supabaseClient={supabase}
                    providers={['google', 'facebook', 'twitter']}
                    appearance={{ theme: ThemeSupa }}
                    theme="dark"
                    showLinks={true}
                    socialLayout="horizontal"
                    confirmation_info="Please check your email for the confirmation link."
                    confirmation_success="Your email has been confirmed."

                    redirectTo="http://localhost:3000/auth/callback"
                />
            </div>
        </div>
    )
}