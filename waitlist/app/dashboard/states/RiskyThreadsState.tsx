import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { AlertCircle, ShieldAlert } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/Components/ui/alert';

export function RiskyThreadsState() {
    return (
        <Card className="w-full max-w-2xl mx-auto border-orange-200">
            <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldAlert className="w-8 h-8 text-orange-500" />
                </div>
                <CardTitle className="text-3xl text-orange-900">Found 3 risky threads</CardTitle>
                <CardDescription className="text-lg mt-2">
                    We found conversations, but they are currently flagged as high-risk for automated interaction.
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
                <Alert variant="warning">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Why are these risky?</AlertTitle>
                    <AlertDescription>
                        The moderators of these subreddits are actively banning promotional accounts. We've hidden these results to keep your account safe.
                    </AlertDescription>
                </Alert>

                <div className="flex flex-col items-center">
                    <Button variant="outline">
                        Review Safety Settings
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
