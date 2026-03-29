import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

export default function AuthForm({ onSuccess }: { onSuccess?: () => void }) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { toast } = useToast();

    // state for both forms
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");

    const handleAuthError = (err: any) => {
        let msg = err instanceof Error ? err.message : "Authentication failed";
        if (msg.toLowerCase().includes("email rate limit exceeded") || msg.toLowerCase().includes("rate limit")) {
            msg = "Supabase Auth rate limit reached (max 3 emails/hour on free tier). Please wait or use a different IP/service to test.";
        }
        setError(msg);
    };

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            toast({ title: "Welcome back!" });
            onSuccess?.();
        } catch (err: any) {
            handleAuthError(err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: fullName,
                    },
                },
            });

            if (error) throw error;

            // Supabase occasionally doesn't auto-login if certain settings are toggled.
            // We explicitly sign them in here to guarantee the session exists before redirecting.
            if (!data.session) {
                const { error: signInError } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                if (signInError) throw signInError;
            }

            toast({
                title: "Account created successfully!",
                description: "You are now logged in."
            });
            onSuccess?.();
        } catch (err: any) {
            handleAuthError(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-sm mx-auto bg-white p-6 rounded-xl border border-border shadow-sm">
            <h3 className="text-xl font-bold text-slate-dark mb-4 text-center">
                Sign in to Confirm
            </h3>

            <Tabs defaultValue="signin" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="signin">Sign In</TabsTrigger>
                    <TabsTrigger value="signup">Create Account</TabsTrigger>
                </TabsList>

                <TabsContent value="signin">
                    <form onSubmit={handleSignIn} className="space-y-4">
                        <div>
                            <Label htmlFor="signin-email">Email</Label>
                            <Input
                                id="signin-email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <Label htmlFor="signin-password">Password</Label>
                            <Input
                                id="signin-password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {error && (
                            <div className="flex items-start gap-2 text-red-600 bg-red-50 p-3 rounded-md text-sm">
                                <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span>{error}</span>
                            </div>
                        )}

                        <Button type="submit" className="w-full bg-bronze hover:bg-bronze/90" disabled={isLoading}>
                            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Sign In
                        </Button>
                    </form>
                </TabsContent>

                <TabsContent value="signup">
                    <form onSubmit={handleSignUp} className="space-y-4">
                        <div>
                            <Label htmlFor="signup-name">Full Name</Label>
                            <Input
                                id="signup-name"
                                required
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <Label htmlFor="signup-email">Email</Label>
                            <Input
                                id="signup-email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <Label htmlFor="signup-password">Password</Label>
                            <Input
                                id="signup-password"
                                type="password"
                                required
                                minLength={6}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {error && (
                            <div className="flex items-start gap-2 text-red-600 bg-red-50 p-3 rounded-md text-sm">
                                <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span>{error}</span>
                            </div>
                        )}

                        <Button type="submit" className="w-full bg-bronze hover:bg-bronze/90" disabled={isLoading}>
                            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Create Account & Continue
                        </Button>
                    </form>
                </TabsContent>
            </Tabs>
        </div>
    );
}
