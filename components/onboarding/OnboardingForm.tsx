'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import BasicInfoStep from './BasicInfoStep'
import HealthHistoryStep from './HealthHistoryStep'
import AddictionJourneyStep from './AddictionJourneyStep'
import LifestyleStep from './LifestyleStep'
import PrivacyStep from './PrivacyStep'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'

const steps = [
  'basic-info',
  'health-history',
  'addiction-journey',
  'lifestyle',
  'privacy'
] as const

interface FormData {
  // BasicInfoStep
  name: string
  age: string
  gender: string
  livingSituation: string

  // HealthHistoryStep
  medicalConditions: string
  takingMedications: boolean
  hasSubstanceUseDisorder: boolean
  substanceTypes: string[]
  otherSubstance: string

  // AddictionJourneyStep
  recoveryDuration: string
  hadRelapse: boolean
  relapseTriggers: string[]
  otherTriggers: string

  // LifestyleStep
  stressLevel: string
  sleepHours: string
  physicalActivity: string
  useWearables: boolean

  // PrivacyStep
  acceptAiSuggestions: boolean
  shareAnonymousData: boolean
}

export default function OnboardingForm() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    // BasicInfoStep
    name: '',
    age: '',
    gender: '',
    livingSituation: '',

    // HealthHistoryStep
    medicalConditions: '',
    takingMedications: false,
    hasSubstanceUseDisorder: false,
    substanceTypes: [],
    otherSubstance: '',

    // AddictionJourneyStep
    recoveryDuration: '',
    hadRelapse: false,
    relapseTriggers: [],
    otherTriggers: '',

    // LifestyleStep
    stressLevel: '',
    sleepHours: '',
    physicalActivity: '',
    useWearables: false,

    // PrivacyStep
    acceptAiSuggestions: false,
    shareAnonymousData: false
  })

  const updateFormData = (stepData: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...stepData }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      handleSubmit()
    }
  }

  const handleBack = () => {
    setCurrentStep(prev => prev - 1)
  }

  const handleSubmit = async () => {
    try {
      // Here you would typically send the formData to your backend
      console.log('Form submitted:', formData)
      
      // Redirect to success page
      router.push('/onboarding/success')
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="space-y-8">
      <Progress value={progress} className="w-full" />
      
      <div className="mt-8">
        {currentStep === 0 && (
          <BasicInfoStep
            data={{
              name: formData.name,
              age: formData.age,
              gender: formData.gender,
              livingSituation: formData.livingSituation
            }}
            updateFields={updateFormData}
            onNext={handleNext}
          />
        )}
        {currentStep === 1 && (
          <HealthHistoryStep
            data={{
              medicalConditions: formData.medicalConditions,
              takingMedications: formData.takingMedications,
              hasSubstanceUseDisorder: formData.hasSubstanceUseDisorder,
              substanceTypes: formData.substanceTypes,
              otherSubstance: formData.otherSubstance
            }}
            updateFields={updateFormData}
            onNext={handleNext}
          />
        )}
        {currentStep === 2 && (
          <AddictionJourneyStep
            data={{
              recoveryDuration: formData.recoveryDuration,
              hadRelapse: formData.hadRelapse,
              relapseTriggers: formData.relapseTriggers,
              otherTriggers: formData.otherTriggers
            }}
            updateFields={updateFormData}
            onNext={handleNext}
          />
        )}
        {currentStep === 3 && (
          <LifestyleStep
            data={{
              stressLevel: formData.stressLevel,
              sleepHours: formData.sleepHours,
              physicalActivity: formData.physicalActivity,
              useWearables: formData.useWearables
            }}
            updateFields={updateFormData}
            onNext={handleNext}
          />
        )}
        {currentStep === 4 && (
          <PrivacyStep
            data={{
              acceptAiSuggestions: formData.acceptAiSuggestions,
              shareAnonymousData: formData.shareAnonymousData
            }}
            updateFields={updateFormData}
            onNext={handleNext}
          />
        )}
      </div>

      <div className="flex justify-between mt-8">
        <Button
          onClick={handleBack}
          disabled={currentStep === 0}
          variant="outline"
        >
          Back
        </Button>
        <Button onClick={handleNext}>
          {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
        </Button>
      </div>
    </div>
  )
}