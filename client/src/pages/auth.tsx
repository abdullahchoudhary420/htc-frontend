import SEO from "@/components/SEO";
import AuthForm from "@/components/AuthForm";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function AuthPage() {
    const navigate = useNavigate();
    const { toast } = useToast();

    return (
        <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-4">
            <SEO
                title="Sign In / Sign Up | Hometown Catering"
                description="Sign in or create an account to book your ice cream truck."
            />

            <div className="max-w-md w-full">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-dark mb-3">Welcome Back</h1>
                    <p className="text-gray-600">Please sign in or create an account to continue</p>
                </div>

                <AuthForm onSuccess={() => {
                    const pendingStr = sessionStorage.getItem('pendingBooking');
                    if (pendingStr) {
                        // A pending booking exists – send the user BACK to the booking
                        // flow so they complete the $50 deposit payment step.
                        // The pendingBooking key stays in sessionStorage so BookingFlow
                        // can restore the full form state and jump straight to payment.
                        toast({
                            title: "Signed in!",
                            description: "Resuming your booking – please complete the deposit payment.",
                        });
                        navigate('/booking?resume=true');
                        return;
                    }
                    navigate('/dashboard');
                }} />
            </div>
        </div>
    );
}
