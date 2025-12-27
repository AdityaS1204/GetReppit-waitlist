import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';
import {
    ArrowRight,
    Info,
    ShieldCheck,
    Zap,
    ArrowLeft,
    MessageCircle,
    Copy,
    Sparkles,
    User
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/Components/ui/tooltip';
import { motion, AnimatePresence } from 'framer-motion';

interface Thread {
    id: number;
    title: string;
    subreddit: string;
    time: string;
    intent: 'High' | 'Medium';
    safety: 'Safe' | 'Risky';
    reason: string;
    content?: string;
    author?: string;
}

const mockThreads: Thread[] = [
    {
        id: 1,
        title: "How to automate SEO for a new SaaS?",
        subreddit: "r/SaaS",
        time: "12m ago",
        intent: "High",
        safety: "Safe",
        reason: "User is asking for specific tool recommendations and has budgeting authority.",
        author: "founder_guy",
        content: "I've just launched my SaaS and I'm looking for ways to automate my SEO workflow. What tools are you guys using? I'm particularly interested in automated backlink tracking and content optimization suggestions. Any advice would be appreciated!"
    },
    {
        id: 2,
        title: "Anyone used AI for reddit marketing?",
        subreddit: "r/startups",
        time: "45m ago",
        intent: "Medium",
        safety: "Safe",
        reason: "General inquiry about methodology. Good for educational authority building.",
        author: "startup_jane",
        content: "Is anyone here using AI tools to help with their Reddit marketing strategy? I find it hard to keep track of all the relevant subreddits and conversations. Curious to know what's working for you guys."
    },
    {
        id: 3,
        title: "Best tools for finding customer intent",
        subreddit: "r/marketing",
        time: "1h ago",
        intent: "High",
        safety: "Safe",
        reason: "Direct pain point mapping. High conversion potential if handled naturally.",
        author: "marketing_pro",
        content: "We're struggling to identify high-intent customers before they make a decision. Are there any tools that can help track potential buyers based on their social media activity or forum posts?"
    },
];

export function ThreadsAvailableState() {
    const [selectedThread, setSelectedThread] = useState<Thread | null>(null);

    if (selectedThread) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-6xl mx-auto space-y-6"
            >
                <Button
                    variant="ghost"
                    onClick={() => setSelectedThread(null)}
                    className="mb-4 hover:bg-neutral-100"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to feed
                </Button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: Thread Content */}
                    <div className="space-y-6">
                        <Card className="border-black/5 shadow-sm overflow-hidden">
                            <div className="bg-neutral-50 px-8 py-6 border-b border-black/5">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center">
                                        <User className="w-4 h-4 text-neutral-500" />
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-bold text-black">{selectedThread.subreddit}</span>
                                        <span className="text-neutral-400 mx-2">•</span>
                                        <span className="text-neutral-500">Posted by u/{selectedThread.author}</span>
                                        <span className="text-neutral-400 mx-2">•</span>
                                        <span className="text-neutral-500">{selectedThread.time}</span>
                                    </div>
                                </div>
                                <h1 className="text-2xl font-bold leading-tight font-[family-name:var(--font-instrument-serif)]">
                                    {selectedThread.title}
                                </h1>
                            </div>
                            <CardContent className="p-8">
                                <p className="text-neutral-700 leading-relaxed text-lg whitespace-pre-wrap">
                                    {selectedThread.content}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-orange-100 bg-orange-50/30">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                                        <Info className="w-5 h-5 text-[#FF4500]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-black mb-1">Why this thread?</h4>
                                        <p className="text-neutral-600 text-sm">{selectedThread.reason}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right: Comment Drafting Panel */}
                    <div className="space-y-6">
                        <div className="bg-white border border-black/5 rounded-[32px] p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] sticky top-32">
                            <div className="flex items-center justify-between mb-8">
                                <div className="space-y-1">
                                    <h2 className="text-2xl font-bold font-[family-name:var(--font-instrument-serif)]">Suggested replies</h2>
                                    <p className="text-sm text-neutral-500">These replies are tailored to the thread and subreddit rules.</p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">
                                    <Sparkles className="w-5 h-5 text-[#FF4500]" />
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="aspect-video rounded-2xl bg-neutral-50 border border-black/5 flex flex-col items-center justify-center p-8 text-center">
                                    <div className="w-12 h-12 rounded-2xl bg-white border border-black/5 shadow-sm flex items-center justify-center mb-4">
                                        <MessageCircle className="w-6 h-6 text-neutral-400" />
                                    </div>
                                    <h4 className="font-bold text-black mb-2">No drafts generated</h4>
                                    <p className="text-sm text-neutral-500 max-w-[240px]">
                                        Click bellow to generate 3 custom AI replies based on your product profile.
                                    </p>
                                </div>

                                <Button
                                    className="w-full h-14 bg-[#FF4500] hover:bg-[#e63e00] shadow-[0_10px_30px_-10px_rgba(255,69,0,0.3)] text-lg rounded-2xl font-bold transition-all hover:scale-[1.02] active:scale-95"
                                >
                                    Generate drafts
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-4xl font-bold font-[family-name:var(--font-instrument-serif)]">Opportunity Feed</h2>
                    <p className="text-neutral-500 mt-1">Found {mockThreads.length} threads where your product can provide value.</p>
                </div>
                <Badge variant="secondary" className="bg-orange-100 text-[#FF4500] border-none px-4 py-1.5 rounded-full font-bold">
                    {mockThreads.length} New Threads
                </Badge>
            </div>

            <TooltipProvider>
                <div className="grid gap-6">
                    {mockThreads.map((thread) => (
                        <motion.div
                            key={thread.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Card
                                onClick={() => setSelectedThread(thread)}
                                className="group border-black/5 hover:border-black/10 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all cursor-pointer overflow-hidden"
                            >
                                <CardContent className="p-0">
                                    <div className="p-8">
                                        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                                            <div className="flex-1 space-y-4">
                                                <div className="flex flex-wrap items-center gap-3">
                                                    <span className="font-bold text-black text-sm">{thread.subreddit}</span>
                                                    <span className="text-neutral-300">•</span>
                                                    <span className="text-neutral-500 text-sm">{thread.time}</span>

                                                    <div className="flex items-center gap-2 ml-2">
                                                        <Badge variant="secondary" className={cn(
                                                            "px-2.5 py-0.5 rounded-lg border-none flex items-center gap-1.5 font-bold",
                                                            thread.intent === 'High' ? "bg-green-50 text-green-700" : "bg-blue-50 text-blue-700"
                                                        )}>
                                                            <Zap className="w-3 h-3 fill-current" />
                                                            {thread.intent} Intent
                                                        </Badge>

                                                        <Badge variant="secondary" className={cn(
                                                            "px-2.5 py-0.5 rounded-lg border-none flex items-center gap-1.5 font-bold",
                                                            thread.safety === 'Safe' ? "bg-blue-50 text-blue-700" : "bg-orange-50 text-orange-700"
                                                        )}>
                                                            <ShieldCheck className="w-3 h-3" />
                                                            {thread.safety}
                                                        </Badge>

                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <div
                                                                    className="p-1 rounded-full text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors"
                                                                    onClick={(e) => e.stopPropagation()}
                                                                >
                                                                    <Info className="w-4 h-4" />
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent className="max-w-[240px] p-3 text-sm leading-relaxed">
                                                                <p className="font-bold mb-1">Why this thread?</p>
                                                                {thread.reason}
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </div>
                                                </div>

                                                <h3 className="text-2xl font-bold leading-tight group-hover:text-[#FF4500] transition-colors font-[family-name:var(--font-instrument-serif)]">
                                                    {thread.title}
                                                </h3>

                                                <p className="text-neutral-500 line-clamp-2 leading-relaxed">
                                                    {thread.reason}
                                                </p>
                                            </div>

                                            <Button
                                                variant="ghost"
                                                className="rounded-xl px-4 py-2 hover:bg-orange-50 hover:text-[#FF4500] font-bold shrink-0 self-end md:self-center"
                                            >
                                                View thread <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </TooltipProvider>

            <div className="flex justify-center pt-8">
                <Button variant="ghost" className="text-neutral-400 hover:text-black">
                    Show older threads
                </Button>
            </div>
        </div>
    );
}
