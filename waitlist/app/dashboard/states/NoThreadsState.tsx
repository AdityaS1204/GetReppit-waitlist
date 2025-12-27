import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { SearchX } from 'lucide-react';

export function NoThreadsState() {
    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader className="text-center">
                <div className="w-16 h-16 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <SearchX className="w-8 h-8 text-neutral-400" />
                </div>
                <CardTitle className="text-3xl">No high-intent threads found yet</CardTitle>
                <CardDescription className="text-lg mt-2">
                    We couldn't find any active conversations that match your product profile.
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center space-y-4">
                <p className="text-neutral-500 text-center max-w-md">
                    Try broadening your keywords or adding more pain phrases to your product profile.
                </p>
                <Button variant="outline">
                    Update Product Profile
                </Button>
            </CardContent>
        </Card>
    )
}
