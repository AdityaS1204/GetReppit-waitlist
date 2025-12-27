"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Check,
    ChevronRight,
    Layout,
    Users,
    Zap,
    Shield,
    Plus,
    X,
    Info
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

type Step = 1 | 2 | 3 | 4 | 'success';

const ProjectSetupForm = ({ onComplete }: { onComplete?: () => void }) => {
    const [step, setStep] = useState<Step>(1);
    const [formData, setFormData] = useState({
        // Step 1
        productName: '',
        description: '',
        problem: '',
        // Step 2
        primaryUser: '',
        industry: [] as string[],
        companyStage: '',
        // Step 3
        useCases: [] as string[],
        keywords: [] as string[],
        painPhrases: '',
        // Step 4
        competitors: [] as string[],
        avoidMentioning: [] as string[],
        experienceLevel: '',
        // Target subreddits
        targetSubreddits: [] as string[]
    });

    const [tempTag, setTempTag] = useState({
        useCases: '',
        keywords: '',
        competitors: '',
        subreddits: ''
    });

    const handleNext = () => setStep((s) => (s as number + 1) as Step);
    const handleBack = () => setStep((s) => (s as number - 1) as Step);
    const handleFinish = () => setStep('success');

    const addTag = (field: 'useCases' | 'keywords' | 'competitors' | 'targetSubreddits') => {
        const tempField = field === 'targetSubreddits' ? 'subreddits' : field;
        if (!tempTag[tempField as keyof typeof tempTag]) return;
        setFormData(prev => ({
            ...prev,
            [field]: [...(prev[field as keyof typeof prev] as string[]), tempTag[tempField as keyof typeof tempTag]]
        }));
        setTempTag(prev => ({ ...prev, [tempField]: '' }));
    };

    const removeTag = (field: 'useCases' | 'keywords' | 'competitors' | 'targetSubreddits', tag: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: (prev[field as keyof typeof prev] as string[]).filter(t => t !== tag)
        }));
    };

    const industries = ["SaaS", "Dev tools", "Fintech", "EdTech", "Marketing", "E-commerce"];
    const avoidOptions = ["Pricing", "Discounts", "Direct links", "Claims like \"best tool\"", "Testimonials"];

    const toggleIndustry = (ind: string) => {
        setFormData(prev => ({
            ...prev,
            industry: prev.industry.includes(ind)
                ? prev.industry.filter(i => i !== ind)
                : [...prev.industry, ind]
        }));
    };

    const toggleAvoid = (option: string) => {
        setFormData(prev => ({
            ...prev,
            avoidMentioning: prev.avoidMentioning.includes(option)
                ? prev.avoidMentioning.filter(o => o !== option)
                : [...prev.avoidMentioning, option]
        }));
    };

    const steps = [
        { id: 1, title: 'Product Overview', icon: Layout },
        { id: 2, title: 'Target Audience', icon: Users },
        { id: 3, title: 'Intent & Keywords', icon: Zap },
        { id: 4, title: 'Safety & Boundaries', icon: Shield },
    ];

    if (step === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-[720px] bg-white border border-black/5 rounded-[32px] p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] text-center"
            >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Check className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-4xl font-bold text-black font-[family-name:var(--font-instrument-serif)] mb-4">Setup Complete!</h2>
                <p className="text-neutral-500 text-lg mb-12 max-w-md mx-auto">
                    Your product profile is ready. Here's what Reppit will do next:
                </p>
                <div className="grid gap-4 text-left max-w-sm mx-auto mb-12">
                    {[
                        "Tracking relevant subreddits based on your ICP",
                        "Surfacing high-intent threads in real-time",
                        "Generating safe, non-spammy reply drafts"
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start py-4 px-6 bg-neutral-50 rounded-2xl border border-black/5">
                            <div className="min-w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center font-bold">
                                {i + 1}
                            </div>
                            <p className="text-neutral-700 font-medium text-sm">{item}</p>
                        </div>
                    ))}
                </div>
                <Button
                    size="lg"
                    className="w-full bg-[#FF4500] hover:bg-[#e63e00] shadow-[0_10px_30px_-10px_rgba(255,69,0,0.3)] transition-all"
                    onClick={() => onComplete ? onComplete() : window.location.reload()}
                >
                    Go to Dashboard
                </Button>
            </motion.div>
        );
    }

    return (
        <div className="w-full max-w-[900px] flex gap-12 items-start">
            {/* Left: Step Indicators */}
            <div className="hidden lg:flex flex-col gap-6 w-64 sticky top-32">
                {steps.map((s) => (
                    <div key={s.id} className="flex items-center gap-4 group">
                        <div className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
                            step === s.id
                                ? "bg-[#FF4500] text-white shadow-lg shadow-orange-500/20 scale-110"
                                : step > s.id
                                    ? "bg-green-500 text-white"
                                    : "bg-white border border-black/5 text-neutral-400"
                        )}>
                            {step > s.id ? <Check className="w-5 h-5" /> : <s.icon className="w-5 h-5" />}
                        </div>
                        <div className="flex flex-col">
                            <span className={cn(
                                "text-xs font-bold uppercase tracking-widest",
                                step === s.id ? "text-black" : "text-neutral-400"
                            )}>Step {s.id}</span>
                            <span className={cn(
                                "text-sm font-semibold",
                                step === s.id ? "text-black" : "text-neutral-500"
                            )}>{s.title}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right: Form Content */}
            <motion.div
                layout
                className="flex-1 bg-white border border-black/5 rounded-[32px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)]"
            >
                <div className="p-8 md:p-12">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div>
                                    <h2 className="text-3xl font-bold text-black font-[family-name:var(--font-instrument-serif)] mb-2">Product basics</h2>
                                    <p className="text-neutral-500">Help us understand what you’re building. This improves thread relevance and reply quality.</p>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="productName">Product name</Label>
                                        <Input
                                            id="productName"
                                            placeholder="Reppit"
                                            value={formData.productName}
                                            onChange={(e) => setFormData(p => ({ ...p, productName: e.target.value }))}
                                        />
                                        <p className="text-xs text-neutral-400">Used to reference your product naturally in replies.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="description">One-line description</Label>
                                        <Input
                                            id="description"
                                            placeholder="Find high-intent Reddit threads and turn them into SaaS leads."
                                            maxLength={140}
                                            value={formData.description}
                                            onChange={(e) => setFormData(p => ({ ...p, description: e.target.value }))}
                                        />
                                        <p className="text-xs text-neutral-400">Plain English works best. Avoid buzzwords.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="problem">What problem does your product solve?</Label>
                                        <Textarea
                                            id="problem"
                                            placeholder="Founders struggle to find relevant Reddit conversations..."
                                            value={formData.problem}
                                            onChange={(e) => setFormData(p => ({ ...p, problem: e.target.value }))}
                                        />
                                        <p className="text-xs text-neutral-400">This helps us match your product with real user pain on Reddit.</p>
                                    </div>
                                </div>

                                <div className="pt-4 flex items-center justify-between">
                                    <span className="text-sm text-neutral-400">You can edit this later</span>
                                    <Button
                                        size="lg"
                                        className="bg-[#FF4500] hover:bg-[#e63e00] shadow-[0_10px_30px_-10px_rgba(255,69,0,0.3)] transition-all hover:scale-[1.02] active:scale-95"
                                        onClick={handleNext}
                                    >
                                        Save & Continue <ChevronRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div>
                                    <h2 className="text-3xl font-bold text-black font-[family-name:var(--font-instrument-serif)] mb-2">Target audience</h2>
                                    <p className="text-neutral-500">Different audiences use different language on Reddit.</p>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <Label>Who is this product for?</Label>
                                        <Select
                                            value={formData.primaryUser}
                                            onValueChange={(v) => setFormData(p => ({ ...p, primaryUser: v }))}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select user type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {["SaaS founder", "Indie hacker", "Developer", "Marketer", "Small business owner"].map(opt => (
                                                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <p className="text-xs text-neutral-400">We tailor tone and phrasing based on this.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Industry</Label>
                                        <div className="flex flex-wrap gap-2">
                                            {industries.map(ind => (
                                                <Badge
                                                    key={ind}
                                                    variant={formData.industry.includes(ind) ? "default" : "secondary"}
                                                    className="cursor-pointer py-1.5 px-4 rounded-xl text-sm transition-all active:scale-95"
                                                    onClick={() => toggleIndustry(ind)}
                                                >
                                                    {ind}
                                                </Badge>
                                            ))}
                                        </div>
                                        <p className="text-xs text-neutral-400">Used to prioritize relevant subreddits.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Company stage</Label>
                                        <Select
                                            value={formData.companyStage}
                                            onValueChange={(v) => setFormData(p => ({ ...p, companyStage: v }))}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select stage" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {["Pre-revenue", "Early-stage", "Growing", "Established"].map(opt => (
                                                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <p className="text-xs text-neutral-400">Reddit language varies heavily by stage.</p>
                                    </div>
                                    <div className="space-y-4">
                                        <Label>Target subreddits (optional)</Label>
                                        <div className="flex gap-2">
                                            <Input
                                                placeholder="e.g. r/SaaS"
                                                value={tempTag.subreddits}
                                                onChange={(e) => setTempTag(t => ({ ...t, subreddits: e.target.value }))}
                                                onKeyDown={(e) => e.key === 'Enter' && addTag('targetSubreddits')}
                                            />
                                            <Button variant="outline" size="icon" onClick={() => addTag('targetSubreddits')}><Plus className="w-4 h-4" /></Button>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {formData.targetSubreddits.map(t => (
                                                <Badge key={t} className="gap-1 rounded-lg bg-black/5 text-black hover:bg-black/10 border-none px-3 py-1">
                                                    {t} <X className="w-3 h-3 cursor-pointer" onClick={() => removeTag('targetSubreddits', t)} />
                                                </Badge>
                                            ))}
                                        </div>
                                        <p className="text-xs text-neutral-400">
                                            If you already know where your audience is, add them here. <br />
                                            Not sure? We auto-suggest subreddits based on your product.
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-4 flex items-center justify-between">
                                    <Button variant="ghost" onClick={handleBack}>Back</Button>
                                    <Button
                                        size="lg"
                                        className="bg-[#FF4500] hover:bg-[#e63e00] shadow-[0_10px_30px_-10px_rgba(255,69,0,0.3)] transition-all hover:scale-[1.02] active:scale-95"
                                        onClick={handleNext}
                                    >
                                        Save & Continue <ChevronRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div>
                                    <h2 className="text-3xl font-bold text-black font-[family-name:var(--font-instrument-serif)] mb-2">Intent & keywords</h2>
                                    <p className="text-neutral-500">Tell us how people talk about this problem on Reddit.</p>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <Label>Core use-cases</Label>
                                        <div className="flex gap-2">
                                            <Input
                                                placeholder="e.g. lead generation"
                                                value={tempTag.useCases}
                                                onChange={(e) => setTempTag(t => ({ ...t, useCases: e.target.value }))}
                                                onKeyDown={(e) => e.key === 'Enter' && addTag('useCases')}
                                            />
                                            <Button variant="outline" size="icon" onClick={() => addTag('useCases')}><Plus className="w-4 h-4" /></Button>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {formData.useCases.map(t => (
                                                <Badge key={t} className="gap-1 rounded-lg bg-black/5 text-black hover:bg-black/10 border-none px-3 py-1">
                                                    {t} <X className="w-3 h-3 cursor-pointer" onClick={() => removeTag('useCases', t)} />
                                                </Badge>
                                            ))}
                                        </div>
                                        <p className="text-xs text-neutral-400">Short phrases work best.</p>
                                    </div>

                                    <div className="space-y-4">
                                        <Label>Reddit keywords</Label>
                                        <div className="flex gap-2">
                                            <Input
                                                placeholder="e.g. reddit marketing"
                                                value={tempTag.keywords}
                                                onChange={(e) => setTempTag(t => ({ ...t, keywords: e.target.value }))}
                                                onKeyDown={(e) => e.key === 'Enter' && addTag('keywords')}
                                            />
                                            <Button variant="outline" size="icon" onClick={() => addTag('keywords')}><Plus className="w-4 h-4" /></Button>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {formData.keywords.map(t => (
                                                <Badge key={t} className="gap-1 rounded-lg bg-black/5 text-black hover:bg-black/10 border-none px-3 py-1">
                                                    {t} <X className="w-3 h-3 cursor-pointer" onClick={() => removeTag('keywords', t)} />
                                                </Badge>
                                            ))}
                                        </div>
                                        <p className="text-xs text-neutral-400">These help us surface high-intent threads early.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="painPhrases">Common pain phrases (Optional but powerful)</Label>
                                        <Textarea
                                            id="painPhrases"
                                            placeholder="“getting no traction”, “marketing isn’t working”"
                                            value={formData.painPhrases}
                                            onChange={(e) => setFormData(p => ({ ...p, painPhrases: e.target.value }))}
                                        />
                                        <p className="text-xs text-neutral-400 flex items-center gap-1"><Info className="w-3 h-3" /> This improves intent scoring. Highly recommended.</p>
                                    </div>
                                </div>

                                <div className="pt-4 flex items-center justify-between">
                                    <Button variant="ghost" onClick={handleBack}>Back</Button>
                                    <Button
                                        size="lg"
                                        className="bg-[#FF4500] hover:bg-[#e63e00] shadow-[0_10px_30px_-10px_rgba(255,69,0,0.3)] transition-all hover:scale-[1.02] active:scale-95"
                                        onClick={handleNext}
                                    >
                                        Save & Continue <ChevronRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div>
                                    <h2 className="text-3xl font-bold text-black font-[family-name:var(--font-instrument-serif)] mb-2">Safety & boundaries</h2>
                                    <p className="text-neutral-500">Tell us what to avoid to keep your account safe.</p>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <Label>Competitors / alternatives (optional)</Label>
                                        <div className="flex gap-2">
                                            <Input
                                                placeholder="e.g. Gumroad"
                                                value={tempTag.competitors}
                                                onChange={(e) => setTempTag(t => ({ ...t, competitors: e.target.value }))}
                                                onKeyDown={(e) => e.key === 'Enter' && addTag('competitors')}
                                            />
                                            <Button variant="outline" size="icon" onClick={() => addTag('competitors')}><Plus className="w-4 h-4" /></Button>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {formData.competitors.map(t => (
                                                <Badge key={t} className="gap-1 rounded-lg bg-black/5 text-black hover:bg-black/10 border-none px-3 py-1">
                                                    {t} <X className="w-3 h-3 cursor-pointer" onClick={() => removeTag('competitors', t)} />
                                                </Badge>
                                            ))}
                                        </div>
                                        <p className="text-xs text-neutral-400">Used to avoid direct comparisons in replies.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Avoid mentioning</Label>
                                        <div className="flex flex-wrap gap-2">
                                            {avoidOptions.map(opt => (
                                                <Badge
                                                    key={opt}
                                                    variant={formData.avoidMentioning.includes(opt) ? "default" : "secondary"}
                                                    className="cursor-pointer py-1.5 px-4 rounded-xl text-sm transition-all"
                                                    onClick={() => toggleAvoid(opt)}
                                                >
                                                    {opt}
                                                </Badge>
                                            ))}
                                        </div>
                                        <p className="text-xs text-neutral-400">Helps reduce removals and bans.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Your Reddit experience</Label>
                                        <Select
                                            value={formData.experienceLevel}
                                            onValueChange={(v) => setFormData(p => ({ ...p, experienceLevel: v }))}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select level" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {["Beginner", "Intermediate", "Experienced"].map(opt => (
                                                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <p className="text-xs text-neutral-400 text-neutral-400">Beginners get safer, more conservative replies.</p>
                                    </div>
                                </div>

                                <div className="pt-4 flex items-center justify-between">
                                    <Button variant="ghost" onClick={handleBack}>Back</Button>
                                    <Button
                                        size="lg"
                                        className="px-12 bg-[#FF4500] hover:bg-[#e63e00] shadow-[0_10px_30px_-10px_rgba(255,69,0,0.3)] transition-all hover:scale-[1.02] active:scale-95"
                                        onClick={handleFinish}
                                    >
                                        Finish setup
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectSetupForm;
