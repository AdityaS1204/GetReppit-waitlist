import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { Loader2 } from 'lucide-react';

export function ScanningState() {
    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Loader2 className="w-8 h-8 text-[#FF4500] animate-spin" />
                </div>
                <CardTitle className="text-3xl">Scanning Reddit for relevant conversations</CardTitle>
                <CardDescription className="text-lg mt-2">
                    This usually takes 30–60 minutes. We only surface threads where your product fits naturally.
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center">
                <Button className="bg-[#FF4500] hover:bg-[#e63e00] shadow-[0_10px_30px_-10px_rgba(255,69,0,0.3)]">
                    Notify me when threads are ready
                </Button>
            </CardContent>
        </Card>
    )
}
