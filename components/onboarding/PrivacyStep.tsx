'use client'

import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'

interface PrivacyStepProps {
  data: {
    acceptAiSuggestions: boolean
    shareAnonymousData: boolean
  }
  updateFields: (fields: Partial<PrivacyStepProps['data']>) => void
  onNext: () => void
}

export default function PrivacyStep({
  data,
  updateFields,
  onNext,
}: PrivacyStepProps) {
  const { register, handleSubmit } = useForm({
    defaultValues: data
  })

  const onSubmit = (formData: PrivacyStepProps['data']) => {
    updateFields(formData)
    onNext()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  {...register('acceptAiSuggestions')}
                  id="acceptAiSuggestions"
                />
                <div>
                  <Label htmlFor="acceptAiSuggestions" className="text-base">
                    AI-Powered Intervention Suggestions
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Allow ReLive to provide personalized AI-powered suggestions and interventions
                    based on your recovery progress and patterns.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  {...register('shareAnonymousData')}
                  id="shareAnonymousData"
                />
                <div>
                  <Label htmlFor="shareAnonymousData" className="text-base">
                    Anonymous Data Sharing
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Share your recovery journey data anonymously to help improve the platform
                    and contribute to addiction recovery research.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2">Data Protection</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your privacy and data security are our top priorities. We ensure:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>End-to-end encryption of your personal information</li>
              <li>Compliance with healthcare data protection regulations</li>
              <li>No sharing of identifiable information without consent</li>
              <li>Right to request data deletion at any time</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button type="submit">Complete Setup</Button>
      </div>
    </form>
  )
}