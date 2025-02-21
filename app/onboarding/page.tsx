import OnboardingForm from "@/components/onboarding/OnboardingForm"

export default function OnboardingPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Begin Your Recovery Journey</h1>
      <OnboardingForm />
    </div>
  )
}